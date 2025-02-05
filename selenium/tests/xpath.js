const { start } = require("chromedriver");
const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.saucedemo.com/v1/index.html");

    let uname = await driver.findElement(
      By.xpath("//*[@id='user-name' or @name='user-name']")
    );
    await uname.sendKeys("standard_user");

    let pass = await driver.findElement(
      By.xpath("//*[@id='password' or @name='password']")
    );
    await pass.sendKeys("secret_sauce");

    let login = await driver.findElement(
      By.xpath("//*[@id='login-button' or @name='login-button']")
    );
    await login.click();
  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
