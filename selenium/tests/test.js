const { Builder } = require("selenium-webdriver");

(async function openGoogle() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.google.com");
    console.log("Google opened successfully!");
    driver.findElement({ name: "q" }).sendKeys("Selenium", "\n");

    

    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();
