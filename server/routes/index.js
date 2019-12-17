var express = require('express');
var router = express.Router();

var formidable = require('formidable');

/* GET home page. */
router.get('/', (res) => {
  res.render('index', { title: 'Express' });
});

router.post('/upload', (req, res) => {
  var form = new formidable.IncomingForm();
  //给图片文件添加后缀
  form.keepExtensions = true;
  // 设置文件接收图片的位置
  form.uploadDir = "uploads/";
  form.parse(req, (err, files) => {
		if(err){
			res.send('接受失败');
		}else{
			var imgUrl=files.file.path.substr(8);
			res.send(imgUrl);
		}
	});
});
module.exports = router;
