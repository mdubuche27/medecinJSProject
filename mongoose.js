const mongoose = require('mongoose');
var db

exports.connect = () => {
    try {
        db = mongoose.connect("mongodb+srv://maxence:maxence@cluster0.p9yev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("connect to mongodb")
        console.log(mongoose.connections.length)
    }
    catch (e) {
        console.log("une erreur est surevenue lors de la connection a mongodb \r\n\r\n" + e)
    }
}