const puppeteer = require('puppeteer');
const HtmlTableToJson = require('html-table-to-json');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

    const Data = mongoose.model('corona', DataSchema);

    const url = "https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vR30F8lYP3jG7YOq8es0PBpJIE5yvRVZffOyaqC0GgMBN6yt0Q-NI8pxS7hd1F9dYXnowSC6zpZmW9D/pubhtml/sheet?headers=true&gid=0&range=A7:H199";
    /* Initiate the Puppeteer browser */
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    /* Go to the IMDB Movie page and wait for it to load */
    await page.goto(url, {waitUntil: 'networkidle0'});

    /* Run javascript inside of the page */
    let data = await page.evaluate(() => {

        /*let totalConfirmed =  Array.from(document.querySelectorAll('.wp-block-table'), element => element.innerText);*/
        /* let container =  document.querySelector('#mvp-content-main');
         let tables = container.querySelectorAll('.wp-block-table');*/
        /*  let regionsTable = Array.from(tables[1].querySelectorAll('tr'), element => element.innerText);
          let internationalTable = Array.from(tables[2].querySelectorAll('tr'), element => element.innerText);
          let mainlandTable = Array.from(tables[0].querySelectorAll('tr > td'), element => element.innerText);*/

        /*   const container = document.querySelectorAll('#ritz');
           const tables = Array.from(container[0].querySelectorAll('#waffle'), element => element.outerHTML);*/

        /* let regionsTable = Array.from(tables[1].querySelectorAll('table'), element => element.outerHTML);*/

        const container = document.querySelector('div[class="ritz grid-container"]').innerHTML;

        /* Returning an object filled with the scraped data */
        return container
    });
    /*console.log(data);*/

    const mainlandTable = HtmlTableToJson.parse(data);
    const mainlandTableResult = mainlandTable.results.flat();
    /* const resultFunction = function () {
         Object(mainlandTableResult).map(function (item) {
             const newObject = {
                 case: item.A,
                 newCase: item.B,
                 death: item.C,
                 newDeath: item.D,
                 deathRatio: item.E,
                 seriousCase: item.F,
                 recovered: item.G
             }

             return newObject;
         })
     }
     const result = await resultFunction();
     console.log(result)*/

    const instance = new Data({
        entries: mainlandTableResult
    });
    instance.save((err, data) => {
        if (err) {
            console.log('error', err);
        }
        else
            console.log(data);

    });

    /* Outputting what we scraped */
    browser.close();
})();
