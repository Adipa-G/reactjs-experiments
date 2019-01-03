**Web app to demonstrate React + Redux in Dart**

***Structure***

<pre>
+-----------------+------+------+
|                 |      |      |
|     Value       |  +   |  -   |
|                 |      |      |
+-----------------+------+------+
</pre>

This is a simple counter with a label, + and - buttons. It contains 3 React components.

1. CounterApp - Container for the other components
2. CounterDisplay - A lable showing the current value of the counter
3. CounterButtons - + and - buttons to increase and decrease the counter values

***How it works***

Buttons dispatch events to the store, and the display subscribe to the store.

<pre>
+----------+     Dispatch
|          +-----------------+
| Buttons  |                 |
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
| Display   |   Subscribe    |
|           <----------------+
|           |
+-----------+
</pre>

 Logic used to determine the application state is executed via the store when an action is received. Once the state is updated the subscribers are notified.  

***How to run***
1. Install dart-sdk.
2. execute `pub global activate webdev` command.
3. execute `pub get` command from the project directory to install dependencies.
4. execute `webdev serve web` to build and host the app 
5. visit http://localhost:8080/ to see the app in action
6. execute `pub run test -p chrome` to run unit tests

***Possible improvements***
1. Use [over_react](https://workiva.github.io/over_react/) to improve the react syntax. [As of 4th Jan 2019, over_react 1.30.0 is not compatible with Dart 2]
2. Use [flutter_redux](https://pub.dartlang.org/packages/flutter_redux) to avoid passing in the store from component to component.


