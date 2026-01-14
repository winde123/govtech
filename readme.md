git clone https://github.com/winde123/govtech.git
Install Dependencies

cd govtech && npm install

Running the tests

you can run with the command for GUI mode
npx playwright test --ui
Starts the interactive UI mode.

npx playwright test
Runs the end-to-end tests.

npx playwright test --project=chromium
Runs the tests only on Desktop Chrome.

npx playwright test example
Runs the tests in a specific file.

Problems faced during automation

- Performance issues. When executing multiple tests concurrently, there is >0.35ms delay when logging in or transiting from the dashboard to the site creation page.One of the ways to work around it is to execute the tcs sequentialy.

- Dashboard redirection issue . When logging in , the url of the dashboard is "**/dashboard". When user clicks the back button from the site creation form , it is redirected to "**/v2/dashboard" instead.

- E2E testcase was working . When a new env is created , my e2e test is not working due to change in some of the locators.

| #  | Test Scenario                                                                 |
|----|-------------------------------------------------------------------------------|
| 1  | User is able validate correct profile options                                 |
| 2  | User is able to see the correct UI elements                                  |
| 3  | User is able to click on link to create a new site                           |
| 4  | User is able validate the number of options available for style selection    |
| 5  | User is able to validate the error message for invalid characters on creation |
| 6  | User is able to select another style and navigate back to dashboard          |
| 7  | User is able to create blank site and select another style choice            |
| 8  | User is able to Login and logout successfully                                |
| 9  | User is not able to login with the correct password                          |
