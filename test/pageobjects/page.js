const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the main baseUrl
    * Example: if baseUrl is https://www.saucedemo.com and path is '', it opens the homepage
    */
    open (path = '') {
        return browser.url(`/${path}`)
    }
}
