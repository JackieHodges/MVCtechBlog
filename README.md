# MVCtechBlog
Model-View-Controller: Tech Blog


## Description

I created a CMS-sytle blog, similar to Wordpress, where users can publish posts and comment on others posts. From scratch, this code base was created following the MVC paradigm for its structure, Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication. 

When the site is visited for the first time, a user can see the homepage with existing posts, navigation links, and the option to login. When the homepage option is selected, the user can see the homepage. If any other link is selected, the user will be prompted to sign in or sign up.

When sign up is chosen, the username and password is entered and saved. Then, the user can enter the site. If the user logs out, they can log back in using that previously used username and password. If the user leaves the site and returns, the user can now select sign in with their previously entered username and password. 

Once logged in, the user can then click on an existing post on the dashboard. Once a post is selected, the user will see that existing post and any comments that have been left my certain users and when the comment was left. The user can add their own comment at the bottom of the page and post it by clicking the submit button. The page is then refreshed to include the newly added comment.

When the dashboard option is selected from the dashboard, then the user is shown any blog post that they have written. The user can also add a new dashboard by clicking the add post button, adding a title and contents, and then save. Once save is clicked, the dashboard is then updated to include the new blog post. When an existing post is clicked on, then the user is able to delete or update the post, then taken back to the refreshed dashboard.

When the user clicks on the log out button in the navigation bar, then the user is signed out of the site.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)


## Installation

To install from GitHub, follow these steps:

* Pull the repository found here: [MVC Tech Blog Repo](https://github.com/JackieHodges/MVCtechBlog)
* Install dependencies by typing the following in the terminal: npm i
* Create the database by using the data in schema.sql in a program such as MySQL Workbench
* Seed the data by entering the following into your terminal: npm run seed
* Once the data has been seeded, run the application by entering: npm start


## Usage

Below is a gif of the application's functionality:

[Click here](https://drive.google.com/file/d/1rd0QT0D8jzmznfnjAXZRD7ycpAec5UEH/view) to view it in a larger version.

