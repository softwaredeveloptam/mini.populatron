const fs = require("fs");
const neatCsv = require("neat-csv");

module.exports = {
  totalPopulation(onFinished) {
    let totalPop = 0;

    fs.readFile("./cities.csv", async (err, data) => {
      if (err) {
        return;
      }
      let popdata = await neatCsv(data);

      totalPop = popdata.reduce((accum, current) => {
        return Number(accum) + Number(current["population"]);
      }, 0);

      onFinished(totalPop);
    });
  },
};
