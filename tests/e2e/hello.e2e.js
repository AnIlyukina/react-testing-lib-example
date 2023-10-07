const { expect } = require('@wdio/globals')
const HelloPage = require('../pages/hello.page')

describe('My Hello world', () => {
    it('should toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello');
        await expect(HelloPage.helloTitle).toBeExisting();
    })

    it('should not toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('jhfhjj');
        await expect(HelloPage.helloTitle).not.toBeExisting();
    })
})
