const PostModel = require("../models/post")
const UserModel = require("../models/user")
const fs = require("fs")
const axios = require('axios');
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const handlebars = require('handlebars')

const mongoose = require('mongoose');

module.exports = {
    createPost,
    createImage,
    postsIndex,
    postShow,
    postLatest,
    deletePost,
    searchPost,
    allPosts
}

// function escapeRegex(text) {
//     return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/gi, "");
// };

async function allPosts(req, res) {
    try {
    const allPosts = await PostModel.find().sort([['createdAt', -1]]).exec()
      res.status(200).json(allPosts)        
    } catch(err) {
      res.status(400).json(err);
    }
  }

async function searchPost(req, res) {

    results = ".*" + req.query.s + ".*";
    let searchResults = []
    try {
        if(mongoose.Types.ObjectId.isValid(results)){
            searchResults = await PostModel.find({_id: results}).exec();
        } else {
            searchResults = await PostModel.find(
                {$or: [
                { "name":  new RegExp(results, 'i')  },
                { "species":  new RegExp(results, 'i')  },
                { "postalCode":  new RegExp(results, 'i')  }
            ]}).exec();
        }
    res.status(200).json(searchResults)  
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deletePost(req, res) {

    try {
        let post = await PostModel.findById(req.params.postid);
        let user = await UserModel.findById(req.params.userid);
        if (user.post.includes(post._id)) {
            let postIdx = user.post.indexOf(post._id);
            user.post.splice(postIdx, 1);
            await user.save();
            await PostModel.deleteOne({'_id': post._id});
        }

        res.status(200).json("success")    

    } catch (err) {
        res.status(400).json(err);
    }
}

async function postsIndex(req, res) {
    try {
    const startIndex = (req.query.page - 1) * 10
    let posts = await PostModel.find().sort([['createdAt', -1]]).skip(startIndex).limit(10).exec()
    let count = await PostModel.countDocuments().exec() 
    let totalPages = Math.ceil(count/10)

      res.status(200).json({posts, totalPages})        
    } catch(err) {
      res.status(400).json(err);
    }
  }

  async function postLatest(req, res) {
    try {
    const latestPost = await PostModel.find().sort([['createdAt', -1]]).limit(1).exec()
      res.status(200).json(latestPost)        
    } catch(err) {
      res.status(400).json(err);
    }
  }


async function postShow(req, res) {
    try {
        let post = await PostModel.findById(req.params.id).exec()
        res.status(200).json(post)
    }catch(err){
        res.status(400).json(error)
    }
}


function base64_encode(image){
    let bitmap = fs.readFileSync(image);
    return bitmap.toString('base64');
}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

transporter.use("compile",hbs({
    viewEngine:{
       partialsDir:"views",
       defaultLayout:""
   },
    viewPath:"views",
    extName:".handlebars"
}));

const readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};


async function createImage(req, res){
    let image = base64_encode(req.files.file.file);

    try {
        let imgurData = await axios.post('https://api.imgur.com/3/image', {
            image: image,
            type: 'base64'
        }, {
            headers: {
                Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
            },
        });
        res.json({link: imgurData.data.data.link});
    } catch (err) {
        console.log(err);
    }
}

async function createPost(req, res){
    console.log("req.body", req.body)
     try {
         let user = await UserModel.findOne({email: req.body.formData.userInfo.email})
         
         let created = await PostModel.create(req.body.formData.petState)

         user.post.push(created._id)
         await user.save()
         await user.update({
            name: req.body.formData.userInfo.name,
            phoneNumber: req.body.formData.userInfo.phoneNumber,
            postalCode: req.body.formData.userInfo.postalCode,
        })
         
         res.status(200).json(created)
         let type = created.photo.match(/\.[0-9a-z]+$/i)[0]
            readHTMLFile(__dirname + '/../views/main.html', function(err, html) {
                let template = handlebars.compile(html)
                let replacements= {
                    name: created.name,
                    species: created.species,
                    email:created.email,
                    phoneNumber: created.phoneNumber,
                    location: created.location,
                    description: created.description,
                    status: created.status.toUpperCase(),
                    time: created.createdAt.toLocaleDateString()
                }
                let htmlToSend = template(replacements)
                let mailOptions = {
                from: process.env.EMAIL_ADDRESS,
                to: user.email,
                subject: 'EMERGENCY - PET LOST',
                html: htmlToSend,
                attachments:[
                    { filename: created.name+type, path: created.photo} 
                ]
              };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                    });
                })
      } catch(err) {
         res.status(400).json(err);
    }
}

