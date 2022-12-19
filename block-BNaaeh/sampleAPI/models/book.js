var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var bookSchema= new Schema({
  name:{type:String},
  title:{type:String},
  description:{type:String},
  page:{type:Number},
  commentId:{type:Schema.Types.ObjectId, ref:"Comment"}
},{timestamps:true});

var Book=mongoose.model("Book",bookSchema);
module.exports=Book;