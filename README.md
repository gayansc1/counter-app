# Counter Application

Node version : v16.16.0 (tested)

## Steps to run the application

Open the console and Clone repo
### `git clone https://github.com/gayansc1/counter-app.git`
### `cd counter-app`

run below commands
### `npm install`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## test the application
Open the console and run below command
### `npm test`

## After runnig unit tests it should pass following 7 test cases
1. it should render counter component without any errors
2. initial count state value should be 0
3. it should increase count state to 1 when Increase button is clicked
4. it should decrease count state to 0 when Decrease button is clicked
5. it should reset the count state to 0 when Reset button is clicked and if current count equals to 1
6. it should show an alert when count state exceeds 10 on increase and count still should be 10
7. it should show an alert when count state goes below 0 on decrease and count still should be 0

## codebase walkthrough

Counter.tsx component is availabe under src->components folder

useState hook has been used to  maintains count type of number

Styles are defined within the component as Record<string, CSSProperties>.
It's an object with keys of type string, and the values should be type of CSSProperties.

state : count
state update method : setCount