# Nikki Craciun - Project Sprint 8

## Description of the Project
In this project, I created automated tests to check the functionality of the Urban Routes app. The following functionalities were tested:

- **Setting the address**
- **Selecting Supportive plan**
- **Filling in the phone number**
- **Adding a credit card**  
  *Tip: The “link” button doesn’t become active until the card CVV field on the “Adding a card” modal (`id="code"`, `class="card-input"`) loses focus. To change focus, you can simulate the user pressing TAB or clicking somewhere else on the screen.*
- **Writing a message for the driver**
- **Ordering a blanket and handkerchiefs**  
  *Tip: There are two selectors to be aware of here. One selector to click on and one to run `expect` on to verify that the state changed.*
- **Ordering 2 ice creams**
- **The car search modal appears**
- **Waiting for the driver info to appear in the modal**

## Technologies Used
- **Chromedriver**
- **VSCode**
- **WebdriverIO**

## Instructions to Run the Code

1. **Open the project in VSCode.**
2. **Run** `npm install`.
3. **Make sure to change the server URL in the** `wdio.conf.js` **file.**
4. **Run the command:** `npx wdio wdio.conf.js`.

By following these instructions, you will be able to run the automated tests for the Urban Routes app.
