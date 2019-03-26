# React Feat (HOC , Render Props, Pure Component, Virtualized ViewPort render to achieve 60 FPS)

> - HOC , Render Props Memo , Pure Component , virtualized viewport render to achieve near 60FPS , async-await with large number of records (tested by throttling CPU 6x and Fast 3G Network)
> - Jest-enzyme for testing
> - Cypress
> - Coverage
> - Redux, Saga , Generator Functions, Hooks upcoming 🌾

## Commands

- **yarn start**: Runs the web application in developer mode
- **yarn test**: Executes Jest Enzyme tests that have the `.test.js`
- **yarn cy**: Starts cypress e2e

## Data Structure

1. `data.js` simulates two promises with disjointed dataset related via key
2. In `service.js`, we utilise the 'APIs' of `data.js` to merge the above parallel promises resolving to an array of chatlog messages in the following format, **sorted by time**. Note the use of `Promise.all` since we really want the promises to run parallel as the dataset are disjointed and later we merge and sort the results

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com"
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```

3. Note also folder **services** for separation of Data layer following Robert C. Martin `Uncle Bob` [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

4. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:

- Display the `avatar` where applicable
- Display the `email` on hover
- Format the timestamp to be human readable
- The challenge is how we design the components that leverages optimal Frames Per Second. The evidence below is what I have snapshoted by throttling the CPU 6x and throttling Network to Fast 3G. If you notice when I scroll up/down the list we get consistent 30 FPS.

- Finally, what did you think about the solution? 😀

Please submit your ideas or criticism by submitting issues [here](https://github.com/arupalan/react-simpleapp-arup/issues)

![Frontpage](https://github.com/arupalan/react-simpleapp-arup/blob/master/static/VirtulizedFrameRate.gif)
