var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var stateSchema= new Schema({
  name:{type:String},
  country:{type:Schema.Types.ObjectId, ref:"Country"},
  population:{type:Number},
  area:{type:Number},
  neighbouring_states:{type:Schema.Types.ObjectId, ref:"State"},
},{timestamps:true});

var State=mongoose.model("State",stateSchema);
module.exports=State;