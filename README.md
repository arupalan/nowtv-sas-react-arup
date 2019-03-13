# NowTV React Challenge

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Please ask before downloading any external libraries, most will be fine.

1. In `service.js`, utilise the 'APIs' provided by `data.js` to create a promise resolving to an array of chatlog messages in the following format, sorted by time.

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```

(Do not modify `data.js` to achieve this, but if you think there's an issue ask the developer helping you!)

2. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:

- Display the `avatar` where applicable
- Display the `email` on hover
- Format the timestamp to be human readable

3. Zip test back up and send it back to recruiter.

4. Bonus Questions:

- How would you achieve this with Redux?
- How would you handle an error from the API?
- If you were to continue this application, what would you add?
- If you were to deploy this application (or any web application) to production, how would you personally do it?
- Finally, what did you think of the test? 😀

# nowtv-sas-react-arup

1. The First challenge is about how we deal with situation where there are two or more parallel calls and later we merge the result into a set which we want. Once we have the result set , we can then sort to order the result set.

2. Displaying resolved data is a standard pattern in react however there are two sub aspects to pick our conscious minds

- having a UX Pattern that suits the use case and atleast it makes a developer feel happy with his work. If that is your way of thinking then your mind will challenge you to create a UI using technology that you love ... for me it is SASS.
- The second challenge is how we design the components that leverages optimal JS that maximises Frames Per Second. The evidence below is what I have snapshoted by throttling the CPU 6x and throttling Network to Fast 3G. If you notice when I scroll up/down the list we get consistent 30 FPS.

# The central idea as below including not to forget testability

> - HOC , Memo , Pure Component , virtualized viewport render to achieve near 60FPS , async-await with large number of records
> - Jest-enzyme for testing
> - Cypress installed but not yet started
> - Coverage not so great yet to do more work

Please submit your ideas or criticism by submitting issues [here](https://github.com/arupalan/nowtv-sas-react-arup/issues)

![Frontpage](https://github.com/arupalan/nowtv-sas-react-arup/blob/master/static/VirtulizedFrameRate.gif)
