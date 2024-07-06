// loginFormTests.spec.ts
import { test } from '@playwright/test';
import { existingUsers } from '../../test-setup/localstorage.setup';
import { LoginPage } from '../Pages/loginPage';

test.describe.configure({ mode: 'serial' });

test.describe('login form tests', () => {
  test('logging in works with existing account', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const existingUser = existingUsers[0];

    // Navigate to the login page
    await loginPage.goto();

    // Fill in email and password
    await loginPage.fillEmail(existingUser.email);
    await loginPage.fillPassword(existingUser.password);

    // Submit the form
    await loginPage.submit();

    // Wait for login to complete and verify
    await loginPage.waitForLogin();
  });
});

