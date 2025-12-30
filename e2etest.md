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


