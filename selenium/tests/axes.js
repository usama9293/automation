const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://money.rediff.com/gainers");
    //xpath axes

    driver
      .findElement(
        By.xpath("//a[normalize-space()='Vrundavan Plantation']/self::a")
      )
      .click();

    await driver.sleep(3000);

    driver.manage().window().maximize();
  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
