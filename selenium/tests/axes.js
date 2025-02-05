const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://money.rediff.com/gainers");

    // Click on the element using self axis
    await driver
      .findElement(
        By.xpath("//a[normalize-space()='Vrundavan Plantation']/self::a")
      )
      .click();

    // Get the parent node (td)

    // Get all child nodes
    let childNodes = await driver.findElements(
      By.xpath(
        "//a[normalize-space()='Vrundavan Plantation']/ancestor::tr/child::*"
      )
    );

    console.log("🔹 Number of Child Nodes:", childNodes.length);

    await driver.sleep(3000);

    // Get ancestor (tr)
    let ancestor = await driver
      .findElement(
        By.xpath("//a[normalize-space()='Vrundavan Plantation']/ancestor::tr")
      )
      .getText();

    console.log("🔹 Ancestor Row Text:", ancestor);
  } catch (error) {
    console.error("❌ Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
