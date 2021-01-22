var express = require('express');
var router = express.Router();
const baseUrl = require('../Service');
const ServiceController = require("../controllers/ServiceController");
const UserController = require("../controllers/UserController");
const RoleController = require("../controllers/RoleController");
const CategoryController = require("../controllers/CategoryController");
const TagController = require("../controllers/TagController");
const CompanyController = require("../controllers/CompanyController");
const MenuController = require("../controllers/MenuController");
const PostController = require("../controllers/PostController");
const MenuHasCategoryController = require('../controllers/MenuHasCategoryController');
const PermissionController = require('../controllers/PermissionController');

var cors = require('cors');

var multer = require('multer');
var path = require('path')
router.use(express.static('public'))

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');
var mv = require('mv');

router.use(cors());

// Login 
router.post('/api/v1/login', cors(), UserController.login);

// Upload File 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.'+path.extname(file.originalname))
    }
 });
 
 const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000}
});

router.post('/api/v1/upload', cors(), upload.single('file'), ServiceController.upload);
router.get('/api/v1/send/:file(*)', cors(), ServiceController.sendFile);
router.delete('/api/v1/delete/file/:file', cors(), ServiceController.destroyFile);

router.post('/api/v1/uploader', cors(), multipartMiddleware, function(req, res) {
  var tempFile = req.files.upload;
  var temPathFile = tempFile.path;
  var targetPathUrl = __dirname + '/../public/uploads/' + req.files.upload.name;

  if(path.extname(tempFile.originalFilename).toLocaleLowerCase() === '.png'|| '.jpg'){
    mv(temPathFile, targetPathUrl, error => {
      if(error){
        return console.log(error);
      }else{
        res.status(200).json({
          uploaded:true,
          url: `${baseUrl}/uploads/${tempFile.originalFilename}`
      })
        return console.log(req.files);
      }
    });
  }
})

// Company
router.get('/api/v1/company/:id', cors(), CompanyController.findOne);
router.put('/api/v1/company/:id', cors(), CompanyController.update);
// Menu
router.get('/api/v1/menu/:id', cors(), MenuController.findOne);
router.put('/api/v1/menu/:id', cors(), MenuController.update);
router.get('/api/v1/menuHasCategory', cors(), MenuHasCategoryController.find);
router.post('/api/v1/menuHasCategory', cors(), MenuHasCategoryController.create);
router.delete('/api/v1/menuHasCategory/:id', cors(), MenuHasCategoryController.destroy);
// User
router.get('/api/v1/user', cors(), UserController.find); 
router.get('/api/v1/user/:id', cors(), UserController.findOne);
router.get('/api/v1/user/count/all', UserController.userCount);
router.post('/api/v1/user', cors(), UserController.create);
router.put('/api/v1/user/:id', cors(), UserController.update);
router.delete('/api/v1/user/:id', cors(), UserController.destroy);
// Role
router.get('/api/v1/role', RoleController.find);
router.get('/api/v1/role/:id', cors(), RoleController.findOne);
router.post('/api/v1/role', RoleController.create);
router.put('/api/v1/role/:id', RoleController.update);
router.delete('/api/v1/role/:id', RoleController.destroy);
// Category
router.get('/api/v1/category', CategoryController.find);
router.get('/api/v1/category/:id', CategoryController.findOne);
router.post('/api/v1/category', CategoryController.create);
router.put('/api/v1/category/:id', CategoryController.update);
router.delete('/api/v1/category/:id', CategoryController.destroy);
// Tags
router.get('/api/v1/tag', TagController.find);
router.get('/api/v1/tag/:id', TagController.findOne);
router.post('/api/v1/tag', TagController.create);
router.put('/api/v1/tag/:id', TagController.update);
router.delete('/api/v1/tag/:id', TagController.destroy);
// Post
router.get('/api/v1/post/pagination/:page', PostController.pagination);
router.get('/api/v1/post', PostController.find);
router.get('/api/v1/post/limit', PostController.findLimit);
router.get('/api/v1/post/count/all', PostController.postCount);
router.get('/api/v1/post/:id', PostController.findOne);
router.post('/api/v1/post', PostController.create);
router.put('/api/v1/post/:id', PostController.update);
router.delete('/api/v1/post/:id', PostController.destroy);
// Permission
router.get('/api/v1/permission', PermissionController.find);

module.exports = router;