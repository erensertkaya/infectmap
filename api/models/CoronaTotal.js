const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoronaTotalSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    entries: [{
        case: String,
        death: String,
        unresolved: String,
        recovered: String
    }],
    date: Date,
})

module.exports = mongoose.model('coronatotal', CoronaTotalSchema);

