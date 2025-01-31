const { Builder, By, Key } = require("selenium-webdriver");

(async function runSeleniumTest() {
  // Initialize the browser (Chrome in this case)
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // Open Practice Test Automation login page
    await driver.get("https://practicetestautomation.com/practice-test-login/");

    // Locate username field and enter text
    let username = await driver.findElement(By.id("username"));  // Fixed locator
    await username.sendKeys("hello");

    // Locate password field and enter text
    let password = await driver.findElement(By.id("password"));  // Fixed locator
    await password.sendKeys("world");

    // Locate and click the submit button
    let loginButton = await driver.findElement(By.id("submit"));
    await loginButton.click();

    
    await driver.sleep(3000);  // Wait 3 seconds to observe results

  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
