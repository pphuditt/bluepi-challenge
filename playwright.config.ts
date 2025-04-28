import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./testCases",
	testMatch: "/*.spec.ts",
	timeout: 30 * 10000,
	expect: {
		timeout: 30 * 1000,
	},
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? undefined : 1,
	reporter: process.env.CI
		? [["list"], ["json", { outputFile: "test-results/report.json" }]]
		: [
				["list", { printSteps: true }],
				["html", { open: "never" }],
				["json", { outputFile: "test-results/report.json" }],
			],
	use: {
		actionTimeout: 30 * 10000,
		trace: "on-first-retry",
		testIdAttribute: "data-testid",
	},

	projects: [
		{
			name: "chromiumForUI",
			use: {
				...devices["Desktop Chrome"],
				viewport: {
					width: 1920,
					height: 1080,
				},
				launchOptions: {
					// args: ["--start-maximized"],
					ignoreDefaultArgs: ["--enable-automation"],
					slowMo: process.env.CI ? 500 : 500,
				},
				trace: "on",
				video: "on",
				screenshot: "on",
				headless: true,
			},
		},
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
			},
		},
	],
	outputDir: "test-results/",
	reportSlowTests: {
		max: 60 * 60 * 1000,
		threshold: 30 * 60 * 1000,
	},
});
