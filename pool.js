const userPool = new Schema({
    username: String,
    poolAssign: String,
    population: String,
    createdAt: String
})

model.exports = model('Pool', poolSchema);
