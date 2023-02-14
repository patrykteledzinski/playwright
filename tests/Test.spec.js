// Here are three valuable test cases for validating the login view functionality on Facebook:
//     Successful Login: This test case will ensure that a user can successfully log in to their Facebook account by providing valid credentials and that they are taken to their home page.
//     Invalid Login: This test case will check if the user is unable to log in with invalid credentials, such as an incorrect username or password. It will also verify that the user receives an error message indicating the failure to log in.
//     Remember Me Functionality: This test case will verify that the "Remember Me" checkbox functionality is working as expected. It will check if the user is still logged in when they return to the login page after closing the browser, and also that they are logged out when they explicitly click the "Log Out" button.

// Here's an example of how you can automate the first two test cases using Playwright and JavaScript:

const { test, expect } = require('@playwright/test');

test('for facebook', async ({ page }) => {

  // Navigate to Facebook login page
  await page.goto('https://www.facebook.com/');
  // Close cookies informations
  await page.getByRole('button', { name: 'Allow essential and optional cookies' }).click();

  // Enter valid credentials and click login button
  await page.fill('#email', 'myemail@gmail.com');
  await page.fill('#pass', 'mypassword');
  await page.getByTestId('royal_login_button').click();
  
  // Verify that user is taken to the home page after successful login
  const title = await page.title();
  expect(title).toEqual('Facebook');
  
  // Enter invalid credentials and click login button
  await page.fill('#email', 'invalidemail');
  await page.fill('#pass', 'invalidpassword');
  await page.getByTestId('royal_login_button').click();
  
  // Verify that user sees an error message after failed login
  const errorMessage = await page.innerText('#error_box');
  expect(errorMessage).toContain('The password you entered is incorrect');
  
  await browser.close();
});;
