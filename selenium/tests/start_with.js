const { start } = require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://omayo.blogspot.com/2013/05/page-one.html");

    // Find element that starts with 'Practice'
    let startsWithText = await driver.findElement(
      By.xpath("//*[starts-with(text(),'Practice')]")
    );
    console.log("Starts with 'Practice':", await startsWithText.getText());

    // Find element that contains 'Practice'
    let containsText = await driver.findElement(
      By.xpath("//*[contains(text(),'Practice')]")
    );
    console.log("Contains 'Practice':", await containsText.getText());
  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
