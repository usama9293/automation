const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://money.rediff.com/gainers");

    // Click on the element using self axis
    let element = await driver
      .findElement(
        By.xpath("//a[normalize-space()='Diffusion Engineers']/self::a")
      )
      .getText();

    console.log("element", element);
    let parent = await driver
      .findElement(
        By.xpath("//a[normalize-space()='Diffusion Engineers']/parent::td")
      )
      .getText();

    console.log("parent", parent);

    //child size
    let childElements = await driver.findElements(
      By.xpath(
        "//a[normalize-space()='Diffusion Engineers']/ancestor::tr/child::*"
      )
    );

    console.log("Number of child elements:", childElements.length);

    //ancestor node texts

    let ancestor = await driver
      .findElement(
        By.xpath("//a[normalize-space()='Diffusion Engineers']/ancestor::tr")
      )
      .getText();

    console.log("ancestor", ancestor);

    // Get the parent node (td)
  } catch (error) {
    console.error("❌ Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
