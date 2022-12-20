var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var countrySchema=new Schema({
  name:{type:String},
  states:[{type:Schema.Types.ObjectId, ref:"State"}],
  continent:{type:String},
  population:{type:Number},
  religion:{type:String},
  neighbouring_countires:{type:Schema.Types.ObjectId, ref:"Country"},
  area:{type:Number},
},{timestamps:true});

var Country=mongoose.model("Country",countrySchema);
module.exports=Country;