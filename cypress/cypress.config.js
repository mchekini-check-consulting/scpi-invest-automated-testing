const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      on("task", {
        async connectDB(query){
          const client = new Client({
            user: "postgres",
            password: "staff-manager",
            host: "database-1.chqar689pasc.us-east-2.rds.amazonaws.com",
            database: "postgres",
            ssl: false,
            port: 5432
          })

          const clientDB = new pg.Pool(dbConfig)
          //return thw result from sql
          return clientDB.query(sql)
          // await client.connect()
          // const res = await client.query(query)
          // await client.end()
          // return res.rows;
        }
      })
    },
  },
});
