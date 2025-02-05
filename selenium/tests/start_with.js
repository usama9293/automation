const { start } = require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://omayo.blogspot.com/2013/05/page-one.html");

    let text = await driver.findElement(
      By.xpath("//*[starts-with(text(),'Practice')]")
    );

    console.log(await text.getText());
  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
// This is a self-invoking function
