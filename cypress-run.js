const cypress = require("cypress");
const fs = require("fs");
const args = process.argv.slice(2);

cypress
  .run({
    spec: "./src/integration/**",
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
