# Final Project - Automated Testing with WebDriverIO

> **This project is part of the final assignment for the [Fundamentals] Automated Testing in JavaScript #2 course. The objective of the assignment is to perform e2e type automated tests which has as scenarios the login in SauceDemo using WebDriverIO.**

## Original Task Description
Launch URL: https://www.saucedemo.com/

- UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".

- UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".

- UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.

- Additional Requirements:
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests.
Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.

- Implementation Options:
Test Automation tool: WebDriverIO
Browsers: 1) Chrome; 2) Edge
Locators: XPath
Patterns: Page Object
Assertions: Use from the selected framework

[Optional] Loggers: Use from the selected framework

## Setup
- Framework: WebDriverIO with Mocha
- Language: JavaScript (no TypeScript)
- Browsers: Chrome, Microsoft Edge
- Locators: XPath
- Design Pattern: Page Object Model (POM)
- Execution: Parallel execution enabled
- Assertions: WebDriverIO Expect
- Logging: Spec Reporter

## How to Run the Test
To execute the tests in your local environment, follow these steps:
1. Ensure Node.js is installed (version 12 or higher recommended).
2. Clone the repository:
    ```sh
    git clone https://github.com/victorAlvarezValencia/FinalProjectVictorDaniel.git
    ```
3. Navigate to the project's root directory:
    ```sh
    cd FinalProjectVictorDaniel
    ```
4. Install Node.js
    ```bash
    nvm install 20
    nvm use 20
    ```
5. Install dependencies:
    ```sh
    npm install
    ```
6. Execute the tests:
    ```sh
    npm run wdio
    ```
## Implemented Solution

This solution was developed using WebDriverIO as the primary test automation tool, adhering to all functional and technical requirements specified in the task.

- UC-1: Test Login form with empty credentials: Description: Verifies that when attempting to log in with empty username and password fields, the system displays the expected error message "Username is required". The implementation simulates entering text and then deleting it using browser.keys('Backspace') to ensure the fields are completely empty before attempting login.

- UC-2: Test Login form with credentials by passing Username: Description: Validates that when attempting to log in with an empty password field (after it has been filled and then cleared), the system displays the error message "Password is required". The password field is cleared by looping and pressing Backspace as many times as needed.

- UC-3: Test Login form with credentials by passing Username & Password: Description: Confirms that a user with valid credentials (standard_user, secret_sauce) can successfully log in and that the dashboard page displays the title "Swag Labs". This test case uses a Data Provider to parameterize credentials, allowing testing with multiple valid users defined in data/credentials.js.

- UC-4 (Additional): Test Login form with locked out user: Description: An additional test case has been added to verify the system's behavior when attempting to log in with a locked-out user (locked_out_user). The system is expected to display the error message "Sorry, this user has been locked out.".

## Project Structure
    ```md
    FinalProjectVictorDaniel/
    ├── test/
    │   ├── data/
    │   │   └── credentials.js
    │   ├── pageobjects/
    │   │   └── login.page.js
    │   │   └── page.js
    │   └── specs/
    │       └── loginTest.js
    ├── wdio.conf.js
    ├── package.json
    └── README.md
    ```
## Notes
- Make sure both Chrome and Microsoft Edge browsers are installed before running tests.
- Tests are configured to run in parallel across both browsers.
