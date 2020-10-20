const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    account: String,
    createdAt: String
})

model.exports = model('User', userSchema);
