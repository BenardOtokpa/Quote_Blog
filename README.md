# Quote_Blog

A small CRUD app for favourite quotes using Node.js, MongoDB and EJS.

---

## Table of Contents
- About
- Features
- Tech Stack
- Getting Started
  - Prerequisites
  - Installation
  - Environment Variables
  - Running the App
- Project Structure
- Usage
- Contributing
- License
- Contact

---

## About

Quote_Blog is a simple web application for storing, viewing, editing, and deleting favourite quotes. It uses Node.js and Express for the server, MongoDB for data storage, and EJS for server-side rendering. The UI styling is done with CSS.

This repo is intended as a minimal CRUD example and a starting point for learning full-stack JavaScript with Express and MongoDB.

## Features
- Create, read, update, and delete quotes
- Server-rendered views with EJS templates
- Simple, responsive CSS-based UI
- MongoDB integration for persistent storage

## Tech Stack
- Node.js + Express
- MongoDB (Mongoose)
- EJS for templating
- CSS for styling

Language composition in the repository (approx): CSS 47.9%, EJS 28.7%, JavaScript 23.4%.

## Getting Started

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn
- MongoDB running locally or a MongoDB Atlas connection string

### Installation
1. Clone the repository:

   git clone https://github.com/BenardOtokpa/Quote_Blog.git
   cd Quote_Blog

2. Install dependencies:

   npm install

### Environment Variables
Create a .env file in the project root (if not present) and set the following variables:

- MONGO_URI - MongoDB connection string (example: mongodb://localhost:27017/quotes_db)
- PORT - Port number to run the server (default: 3000)

Example .env:

MONGO_URI=mongodb://localhost:27017/quotes_db
PORT=3000

### Running the App

Start the development server:

   npm run dev    # if you have nodemon configured
   # or
   npm start

Open your browser and visit http://localhost:3000 (or the port you configured).

## Project Structure
A typical layout (your tree may vary):

- /config - configuration (e.g., db connection)
- /controllers - Express route handlers
- /models - Mongoose models
- /public - static assets (CSS, images)
- /views - EJS templates
- server.js or app.js - app entry point

## Usage
- Home page: lists saved quotes
- Add Quote: form to create a new quote (author, text)
- Edit Quote: update existing entries
- Delete Quote: remove a quote from the database

## Contributing
Contributions are welcome. If you'd like to contribute:
1. Fork the repository
2. Create a branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Add some feature"
4. Push to the branch: git push origin feature/your-feature
5. Open a pull request

Please follow best practices for commits and include clear descriptions of changes.

## License

This project is provided under the MIT License. See the LICENSE file for details.

## Contact

Maintainer: BenardOtokpa

If you want any changes to the README or a different license, tell me and I will update it.