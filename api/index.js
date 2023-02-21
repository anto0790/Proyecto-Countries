//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios= require('axios');


async function dataLoad(){
  const api= await axios.get("https://restcountries.com/v3/all");

  api.data.map(async country=>{
    let cap = country.capital ? country.capital[0] : "Capital doesn't exist";

    const obj={
        id: country.cca3,
        image: country.flags[0],
        continent: country.region,
        capital: cap,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
    }
    await Country.findOrCreate({where: {name:country.name.common}, defaults: obj});
  })

}

// Syncing all the models at once.
conn.sync({ force: false }).then(async() => {
  await dataLoad();

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
