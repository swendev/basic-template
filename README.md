website-template
========================

Template for a website.
Javascript is written in plain javascript and as a css preprocessor the template uses scss.

Requirements
------------

* [node.js](http://nodejs.org/)
* grunt
* grunt-cli

Node.js should be in your PATH variable.
To install grunt and grunt-cli just type in a terminal `npm install grunt-cli -g`

Installation
------------

Open a terminal in your website-template project folder and type in `npm install`.
Npm should download all neccessary node modules.

Development
-----------

There are 2 grunt tasks:

1. default (lints js files, processes scss files and live reloads the project on change)
2. build (lints, concatonates and minfies css and js files of your website-template project and puts it in a folder called dist)

To start a grunt task open a terminal in your website-template project folder and type in `grunt <task-name>`.
