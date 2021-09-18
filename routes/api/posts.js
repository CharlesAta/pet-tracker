const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.post('/data', postsCtrl.createPost);
router.post('/image', postsCtrl.createImage);


module.exports = router;