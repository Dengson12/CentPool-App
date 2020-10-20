const { model, Schema } = require('mongoose');

const paymentSchema = new Schema({
    username: String,
    account: String,
    poolAssign: String,
    paymentDate: Date,
    paymentTime: DocumentTimeline
})

model.exports = model('Payment', paymentSchema);