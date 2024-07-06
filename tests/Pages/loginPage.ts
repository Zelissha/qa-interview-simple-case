// LoginPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;
  private logoutText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#root form div:nth-child(1) > div > input');
    this.passwordInput = page.locator('#root form div:nth-child(2) > div > input');
    this.submitButton = page.locator('form .MuiButton-sizeMedium');
    this.logoutText = page.locator('text=Log out');
  }

  async goto() {
    await this.page.goto('http://localhost:8080/login');
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    await expect(this.emailInput).toHaveValue(email); 
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveValue(password); 
  }

  async submit() {
    await this.submitButton.click();
  }

  async waitForLogin() {
    await this.page.waitForNavigation();
    await expect(this.logoutText).toBeVisible();
  }
}

