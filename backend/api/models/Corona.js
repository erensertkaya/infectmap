const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoronaSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    entries: [{
       country: String,
        case: String,
        newCase: String,
        death: String,
        newDeath: String,
        deathRatio: String,
        seriousCase: String,
        recovered: String
    }],
    date: Date,
})

module.exports = mongoose.model('corona', CoronaSchema);

