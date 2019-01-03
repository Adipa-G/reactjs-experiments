import 'dart:html';

import 'package:test/test.dart';
import 'package:react/react.dart' as react;
import 'package:react/react_client.dart' as react_client;
import 'package:react/react_test_utils.dart' as react_test_utils;
import 'package:redux/redux.dart';

import '../../web/components/counter_display.dart';

void main() {
  react_client.setClientConfiguration();
  var store = new Store<int>((val,action) => val + 1, initialState: 100);
  var counterDisplay = react.registerComponent(() => createSut(store));

  test('Given counter display then it contains store value', () {
    var component = react_test_utils.renderIntoDocument(counterDisplay({}));
    expect(component, isNotNull);
   
    var label = react_test_utils.findRenderedDOMComponentWithClass(component,'counter-display') as HtmlElement;
    expect(label, isNotNull);
    expect(label.innerHtml, contains('100'));
  });
}

CounterDisplay createSut(Store store){
  var counterDisplay = new CounterDisplay();
  counterDisplay.store = store;
  return counterDisplay;  
}