# FE Challenge

This is the frontend challenge submitted by Alex Gura on Nov 1, 2021. 

## Setup

First run `yarn install` to install necessary packages.

Then, you can start the server using:

```
yarn server
```

Then, you can run the frontend app using: 

```
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

If you'd like to run tests, you can do so with: 

```
yarn test
```

## Design and Decisions

This application was built using React and Javascript. The React frontned was spun up using the create-react-app script for quick setup. The decision to use this was simply to be able to have a neatly ordered, compartmentalized codebase for ease of evaluation. I broke down the React components into four parts:

* PartBox, which is the element that contains the information and editing options for one Part, and which also handles the PUT requests
* PartList, which creates a list of those components of the length of the array of parts supplied to it
* ButtonBar, which creates a bar of buttons equal to the number of pages of parts there are
* Page, which is the container for the other components and handles the logic for pagination and GET requests for parts

I wrote a few tests for the smaller components, such as PartBox, PartList, and ButtonBar, to confirm that they render the correct elements. These tests are using jest and react-testing-library.  

The division of the components was for ease of testing, styling, and reducing repeated code when possible. 

The frontend design was simply based around the mock shown in the code challenge README.

As the server is currently written, there will always be 20 parts generated, 5 parts per page, and 4 pages of parts. Therefore, it would have been possible to simply hardcode those values in. However, I did make sure to write code in the Page component to at least handle extracting the total pages from the header so that the application would theoretically be able to paginate over any number of pages, although I didn't test this part of it aside from the values provided. This should make it easy to extend at least the flexibility of the application to handling more items per page, more pages, and adjusting for total-entries in the future if necessary. I wrote my own state tracking code for tracking the page number although I could have also used the page-number extracted from the header as well. 

The state in all of these components was handled using React hooks, so that classless functions could be written for all React components. 
