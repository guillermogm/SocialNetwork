
# Welcome to Tattoo Studio 🎨

 ## Table of Contents 🗂️
<details>
  <summary></summary>
  <ol>
    <li><a href="#about-the-project">About the project 📋</a></li>
    <li><a href="#getting-started">Getting started 🚀</a></li>
    <li><a href="#stack">Stack ⚓</a></li>
    <li><a href="#diagrama-bd">DB Diagram 📈</a></li>
    <li><a href="#endpoints">Endpoints 📌</a></li>
    <li><a href="#futuras-funcionalidades">Future features ⚙️</a></li>
    <li><a href="#contribuciones">Suggestions and contributions ❓</a></li>
    <li><a href="#licencia">License 🔑</a></li>
    <li><a href="#author">Author ✍️</a></li>
    <li><a href="#acknowledgments">Acknowledgments 🎓</a></li>
  </ol>
</details>

<div id="about-the-project"></div>

## About the project 📋
This is a Backend made for a fictitious Social Network. This app contains users and  posts for the users. This project already conteins data but you can to fill with your own information.
The objective of this project is to practice using javascript, node, mongo and mongoose.

<div id="getting-started"></div>

## Getting Started (Local) 	🚀
1. Install docker and create a Mongo DB container
``` docker run -d -p 27017:27017 --name mongo -v mongo_data:/data/db -e MONGO_INITDB_ROOT_USERNAME=root MONGO_INITDB_ROOT_PASSWORD=root mongo:latest ```
2. Download this respository zip or use git clone repository.
3. Use the next command to install all the apps dependencies: ` $ npm install `
4. Go to the env.example and change all variables to your database variables.
5. You can also change the port and the secret to encryct your passwords.
6. To start the server use `npm run start` or `npm run dev` and to stop it use control c in the terminal.
7. And finally to run the seeders use: `npm run dbRefresh` 

<div id="stack"></div> 

## Stack ⚓
Tecnologies used:
<div align="center">
<a href=" https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://www.mongodb.com/es">
    <img src= "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://www.typescriptlang.org/">
    <img src= "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
</a>
 </div>

<div id="diagrama-bd"></div>

## DB Diagram 	📈
!['imagen-db'](./images/Db-diagram.png)

<div id="endpoints"></div>

## Endpoints 📌
There is an export with all the endpoints in Thunderclient in the folder HTTP. In case you use another tecnology, all the endspoints are down here.

<details>
<summary>Authentication</summary>

- **Register user**

          POST http://localhost:4010/api/auth/register

    body:

    ```js
        {
            "email": "david@david.com",
            "password": "123456789"
        }
    ```

<br>

- **Login user**	

          POST http://localhost:5000/api/auth/login

    body:

    ```js
        {
            "email": "david@david.com",
            "password": "123456789"
        }
    ```
</details>
<details>
<summary>Users</summary>

- **View all users** (IS ADMIN)

          GET http://localhost:5000/api/users

    auth:

    ```js
        auth token
    ```

<br>

- **View user profile**

          GET http://localhost:5000/api/users/profile

    auth:

    ```js
        auth token
    ```

<br>

- **Update user profile**

          PUT http://localhost:5000/api/users/profile

    body:

    ```js
        {
            "email": "nuno@nuno.com",
            "password": "123498765"
        }
    ```

    auth:

    ```js
        auth token
    ```

</details>
<details>
<summary>Posts</summary>

- **Create post** 

          POST http://localhost:5000/api/posts

    body:

    ```js
        {
            "description": "hello world"
        }
    ```

    auth:

    ```js
        auth token
    ```

<br>

- **Delete post**

          DLETE http://localhost:5000/api/posts/:id

    auth:

    ```js
        auth token
    ```

<br>

- **Update post**

          PUT http://localhost:5000/api/posts/:id

    body:

    ```js
        {
            "description": "update succesfully"
        }
    ```

    auth:

    ```js
        auth token
    ```

<br>

- **Get own posts**

          GET http://localhost:5000/api/posts/own

    auth:

    ```js
        auth token
    ```

<br>

- **Get all posts**

          GET http://localhost:5000/api/posts

    auth:

    ```js
        auth token
    ```

<br>

- **Get post by id**

          GET http://localhost:5000/api/posts/:id

    auth:

    ```js
        auth token
    ```

<br>

- **Get posts by a user** 

          GET http://localhost:5000/api/posts/users/:id-user

    auth:

    ```js
        auth token
    ```

<br>


- **Like and unlike post**

          PUT http://localhost:5000/api/posts/like/:id


    auth:

    ```js
        auth token
    ```
</details>


<div id="futuras-funcionalidades"> </div>

## Future features ⚙️
[ ] Add to post the posibility of upload images and  videos.
[ ] Collect all errors in a logs file

<div id="contribuciones"></div>

## Suggestions and contributions ❓
Suggestions and contributions are always welcome.

You can do it in two different ways:

1. Create a github issue.
2. Create a fork of this repository
    - New branch 
        ```
        $ git checkout -b feature/userName-improvement
        ```
    - Commit with your changes 
        ```
        $ git commit -m 'feat: upgrade X feature'
        ```
    - Push the branch 
        ```
        $ git push origin feature/userName-improvement
        ```
    - Open a Pull Request.

<div id="licencia"></div>

## License 🔑
This project is licensed by guillermogm

 <div id="author"></div>

## Author ✍️
* Guillermo Gómez:
    * [GitHub](https://github.com/guillermogm)

<div id="acknowledgments"></div>

## Acknowledgements 🎓
* A shoutout to the teachers at Geekshubs Academy.