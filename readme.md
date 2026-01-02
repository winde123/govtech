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