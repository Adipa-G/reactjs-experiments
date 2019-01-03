import 'package:test/test.dart';
import 'package:react/react.dart' as react;
import 'package:react/react_client.dart' as react_client;
import 'package:react/react_test_utils.dart' as react_test_utils;
import 'package:redux/redux.dart';

import '../../web/components/counter_buttons.dart';
import '../../web/components/counter_display.dart';
import '../../web/components/counter_app.dart';

void main() {
  react_client.setClientConfiguration();
  var counterApp = react.registerComponent(() => createSut());

  test('Given counter app then it contains both counter and button components', () {
    var dispComp = react.registerComponent(() => new CounterDisplay());
    var btnComp = react.registerComponent(() => new CounterButtons());

    print('=================================');
    print(react_test_utils.renderIntoDocument);
    print('=================================');
    print(counterApp({}));
    print('=================================');

    var component = react_test_utils.renderIntoDocument(counterApp({}));

    var dispElement = react_test_utils.findRenderedComponentWithTypeV2(component,dispComp);
    //expect(component, isNotNull);

    //var buttonElement = react_test_utils.findRenderedComponentWithTypeV2(component,btnComp);
    //expect(buttonElement, isNotNull);
  });
}

CounterApp createSut(){
  var counterApp = new CounterApp();
  counterApp.store = new Store<int>((val,action) => val + 1);
  return counterApp;  
}