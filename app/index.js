const puppeteer = require('puppeteer');
var config = {};

config.login = '';
config.pass = '';


async function getPic() {

    const browser = await puppeteer.launch({headless: false,  args: ['--start-fullscreen']});
    const page = await browser.newPage();
//    await page.goto('', {
//	waitUntil: 'networkidle2'
//});
    await page.goto('https://123');
    await page.waitForNavigation({waitUntil: 'networkidle2'})
    await page.setViewport({width: 1920, height: 1080}),
    await page.click('#welcome-menu > ul > li:nth-child(4) > a');
    await page.waitForSelector('#system-form > div.text-center > button')
    await page.type('#system-form > div:nth-child(1) > input', config.login)
    await page.type('#system-form > div:nth-child(2) > input', config.pass)
    await page.click('#system-form > div.text-center > button');
    await page.waitForSelector('#app-state')

    await page.click('#layout-app- > div > header > table > tbody > tr > td:nth-child(5) > div > div.b-user-profile__bg > div.b-user-profile__company')
    await page.waitFor(500);
    await page.click('#layout-app- > div > header > table > tbody > tr > td:nth-child(5) > div > div.b-user-menu.b-user-menu__st-active.minw200 > div > span:nth-child(3) > a')
    await page.waitFor(3000);


    await page.screenshot({path: 'screenshots/first.png'})
//    await browser.close();
}




getPic();


