const puppeteer = require('puppeteer');
const HtmlTableToJson = require('html-table-to-json');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


(async () => {
    await mongoose.connect('mongodb://localhost/infectmap', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {console.log('db ok')})
     const DataSchema = new Schema({
        mainland: String,
        region: String,
        international: String,
        date: { type: Date, default: Date.now }
    })

    const Data = mongoose.model('Data', DataSchema);

    const url = "https://bnonews.com/index.php/2020/02/the-latest-coronavirus-cases/";
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

        const container = document.querySelectorAll('#mvp-content-main');

        const tables = Array.from(container[0].querySelectorAll('table'), element => element.outerHTML);
        /* let regionsTable = Array.from(tables[1].querySelectorAll('table'), element => element.outerHTML);*/

        /* Returning an object filled with the scraped data */
        return {
            a: tables
        }

    });

    const mainlandTable = HtmlTableToJson.parse(data.a[0]);
    const otherPlacesTable = HtmlTableToJson.parse(data.a[1]);
 /*   const internationalTable = HtmlTableToJson.parse(data.a[2]);*/
    const mainlandTableResult = JSON.stringify(mainlandTable.results.flat());
    const otherPlacesTableResult = JSON.stringify(otherPlacesTable.results.flat());
/*    const internationalTableResult = JSON.stringify(internationalTable.results.flat());*/

    const instance = new Data({
        mainland: mainlandTableResult,
        region: otherPlacesTableResult
    });
    instance.save((err,data) =>  {
        if(err){
            console.log('error',err);
        }
        else
            console.log(data);
    });

    /* Outputting what we scraped */
    browser.close();
})();
