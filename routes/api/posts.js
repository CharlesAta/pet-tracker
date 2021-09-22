const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');


router.use(require('../../config/auth'));
router.post('/data', postsCtrl.createPost);
router.post('/image', postsCtrl.createImage);
router.get('/', postsCtrl.postsIndex);
router.get('/latest', postsCtrl.postLatest);
router.get('/:id', postsCtrl.postShow);

module.exports = router;