const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })
    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    });
    it('should set the address', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const fromField = await $(page.fromField);
        const toField = await $(page.toField);

        await expect(fromField).toHaveValue('East 2nd Street, 601');
        await expect(toField).toHaveValue('1300 1st St');
    });

    it('should select supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const supportivePlanButton = await $(page.supportivePlanButton);
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
    });


    it('should add in a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue(123456891234);

        const cvvField = await $(page.cvvField);
        await cvvField.waitForDisplayed();
        await cvvField.setValue(124);

        const linkCardButton = await $(page.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

    });
    it('should write a driver to the driver', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const driverMessage = await $(page.driverMessage);
        await driverMessage.waitForDisplayed();
        await driverMessage.scrollIntoView();
        await driverMessage.setValue('Hello');
        await expect(driverMessage).toHaveValue('Hello');

    });
    it('should buy a blanked and a handkerchief', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const supportivePlanButton = await $(page.supportivePlanButton);
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();

        const blanketAndHandkerchiefsButton = await $(page.blanketAndHandkerchiefsButton);
        await blanketAndHandkerchiefsButton.click();

        await expect($(page.blanketAndHankerchiefsSwitch)).toBeChecked();
    });
    it('should order 2 ice creams', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const supportivePlanButton = await $(page.supportivePlanButton);
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();

        const iceCreamButton = await $(page.iceCreamButton);
        await iceCreamButton.click();
        await iceCreamButton.click();
        iceCreamButton.waitForDisplayed();

    });
    it('car search modal appears', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(carSearchModal).toBeDisplayed();
    });
    it('driver details appear in car search modal', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const carSearchModal = await $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        await expect(carSearchModal).toBeDisplayed();

        const driverInfo = await $(page.driverInfo);
        await driverInfo.waitForDisplayed();
        await expect(driverInfo).toBeDisplayed();
    })
})