# Movies App

Application is in progress!

- Movies App is a React-powered movie website that allows users to search for movies by title, sort them by genre, year of release, popularity, average vote, include 18+ movies, and bookmark your favorite movies. Movies App is a multilingual site - in English and Ukrainian. There is also pagination for more convenient viewing.

![image](https://github.com/free3et/movies-app/assets/19286076/9855bbf0-6f75-4b98-9955-7ed2e3b5ddb4)

## Features
- Search movies by title and watch movie trailer
- Movies can be sorted by genre, year of release, popularity, average vote, include movies 18+
- Pagination for more convenient searching
- Movie's trailer
  
  ![image](https://github.com/free3et/movies-app/assets/19286076/c4d6c10d-a9f2-424c-889c-55f38af84208)

- Movie Details: Users can view detailed information about each movie and share this information with friends
  
  ![image](https://github.com/free3et/movies-app/assets/19286076/acd2483d-d02d-4b1f-95ad-35f42026ce1b)
  
- Bookmark Movies: Users can bookmark their favorite movies for later viewing
- List of actors who participated in the film and detailed information about them
  
  ![image](https://github.com/free3et/movies-app/assets/19286076/e4cc2b2a-a05e-4bf4-ad99-7ba8c21e2a2d)

- Two languages on the site: English and Ukrainian

## Technology
Movies App is built using the following technologies:
- API - TMDB API [https://www.themoviedb.org/](https://www.themoviedb.org/)
- React [https://react.dev/](https://react.dev/)
- Material UI [https://mui.com/](https://mui.com/) 
- Graphql [https://graphql.org/](https://graphql.org/)
- Apollo Server [https://www.apollographql.com/docs/apollo-server/](https://www.apollographql.com/docs/apollo-server/)
- React Router Dom [https://reactrouter.com/en/main](https://reactrouter.com/en/main)
- React Final Form [https://final-form.org/react](https://final-form.org/react)

## Getting Started

To run the Movies App locally on your machine, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/free3et/movies-app.git
```
2. Before starting the website, you will need to obtain the TMDB Movies API key. Follow these steps to obtain them and add them to your .env file.
- Get TMDB API Key
- Go to [https://www.themoviedb.org/](https://www.themoviedb.org/) and log in.
- Click on your user profile picture in the navigation bar, and select "Settings".
- In the settings, select "API" and generate an API key.
4. Install dependencies for both the frontend and backend:
```bash
cd client
npm install
cd ../server
npm install
```
4. Start the backend server:
```bash
cd server
node ./src/index.js
```
This will start the backend server.
5. Open your browser and navigate to [http://localhost:4000](http://localhost:4000) and you'll get a free private query console and schema-generated docs for your graph in Apollo Studio.
6. Open another terminal window
```bash
npm run start
```
This will start the frontend application.


