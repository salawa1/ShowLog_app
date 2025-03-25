# ShowLog Backend

## 📌 Overview

Welcome to **ShowLog's** back-end. This is the server-side component of the ShowLog application. It contains all the API endpoints and database management tools necessary to manage TV show data, reviews, and watchlists. The backend communicates with a PostgreSQL database and uses Postman to test API endpoints.

## 🔶 Table of Contents

- Installation and Setup
- API Documentation
- Database Setup
- Authentication & Security
- Deployment Guide
- License & Contributing Guidelines

## 🔷 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) and npm
- [PostgreSQL](https://www.postgresql.org/)
- [Postman](https://www.postman.com/downloads/) to test APIs locally

### Steps to Set Up Locally

1. Clone the repository
   ```sh
   git clone https://github.com/salawa1/showlog_app.git
   ```
2. Navigate to the project folder
   ```sh
   cd showlog_app
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   node server.js
   ```
5. Open the application in your browser
   ```sh
   http://localhost:port#
   ```

## 🔷 API Documentation

### Endpoints

- **GET /shows** - Provides a list of all shows.
  
- **POST /shows** - Logs a new show.

- **PUT /shows** - Updates existing show information.


## Example responses and body texts

GET /shows/4
```json
{
  "id": 4,
  "name": "Victorious",
  "seasons": 4,
  "genre": "Teen sticom",
  "releaseyear": 2010,
  "country": US,
  "service": Nickelodeon
}
```

POST /shows - added Full House
```json
{
  "id": 57,
  "name": "Full House",
  "seasons": 7,
  "genre": "Sitcom",
  "releaseyear": 1987,
  "country": US,
  "service": Hulu
}
```

PUT /shows/57 - changed number of seasons
```json
{
  "id": 57,
  "name": "Full House",
  "seasons": 8,
  "genre": "Sitcom",
  "releaseyear": 1987,
  "country": US,
  "service": Hulu
}
```



## 🔷 Database Setup

Run the following commands to set up the PostgreSQL database:

```sh
CREATE DATABASE showlog_app;

CREATE TABLE shows (
    showid INTEGER PRIMARY KEY DEFAULT nextval('showid_seq'::regclass),
    name TEXT NULL,
    seasons TEXT NULL,
    genre TEXT NULL,
    releaseyear TEXT NULL,
    country TEXT NULL,
    service TEXT NULL
```

## 🔷 Authentication & Security

PostgreSQL requires a password to be set up for the database storing the information that Render is connected to.


## 🔷 Deployment Guide

1. Check status of what's being staged:
   ```sh
   git status
   ```
2. Stage **all** the code you want to push:
   ```sh
   git add ,
   ```
3. Add commit message:
   ```sh
   git commit -m "Commit message"
   ```
4. Check status after staging:
   ```sh
   git status
   ```
5. Push to main branch:
   ```sh
   git push origin main
   ```

## 🔷 License & Contribution Guidelines

### License
This project is licensed under the MIT License. More license information can be found in the LICENSE file.

### Contribution Guidelines
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
