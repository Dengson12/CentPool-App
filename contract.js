const { model, Schema } = require('mongoose');

const contractSchema = new Schema({
    username: String,
    account: String,
    pool: String,
    startDate: Date,
    endDate: Date,
    createdAt: String,
    contribution: Float32Array,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        }
    ],
    dates: [
        {
            startDate: Date,
            endDate: Date
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'contract'
    }
});

module.exports = model('Contract', 'contractSchema');