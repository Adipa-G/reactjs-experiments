**Web app to demonstrate React + Redux in Typescript**

***Structure***

This is the classic Tic-tac-toe react sample is altered to use redux.

1. Game - Container for the other components
2. Board - list of cells
3. Square - individual cell
4. GameInfo - Shows the current status of the game and information about the current turn

***How it works***

Squares dispatch events to the store. GameInfo and Square is subscribed to the store. 
When the store is changed, both Square and the GameInfo is updated.

<pre>
+----------+     Dispatch
|          +-----------------+
| Square   |                 |
|          |                 |
|          |           +-----v-----+
+----------+           |           |
                       |           |
                       |  Store    |
                       |           |
                       |           |
                       +-----+-----+
                             |
                             |
+-----------+                |
|           |                |
| Game Info |   Subscribe    |
| Square    <----------------+
|           |
+-----------+
</pre>


***How to run***
1. Install node.
2. execute `npm install` command from the project directory to install dependencies.
3. execute `npm run-script build` to build.
4. execute `npm start` to build and host the app (this watches for any changes and rebuild the app) 
5. visit http://localhost:3000/ to see the app in action
6. execute `npm test` to run unit tests
