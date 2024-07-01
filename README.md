## RAWG-Lite

This project is a video game browsing website, designed as a clone of [RAWG.io](https://rawg.io/). It allows users to browse, search, and explore various video games using the RAWG.io API. The website is built using React and TypeScript, with a REST API for handling requests and responses.

# Features

- Browse popular and trending video games
- Search for games by name, genre, platform, etc.
- View detailed information about each game, including descriptions, ratings, release dates, and more
- Responsive design for optimal viewing on different devices

## Technologies used

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A superset of JavaScript that adds static typing
- **REST API**: For handling requests and responses to the RAWG.io API

# Getting Started

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

1. Clone the repository to your local machine:
   ```shell
   git clone https://github.com/yogeshn-1/Rawg-lite.git
   ```
2. Navigate to the project directory:

   ```shell
   cd Rawg-Lite
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Create a .env file in the root directory and add your RAWG.io API key:
   ```env
   VITE_API_KEY:your_api_key
   ```
   you can get api key [here](https://rawg.io/apidocs)

## Running the Application

To start the development server, run:

```shell
npm run dev
```

The application will be available at **`http://localhost:3000`**

## Usage

- Navigate to the homepage to view a list of popular and trending games.
- Use the search bar to find games by name, genre, platform, and more.
- Click on a game to view detailed information about it.
