var express=require('express');
var app=express();
var router=express.Router();

//处理cookie,session
var session=require("express-session");
var cookieParser=require('cookie-parser');
app.use(cookieParser());

//处理post请求
var bodyParser=require("body-parser");
app.use(bodyParser());

//设置主页
router.get("/",function(req,res){
    res.sendFile(__dirname+"/views/index.html");
});

//设置站点图标
router.get("/favicon.ico",function(req,res){
    res.sendFile(__dirname+"/public/img/favicon.ico");
});

//设置栏目页
router.get('/:view',function(req,res){
    res.sendFile(__dirname+"/views/"+req.params.view+".html");
})

//登陆验证
router.post("/userLogin",function(req,res){
    res.send(req.body)
})

router.get("")
//设置静态路径
app.use(express.static("./public"));


//设置路由挂载路径
app.use("/",router);

//监听端口8888
app.listen(8888);
console.log("端口8888已启用！服务已开启！");