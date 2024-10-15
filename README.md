# NBA Players UI

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Technical Design](#technical-design)

## Project Overview
This project is an NBA Players UI application that allows users to view, search, and manage a list of NBA players. Users can filter players by name, view statistics, and manage a favorites list. The application is built using a modern tech stack to ensure responsiveness and efficiency.

## Technologies Used





- **Frontend**:
![Vite](https://img.shields.io/badge/Vite-9368fe?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Material-UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

- **Backend**:
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-8C3D99?style=for-the-badge&logo=swagger&logoColor=white)
    

- **Database**:
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-2496ED?style=for-the-badge&logo=PostgreSQL&logoColor=white)

- **Containerization**:
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

- **API Documentation**:
  - **Swagger**
![Swagger](https://img.shields.io/badge/Swagger-8C3D9?style=for-the-badge&logo=swagger&logoColor=white)

## Features
- Fetch and display a list of NBA players from the balldontlie API
- Search for players by name with a debounce of 500 milliseconds
- Pagination support to load 25 players per request with a "Load More" feature
- Manage a favorites list, allowing users to add or remove players
- Display favorite players.
- Responsive design that works on various screen sizes

## Installation
- Clone the repository:
   ```bash
   git clone https://github.com/Amitai36/NBA_Players_UI.git


## technical-design
  - At the beginning creating a website base at the FULL STACK level 
Includes a template of common folders.
- Creating a home page including MUI and APPBAR
- Creating a general style and keeping CASHING
- Creating an API where I took the API (https://docs.balldontlie.io/#introduction)
And I made a call to it through the BACKEND including passing parameters through the ENDPOINT (REQ)
- Creating a request to the ENDPOINT from the FRONT by REACT-QUERY with the PLAYER key
- Creating a GRID to display both the players and the favorite games
- Reading and displaying the players and when the user reaches the end of the list, the option will open for him to load more (I made it possible to load up to 25 players at a time)
- I created a new ENDPOINT for filtering by name in the BACKEND where I send some name
- Creating a search field (filtering) that includes focus when pressing ctrl+i
- Creating a CUSTOM HOOK where I wait 500 milliseconds and then perform a call
- Filtering when the rest of the user writes and it does after writing and after 500 milliseconds reading and displays the clouds on which the filtering was done
- Creating a CHEKBOX to select favorite players
- Establishing POSTGRESQL by DOCKER-COMPOSE in order to connect the project to POSTGRESQL by the PG library 
- Creating a table called FAV that represents the favorite players in which there are 2 columns id (pk), name
which represents the player's ID and name
- Creating an ENDPOINT for adding a favorite player (SQL)
- CREATE ENDPOINT REMOVE FAVORITE PLAYER (SQL)
- You created an ENDPOINT to receive a list of all favorite players (SQL)
#### In this case there was no need to use PRISMA
- Connection of the readings to FRONT
- CHECKBOX connection for adding and removing favorite players
- Display of all favorite players on the right side of the screen including the option to remove them
- In terms of components, I made the same generics if I saw that there was indeed a need for it