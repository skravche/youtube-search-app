# node-express-seed-project
RESTful application using nodejs, expressjs and mongodb

<h2>Objective</h2>

The objective of the project is to create a basic structure for a RESTful application using nodejs, expressjs and mongodb.

<h2>Prerequisite</h2>
<br>
Download and install nodejs (https://nodejs.org/en/)
<br>
Download and install mongodb (https://www.mongodb.org/downloads#production)

<h2>Environment</h2>

Windows
<br>
Git Bash
<br>
Postman chrome pulgin

<h2>Highlights</h2>

<br>
Logger based on Winston
<br>
Environment based configuration using config(https://www.npmjs.com/package/config#introduction)


<h2>Running the application</h2>

<ul>
<li>Clone the project</li>
<br>
Open Git Bash
<br>
$ cd &lt;basepath&gt;
<br>
$ git clone https://github.com/guptam2/node-express-mongodb-seed-project.git
<br>
<br>
<li>Install node modules</li>
<br>
$ cd &lt;basepath&gt;/node-express-mongodb-seed-project
<br>
$ npm install
<br>
<br>
<li>Start mongodb</li>
<br>
Open Git Bash
<br>
$ cd "/c/Program Files/MongoDB/Server/3.2/bin"
<br>
$ mongod
<br>
* Mongodb folder might be different based on your installation.
<br>
<br>
<li>Start nodejs server</li>
<br>
$ cd &lt;basepath&gt;/node-express-mongodb-seed-project
<br>
$ node server.js
<br>
<br>
<li>Send a POST request (Postman plugin)</li>
<br>
<b>URL :</b> http://localhost:3000/contacts
<br>
<b>Request Body :</b> <p>{"firstName":"m", "lastName":"g","phone":"123456789", "addressLine1":"3 test road","addressLine2":"test city", "county":"berkshire","postcode":"tt1 2tt"}</p>
<b>Content Type :</b> application/json
<br>
<br>

<li>Send a GET request  (Postman plugin)</li>
<br>
URL : http://localhost:3000/contacts
<br>
<br>
<li>Config</li>
<br>
<p>
Different config file can be loaded by setting the NODE_ENV environment variable. Default config file is &lt;basepath&gt;\node-express-seed-project\config\default.json
<br>
<br>
e.g. $ export NODE_ENV=dev  
<br>
<br>
It will load the &lt;basepath&gt;\node-express-seed-project\config\dev.json
</p>

<li>Check the log</li>
<br>
<p>Default log file is C:\tmp\node-express-seed-project.log</p>
<p>
To change the log file location modify the &lt;basepath&gt;\node-express-seed-project\config\default.json. 
</p>
</ul>



