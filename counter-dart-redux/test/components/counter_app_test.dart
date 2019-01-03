import 'package:test/test.dart';
import 'package:react/react.dart' as react;
import 'package:react/react_client.dart' as react_client;
import 'package:react/react_test_utils.dart' as react_test_utils;
import 'package:redux/redux.dart';

import '../../web/components/counter_app.dart';

void main() {
  react_client.setClientConfiguration();
  var counterApp = react.registerComponent(() => createSut());

  test('Given counter app then it contains both counter and button components', () {
    var component = react_test_utils.renderIntoDocument(counterApp({}));
    expect(component, isNotNull);
   
    var dispElement = react_test_utils.findRenderedDOMComponentWithClass(component,'counter-display');
    expect(dispElement, isNotNull);

    var buttonElement = react_test_utils.findRenderedDOMComponentWithClass(component,'counter-buttons');
    expect(buttonElement, isNotNull);
  });
}

CounterApp createSut(){
  var counterApp = new CounterApp();
  counterApp.store = new Store<int>((val,action) => val + 1);
  return counterApp;  
}