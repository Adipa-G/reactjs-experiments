import 'dart:html';

import 'package:react/react_client.dart' as react_client;
import 'package:react/react.dart';
import 'package:react/react_dom.dart' as react_dom;
import 'package:redux/redux.dart';

import 'redux/counter_reducer.dart';

import 'components/counter_app.dart';

void main() {
  final reducers = new CounterReducer();
  final store = new Store<int>(reducers.counterReducer, initialState: 0);

   var todoApp = CounterApp()
    ..store=store;

  react_client.setClientConfiguration();
  var app = registerComponent(() => todoApp);
  react_dom.render(app({}), querySelector('#react_mount_point'));
}