// search for elon musk and results in italian and last update will be last week in google 
// advanced search
module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const mainQuery = 'Elon Musk';

        const mainQueryInputSelector = '[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector ='#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonselector ='.jfk-button[type="submit"]';

        const resultsPageQuerySelector = '#searchform input[name="q"]';
        // const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const resultsPageLanguageSelector = '[aria-label="Search Italian pages"]';
        const resultsPageLastUpdateSelector = '[aria-label="Past month"]';
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonselector)
            .assert.urlContains('as_q=Elon+Musk', 'Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Language is Italian')
            .assert.urlContains('as_qdr=m', 'Time period is month')


        browser.assert.visible(resultsPageQuerySelector, 'UI: Query is Elon Musk');
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Italian pages', 'UI: Language is set to Italian');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past Month');
            
        browser.saveScreenshot('tests_output/google.png')
    }
}