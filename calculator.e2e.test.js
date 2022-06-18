const puppeteer = require("puppeteer");

async function run() {
	const browser = await puppeteer.launch({ headless: false, slowMo: 200 });

	const page = await browser.newPage();

	const options = {
		width: 800,
		height: 600,
		devicePixelRatio: 1,
		deviceScaleFactor: 1,
	};

	await page.setViewport(options);

	await page.goto("http://localhost:1234");

	await page.$eval("#valueA", (element) => {
		element.value = 12;
	});

	await page.$eval("#valueB", (element) => {
		element.value = 23;
	});

	await page.click("#add", { delay: 400 });

	await page.screenshot({ path: "my-screenshot.png" });

	browser.close();
}

run();
