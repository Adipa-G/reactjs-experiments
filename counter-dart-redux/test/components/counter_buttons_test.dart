import 'dart:html';

import 'package:test/test.dart';
import 'package:react/react.dart' as react;
import 'package:react/react_client.dart' as react_client;
import 'package:react/react_test_utils.dart' as react_test_utils;
import 'package:redux/redux.dart';

import '../../web/redux/actions.dart';
import '../../web/components/counter_buttons.dart';

void main() {
  react_client.setClientConfiguration();
  
  test('Given counter buttons when clicked on increase then store state is updated', () {
    var store = new Store<int>((val,action) => val + 1, initialState: 100);
    var counterButtons = react.registerComponent(() => createSut(store));

    var component = react_test_utils.renderIntoDocument(counterButtons({}));
    expect(component, isNotNull);
   
    var button = react_test_utils.findRenderedDOMComponentWithClass(component,'glyphicon-plus') as HtmlElement;
    expect(button, isNotNull);
    react_test_utils.Simulate.click(button);

    expect(store.state, 101);
  });

  test('Given counter buttons when clicked on decrease then store state is updated', () {
    var store = new Store<int>((val,action) => val - 1, initialState: 100);
    var counterButtons = react.registerComponent(() => createSut(store));

    var component = react_test_utils.renderIntoDocument(counterButtons({}));
    expect(component, isNotNull);
   
    var button = react_test_utils.findRenderedDOMComponentWithClass(component,'glyphicon-minus') as HtmlElement;
    expect(button, isNotNull);
    react_test_utils.Simulate.click(button);

    expect(store.state, 99);
  });
}

CounterButtons createSut(Store store){
  var counterDisplay = new CounterButtons();
  counterDisplay.store = store;
  return counterDisplay;  
}