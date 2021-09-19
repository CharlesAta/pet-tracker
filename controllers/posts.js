const PostModel = require("../models/post")
const fs = require("fs")
const axios = require('axios');
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

module.exports = {
    createPost,
    createImage
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
        console.log(imgurData.data.data.link)
        res.json({link: imgurData.data.data.link});
    } catch (err) {
        console.log(err);
    }
}

async function createPost(req, res){
    console.log("req.body", req.body)
     try {
         let created = await PostModel.create(req.body.petState)
         console.log("created", created)
         res.status(200).json('ok')
         let type = created.photo.match(/\.[0-9a-z]+$/i)[0]
        if(created.status === "lost"){
            let mailOptions = {
                from: process.env.EMAIL_ADDRESS,
                to: 'lynnyangnc@gmail.com',
                subject: 'EMERGENCY - PET LOST',
                template:'main',
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
        }
      } catch(err) {
         res.status(400).json(err);
    }
}

