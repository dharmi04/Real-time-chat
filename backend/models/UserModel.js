const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, required: true, default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddefault%2Bprofile&psig=AOvVaw0RHJgWhK1F8YsSa7hwBWoi&ust=1698762275455000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDB2uH8nYIDFQAAAAAdAAAAABAE" },
})