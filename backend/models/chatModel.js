//chatname, isgroupchat, userlist, latestmsg, group admin

const mongoose = require('mongoose')

const chatModel = mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{
        type: mongoooose.Schema.Types.ObjectId,
        ref: "User"
    },],
    latestMessage: {
        type: mongoooose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoooose.Schema.Types.ObjectId,
        ref: "User",
    },
},
{
        timestamps: true,
    }
);

const Chat= mongoose.mmodel("Chat", chatModel)

module.exports =Chat;