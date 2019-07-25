module.exports = {
    'My First Test case'(browser) {
        browser
            .url('https://news.ycombinator.com')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', 'Hacker News');
    }
}