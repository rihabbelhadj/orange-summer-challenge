# Orange Summer Challenge - 2022

## Assignment [https://github.com/odc-student/orange-summer-challenge](https://github.com/odc-student/orange-summer-challenge)

### Overview

To complete this challenge, you will need to write a simple web app, and provide us the source files to be built.
The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of pages and an API feed.
We will also assess the generated HTML, CSS, and JS output.

This challenge is expected to take about 4-6 hours.

### The challenge

### Details

Build a stock management **MERN** Stack (MongoDB, Express JS, React-Redux, Node JS) web
application with the following requirements:

- Manager

❏ As a **manager** I can sign in.

❏ As a **manager** I can create new user/item.

❏ As a **manager** I can edit an existing user/item.

❏ As a **manager** I can view all the existing users/items.

❏ As a **manager** I can delete any particular user/item.

❏ As a **manager** I can sign out.

- User

❏ As a **user** I can sign in.

❏ As a **user** I can not see the list of users.

❏ As a **user** I can add a new item.

❏ As a **user** I can edit an existing item.

❏ As a **user** I can view all the existing items.

❏ As a **user** I can delete any particular item.

❏ As a **user** I can check the stock of any particular item.

❏ As a **user** I can increment and decrement the stock of any particular item.

❏ As a **user** I can view all the details of any particular item.

❏ As a **user** I can sign out.

### Instructions

- The UI of the application should be appealing and easy to use
- The application should justify the area of the problem statement
- Clean and sustainable code will be appreciated. Code should be readable/easily
- understandable
- Separate `frontend` and `backend` folders

### Frontend Details

You will need to build the following 4 pages with React:

- A **Login** Page (Manager and User should login to the application to see the data)
- A **Home** Page (As a user or manager I can see Total Number of items, Only as a manager I can see total number of users )
- A **Users** Page (Only as a manager I can CRUD users)
- A **Items** Page (As a manager/user I can CRUD items)

## Backend structure

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

# Let's start

#### Fork the Repository

You need to fork [this](https://github.com/odc-student/orange-summer-challenge) repository.
A _fork_ creates a copy of a GitHub repository in your own GitHub account. Thus, you have permission to make changes to the content of your copied repository without ever changing the original one. At the time of your fork, you will copy all of the current contents and the two repositories are now independent. So if someone commits changes to the original repository, they will not affect your forked copy.

Fork the original repository [https://github.com/odc-student/orange-summer-challenge](https://github.com/odc-student/orange-summer-challenge) by clicking the **_Fork_** button at the upper right corner of the repository page.

<img src="https://help.github.com/assets/images/help/repository/fork_button.jpg">

This will take you to the GitHub page for your very own GitHub repository! It should have a URL like the one below (where `<your GitHub ID>` should be your new GitHub ID):

```
https://github.com/<your GitHub ID>/orange-summer-challenge
```

#### Clone the Repository

```
git clone https://github.com/<your GitHub ID>/orange-summer-challenge
```

### Push the changes to your remote repository

Now that you have completed the Markdown exercise, push your changes and new files to your version of the exercise repository.

First you will have to stage all of your changes by adding them, if your current working directory is in the repository, then you simple have to stage all the new files:

```
git add .
```

Now that the files are staged, commit them to your local repository and include a commit message (note that you do not have to use the same commit message `completed the project` and you can choose something else that you feel is descriptive and informative, just be sure to keep the `""`):

```
git commit -m "completed the project"
```

With the changes committed to your local repository, you can now push them to your remote host on GitHub:

```
git push
```

### Share your folder by pull request

You need to share your work with us, add them to the course repository that you had initially forked with a pull request.

> Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before the changes are merged into the repository.

Begin by going to [https://github.com/odc-student/orange-summer-challenge](https://github.com/odc-student/orange-summer-challenge) and clicking on the **Pull requests** button near the top then **New pull request** .

This will bring you to a page that will allow you to compare across changes. Since you wish to submit changes on a different fork, then click on the hyperlinked phrase **compare across forks**.

Then change the head fork to your own copy of the repository. Note that as of Feb. 2021, the primary branch of this repository is called `main` and not `master`. So your pull request will be slightly different than what's shown in the screenshots below.

![](images/screen-shot-pull-req.png)

Once you have done this, you have _opened a pull request_. GitHub then makes it possible for you to review the differences between the two repositories. You can then write a message about this merge. It is always important for these messages to be thorough and thoughtful.

![](images/screen-shot-pull-req2.png)

When you complete the message click the green **Create pull request** button.

Your changes to the repository will not be incorporated into the original repository until one of the repository administrators reviews and accepts the edits.
