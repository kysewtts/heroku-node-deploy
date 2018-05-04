# heroku-node-deploy

This project deals with deploying a Node app on Heroku.
==========================================================

Pre-Requisites:-
1.)Node installed 
2.)Git installed
3.)Heroku CLI installed
4.)Heroku Account

=========================================================

Steps:-

1.)Create a repository on github and clone it in your project folder of your local machine. We will use $git clone <url> to carry out   this task.
   $git clone https://github.com/kysewtts/heroku-node-deploy.git
   This will initialize git in your project folder and monitor your progress. Also , git is required to push to Heroku so this is an    important step.

2.)Create a webpage that you would be serving with Node.js
   Before going through to the code of Node , make sure that you create a package.json file . This file will keep track of all our 
   dependancies in the project. Use the command,
   $npm init 
   It will throw a series a questions, keep on pressing return key. (Use <$npm init --yes> in case you want the default values to be    taken up.)

