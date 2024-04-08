const Routers = require('express').Router();

//--------------------------- Middlewares Specific Stuff ---------------------------------X
const isAuthenticated = require('../middlewares/isAuthenticated'); //fetch user by the token
const UploadFile = require('../middlewares/UploadFile'); //Upload files

//------------------ Controllers Specific Stuff-------------------------X
const AuthControllers = require('../controllers/AuthControllers');


//----------------------- INitizlalzing auth apis's routes here -------------------X
Routers.post('/register', UploadFile, AuthControllers().Register); //Register the users ,using POST '/api/user/register'
Routers.post('/login', AuthControllers().Login); //login the users ,using POST '/api/user/login'
Routers.get('/getUser', isAuthenticated, AuthControllers().getUser); //get info of login users ,using GET '/api/user/getUser'


module.exports = Routers