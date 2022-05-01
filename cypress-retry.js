const fs = require("fs");
const cypress = require("cypress");
const args = process.argv.slice(2);

let arr = [];

try {
  const jsonString = fs.readFileSync("./failedReport.json", "utf8");
  const jsonFile = JSON.parse(jsonString);
  jsonFile.forEach((el) => {
    if (el.stats.failures) {
      arr.push(el.spec.relative);
    }
  });
} catch (err) {
  console.log(err);
}

let specs = arr.map((el) => "./" + el).toString();

if (specs.length > 0) {
  cypress
    .run({
      spec: `${specs}`,
      config: {
        baseUrl: args[0],
      },
    })
    .then((results) => {
      const jsonString = JSON.stringify(results.runs);
      fs.writeFile("./failedReport.json", jsonString, (err) => {
        if (err) {
          console.log("Error writing file: ", err);
        } else {
          console.log("Successfully wrote file");
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  console.log("No Failed Test");
}
