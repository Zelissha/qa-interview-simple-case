// signupFormTests.spec.ts
import { test,  } from '@playwright/test';
import { SignupPage } from '../Pages/signupPage';

test.describe.configure({ mode: 'serial' });

test.describe('signup form tests', () => {
  test('signing up works with new account', async ({ page }) => {
    const signupPage = new SignupPage(page);
    const newUser = {
      email: 'newuser@example.com',
      password: 'password123'
    };

    // Navigate to the signup page
    await signupPage.goto();

    // Fill in email, password, and confirm password
    await signupPage.fillEmail(newUser.email);
    await signupPage.fillPassword(newUser.password);
    await signupPage.fillConfirmPassword(newUser.password);

    // Submit the form
    await signupPage.submit();

    // Wait for signup to complete and verify
    await signupPage.waitForSignupSuccess();
  });
});

