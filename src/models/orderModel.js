const mongoose=require('mongoose')
const ObjId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    
    userId : ObjId,
    productId : ObjId,
    amount: Number,
    isFreeAppUser : Boolean,
    date: Date



}, {timestamps: true} )



module.exports=mongoose.model('Order',orderSchema)

