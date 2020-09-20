/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const form = await page.$('form');
    const input = await page.$('input');
    const button = await form.$('button');
    await input.type('4276864025488162');
    await button.click();
    const result = await page.evaluate(() => document.getElementById('result').textContent);
    await expect(result).toBe('Valid');
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
    const form = await page.$('form');
    const input = await page.$('input');
    const button = await form.$('button');
    await input.type('213467589');
    await button.click();
    const result = await page.evaluate(() => document.getElementById('result').textContent);
    await expect(result).toBe('Not valid');
  });
});
