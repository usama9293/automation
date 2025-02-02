const { Builder, By, Key, until } = require("selenium-webdriver");
const fs = require("fs"); // To write to a file

let report = [];

async function logReport(message) {
  report.push(message);
  console.log(message);
}

(async function runSeleniumTest() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get(
      "https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407"
    );
    await logReport("Navigated to the form.");

    async function enterText(fieldId, text) {
      let element = await driver.findElement(By.id(fieldId));
      await element.sendKeys(text);
      await logReport(`Entered "${text}" in the field with ID: ${fieldId}`);
    }

    // Entering Text Fields
    await enterText("RESULT_TextField-1", "John");
    await enterText("RESULT_TextField-2", "Doe");
    await enterText("RESULT_TextField-4", "1234567890");
    await enterText("RESULT_TextField-5", "Pakistan");
    await enterText("RESULT_TextField-6", "Karachi");
    await enterText("RESULT_TextField-3", "usama@gmail.com");

    // Selecting the Male Radio Button (Clicking the Label)
    let genderLabel = await driver.findElement(
      By.xpath("//label[@for='RESULT_RadioButton-7_0']")
    );
    await genderLabel.click();
    await logReport("Selected 'Male' radio button.");

    // Selecting the Monday Checkbox
    let days = await driver.findElement(
      By.xpath("//label[normalize-space()='Monday']")
    );
    await days.click();
    await logReport("Selected 'Monday' checkbox.");

    // Selecting Best Time from Dropdown
    let bestTimeDropdown = await driver.findElement(
      By.id("RESULT_RadioButton-9")
    );
    await bestTimeDropdown.click(); // Open the dropdown
    let morningOption = await driver.findElement(
      By.xpath("//option[text()='Morning']")
    );
    await morningOption.click();
    await logReport("Selected 'Morning' from Best Time dropdown.");

    // File Upload (With Validation)
    let fileUpload = await driver.findElement(By.id("RESULT_FileUpload-10"));
    await fileUpload.sendKeys(
      "C:\\Users\\usama\\Desktop\\web\\automation\\selenium\\tests\\test.txt"
    );
    await logReport("File uploaded successfully.");

    // Submitting the Form (With Explicit Wait)
    let submitButton = await driver.findElement(By.id("FSsubmit"));
    await driver.wait(until.elementIsVisible(submitButton), 10000);
    await submitButton.click();
    await logReport("Form submitted successfully!");
  } catch (error) {
    await logReport(`Test Failed: ${error}`);
  } finally {
    // Save report to a file
    fs.writeFileSync("test_report.txt", report.join("\n"));
    await driver.quit();
  }
})();
