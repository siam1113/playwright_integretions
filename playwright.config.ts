import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 3,
   reporter: [
        ['list'],
        ['playwright-qase-reporter',
            {
                apiToken: process.env.API_TOKEN,
                projectCode: process.env.PROJECT_CODE,
                runComplete: true,
                environmentId: process.env.ENVIRONMENT_ID,
                basePath: 'https://api.qase.io/v1',
                logging: true,
                uploadAttachments: true,
            }],
    ],
  // reporter: [['junit', { outputFile: 'results.xml' }]],
  use: {
    // baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ]
});
