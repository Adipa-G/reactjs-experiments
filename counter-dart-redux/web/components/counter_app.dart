import 'package:react/react.dart';
import 'package:redux/redux.dart';

import '../components/counter_display.dart';
import '../components/counter_buttons.dart';

class CounterApp extends Component {
  Store<int> store;

  @override
  render() {
    var counterDisp = new CounterDisplay()
      ..store=store;
    var dispComp = registerComponent(() => counterDisp);

    var counterButton = new CounterButtons()
      ..store=store;
    var btnComp = registerComponent(() => counterButton);
    
    return  div({'className':'form-inline'},
              div({'className':'form-group'},
                dispComp({}),
                btnComp({})
              )
            );
  }
}
