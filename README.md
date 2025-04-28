# bluepi-challenge

## Getting started
To install dependencies, type
```npm i```

## Running Test Case
```npx playwright test testCases/ui/toDoList.spec.ts```

To run with UI
```npx playwright test testCases/ui/toDoList.spec.ts --ui```

## Repository Structure
Page Object
 - Store locators and actions in that page

Page
- Integrate page object actions into flow for using in test case folder

Resources
- Store all test data

Test Cases
- Store all test cases
