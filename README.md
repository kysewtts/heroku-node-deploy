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
   You can initialize a .gitignore file but it is optional.

2.)Create a webpage that you would be serving with Node.js
   Before going through to the code of Node , make sure that you create a package.json file in the root folder of your project . This file will keep track of all our dependancies in the project. 
   
   Use the command,
   
    $npm init 
   
   It will throw a series a questions, keep on pressing return key. (Use <$npm init --yes> in case you want the default values to be    taken up.)
   Make sure to check the version of node using , 
   
    $node --version
   
   This should be the specified correctly in package.json file .
   
 3.)In this project, I have used express framework of node. To install express , use , 
 
    $npm install express --save
    
  This will install express as a dependancy in package.json file.
  
  
  4.)Now, we will be creating a Procfile file. This file explicitly tells the command to run our web app.
     Note that Procfile (name is case-sensitive , should be written exactly as it is), should not have any extension.
     
    Procfile has this line ,
    
    web: node index.js


  5.)Now we will login to Heroku using CLI with the command,

    $heroku login
   
     This is ask us for the Email ID and password associated with our Heroku account.
     

  6.)Upon successful login , use 

    
    $heroku create 

    This will generate a name for your app and also provide you with a URL on which your app will be running.
    Also it will initialize a git repo to which we will be pushing our code for deployment.


  7.)Now to deploy your code , use ,

    $git push heroku master

     After this, you will notice that your app is successfully deployed. Go to https://<your-app-name>.herokuapp.com to see your app is action.


  8.)Heroku has dynos which are used for hosting the apps. The free account that we have created allows a single dyno for our app to run.
     But if it doesn't work use,

    $heroku ps:scale web=1


That's it ..!!!! You have successfully deployed your first app on Heroku.
    
   
     
     

