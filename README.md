# “Would You Rather?” Project

This is the final assessment project for my Udacity's React Nanodegree program

This is a web app that lets a user play the “Would You Rather?” game.
The game goes like this:
A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. And the user can either pick either of the two options given.

In this app, The users are able to ask and answer questions, see which questions they have/haven’t answered, see how other people have voted, and see the ranking of users on the leaderboard.

Once the user logs in, the user is able to toggle between his/her answered and unanswered polls on the home page. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).

Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted. When the user comes back to the home page, the polling question appears in the “Answered” column.

## Technologies used:

- React
- Redux
- React Router
- Redux-Thunk
- React-Redux
- React-Redux-Loading
- React-Router-Dom
- React-Bootstrap

## To run it locally:

- install all project dependencies with `npm install`
- start the app with with `npm start (or yarn start) `
  ( Runs the app in the development mode.)<br>
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Note

This project uses a fake backend, so refresing the app just reloads the app's original data. No data persitence basically.
