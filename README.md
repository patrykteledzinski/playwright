Here are the instructions to run {https://playwright.dev/docs/running-tests} Playwright tests:

    Clone the Playwright repository by running the command "git clone https://github.com/patrykteledzinski/playwright.git" in your terminal or command prompt.
    Change your current directory to the Playwright project by running "cd playwright" in your terminal or command prompt.
    Run the command "npm init playwright@latest" in your terminal or command prompt. You will be prompted with a few questions. Choose "JavaScript" when asked whether to use TypeScript or JavaScript. Choose "tests" when asked where to put your end-to-end tests. Choose "true" when asked whether to add a GitHub Actions workflow, and also when asked whether to install Playwright browsers (which can be done manually via 'npx playwright install').
    To run the tests, ensure that you are in the "playwright" directory in your terminal or command prompt, and then type "npx playwright test".

To open the report first run your tests:
npx playwright show-report

Informations for backlog:

To hide the credentials from the code, it's generally not recommended to hard-code sensitive data like login credentials in your test automation scripts. Instead, you can use environment variables to store and retrieve the sensitive data at runtime.

Here's an example of how you can use environment variables to store the email and password values in your test automation script:
const email = process.env.FACEBOOK_EMAIL;
const password = process.env.FACEBOOK_PASSWORD;

    // Enter valid credentials and click login button
    await page.fill('#email', email);
    await page.fill('#pass', password);

In this example, we retrieve the email and password values from environment variables FACEBOOK_EMAIL and FACEBOOK_PASSWORD, respectively. You can set these environment variables in a separate configuration file or in your CI/CD pipeline to keep the credentials separate from your code.
This approach helps protect your sensitive data from being exposed in your code repository or build artifacts. It also allows you to easily change the credentials without modifying your code, as you can simply update the environment variables instead.

The "Exercise 1: API automation" task would benefit from a real project to test, therefore I allowed myself to describe how I would do this task in the "api.spec.js" file in the "tests" folder.
