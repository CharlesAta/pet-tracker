const PostModel = require("../models/post")
const fs = require("fs")
const axios = require('axios');

module.exports = {
    createPost,
    createImage
}

function base64_encode(image){
    let bitmap = fs.readFileSync(image);
    return bitmap.toString('base64');
}

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
      } catch(err) {
         res.status(400).json(err);
      }
}
