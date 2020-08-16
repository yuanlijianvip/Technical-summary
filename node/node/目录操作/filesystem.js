//目录操作
//创建目录
const fs = require("fs");
// fs.mkdir("11",err => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("创建成功");
// })
//修改目录名称
// fs.rename("11", "22", err => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("修改成功");
// })

//读取目录
// fs.readdir("22", (err, data)=>{
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// })

//删除目录（空文件夹/目录）
// fs.rmdir("11",err=> {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("删除目录");
// })

//判断文件或者目录是否存在
// fs.exists("22", exists=> {
//   console.log(exists);
// })

//获取文件或者目录的详细信息
// fs.stat("22", (err, stat)=> {
//   if(err){
//     return console,log(err);
//   }
//   // console.log(stat);
//   //判断文件是否是文件
//   // let res = stat.isFile();
//   //判断是否是一个文件夹
//   // let res =stat.isDirectory();
//   // console.log(res);
// })

// 删除非空文件夹；
// 先把目录里的文件删除-->删除空目录；
// function removeDir(path){
//   let data = fs.readdirSync(path);
//   for(let i=0;i<data.length;i++){
//        let url = path + "/" + data[i];
//        let stat =  fs.statSync(url);
//        if(stat.isDirectory()){
//            //目录 继续查找；
//            removeDir(url);
//        }else{
//            // 文件 删除
//            fs.unlinkSync(url);
//        }
//   }
//    //  删除空目录
//   fs.rmdirSync(path);
// }
// removeDir("22");

