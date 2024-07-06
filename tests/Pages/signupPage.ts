// SignupPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private submitButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#root form div:nth-child(1) > div > input');
    this.passwordInput = page.locator('#root form div:nth-child(2) > div > input');
    this.confirmPasswordInput = page.locator('#root form div:nth-child(3) > div > input');
    this.submitButton = page.locator('form .MuiButton-sizeMedium');
    this.successMessage = page.locator('text=Signup successful');
  }

  async goto() {
    await this.page.goto('http://localhost:8080/signup');
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    await expect(this.emailInput).toHaveValue(email); 
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveValue(password); 
  }

  async fillConfirmPassword(password: string) {
    await this.confirmPasswordInput.fill(password);
    await expect(this.confirmPasswordInput).toHaveValue(password); 
  }

  async submit() {
    await this.submitButton.click();
  }

  async waitForSignupSuccess() {
    await this.page.waitForSelector('text=Signup successful');
    await expect(this.successMessage).toBeVisible();
  }
}

