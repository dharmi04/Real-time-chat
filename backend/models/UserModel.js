const mongoose = require('mongoose')
const bcrypt= require('bcryptjs') 
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    pic: { type: String, required: true, default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddefault%2Bprofile&psig=AOvVaw0RHJgWhK1F8YsSa7hwBWoi&ust=1698762275455000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDB2uH8nYIDFQAAAAAdAAAAABAE" },
    },
    { timestamps: true }
)

userSchema.methods.matchPassword= async function(enteredPassword){
    return await  bcrypt.compare(enteredPassword, this.password)

}
userSchema.pre('save',async function(next){
    if(!this.ismodified){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password= bcrypt.hash(this.password, salt);
})

const User= mongoose.model("User", userSchema)
module.exports = User;