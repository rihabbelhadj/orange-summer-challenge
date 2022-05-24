# Orange Summer Challenge - 2022

## Assignment

### Overview

To complete this challenge, you will need to write a simple web app, and provide us the source files to be built.
The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of pages and an API feed.
We will also assess the generated HTML, CSS, and JS output.
This challenge is expected to take about 4-6 hours.

### The challenge

First you need to `Fork` this repo into you're personal profile.
Clone
Do your assignment
Finally you need to `push` you work into you personal profile than do a `Pull Request`

### Details

Build a stock management **MERN** Stack (MongoDB, Express JS, React-Redux, Node JS) web
application with the following requirements:

❏ As a **manager** I can sign in.
❏ As a **manager** I can create new user/item.
❏ As a **manager** I can edit an existing user/item
❏ As a **manager** I can view all the existing users/items.
❏ As a **manager** I can delete any particular user/item.

❏ As a **user** I can not see the list of users.
❏ As a **user** I can add a new item.
❏ As a **user** I can edit an existing item
❏ As a **user** I can view all the existing items.
❏ As a **user** I can delete any particular item.
❏ As a **user** I can check the stock of any particular item.
❏ As a **user** I can increment and decrement the stock of any particular item.
❏ As a **user** I can view all the details of any particular item.

### Instructions

- The UI of the application should be appealing and easy to use
- The application should justify the area of the problem statement
- Clean and sustainable code will be appreciated. Code should be readable/easily
- understandable

### Front end Details

- You will need to build the following 4 pages with React:
- A **Login** Page (Manager and User should login to the application to see the data)
- A **Home** Page (As a user or manager I can see Total Number of items, Only as a manager I can see total number of users )
- A **Users** Page (Only as a manager I can CRUD users)
- A **Items** Page (As a manager/user I can CRUD items)

## Back End structure

```sh
.
├── index.js
├── src
│   ├── controllers
│   │   ├── AuthController.js
│   │   └── ItemController.js
│   ├── middlewares
│   │   ├── multer.js
│   │   └── verify-token.js
│   ├── models
│   │   ├── ItemModel.js
│   │   └── UserModel.js
│   └── routes
│       ├── item.js
│       └── auth.js
├── uploads
│   └── images.*
└── package.json
```
