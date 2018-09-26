var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var bodyParser = require('body-parser')

//路由分离的步骤:
//实现一级路由
// 导入cat.js中的router对象
const cat = require('./routes/cat')
// 导入post中的router对象
const post = require('./routes/post')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indexdemo = require("./routes/test")
//引入表单的路由对象
var forms = require('./routes/formData')
var pachong = require('./pachong')

//引入mongoose
 var mongoose = require('mongoose');
//  连接数据库
 mongoose.connect('mongodb://localhost/demo', {
   useNewUrlParser: true
 });


 var db = mongoose.connection;
 db.on("err", console.error.bind(console, "连接失败"));
 db.once("open", function () {
   console.log('we are connected')
 })

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用body-parser解析post请求
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 凡是以/cat打头的，都交给cat中间件处理
app.use('/cat', cat)
//凡是以/post打头的，都交给post中间件处理
app.use('/post',post)
app.use('/index',indexdemo)
//配置表单路由的一级路由
app.use('/forms', forms)

app.use('/pc',pachong)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
