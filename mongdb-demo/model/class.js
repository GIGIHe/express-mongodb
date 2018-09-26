//导入mongoose 模块
 var mongoose = require('mongoose');
//创建一个骨架
const schema = new mongoose.Schema({
    name:String,
    sid:Number,
    personaldesc:String
})
//初始化一个模型
// 第一个参数是model的名字，第二个参数是骨架，第三个参数集合名
const modelClass = mongoose.model('modelClass', schema, 'student');
//导出模型
module.exports=modelClass