const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tabletojson = require('tabletojson').Tabletojson;

(async () => {
    await mongoose.connect('mongodb://localhost/infectmap', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('db ok')
    })
    const DataSchema = new Schema({
        entries: JSON,
        date: {type: Date, default: Date.now}
    })

    const Data = mongoose.model('coronatotal', DataSchema);

    const corona = await tabletojson.convertUrl(
        'https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vR30F8lYP3jG7YOq8es0PBpJIE5yvRVZffOyaqC0GgMBN6yt0Q-NI8pxS7hd1F9dYXnowSC6zpZmW9D/pubhtml/sheet?headers=false&gid=0&range=A4:E4',
        { useFirstRowForHeadings: true, headings: ['id','case','death','recovered','unresolved']},
        function(tablesAsJson) {
            return tablesAsJson.flat().splice(1,1);
        }
    );

    const instance = new Data({
        entries: corona
    });
    instance.save((err, data) => {
        if (err) {
            console.log('error', err);
        }
        else
            console.log(data);

    });
})();
