import 'package:react/react.dart';
import 'package:redux/redux.dart';

import '../redux/actions.dart';

class CounterButtons extends Component {
  Store<int> store;

  void increment(dynamic event){
    store.dispatch(Actions.increment);
  }

  void decrement(dynamic event){
    store.dispatch(Actions.decrement);
  }

  @override
  render() {
    return span({'className' : 'counter-buttons'},
      button({
        'type' : 'button',
        'className' : 'btn btn-default',
        'onClick' : increment
      },i({'className':'glyphicon glyphicon-plus'})),
      button({
        'type' : 'button',
        'className' : 'btn btn-default',
        'onClick' : decrement
      },i({'className':'glyphicon glyphicon-minus'}))
    );
  }
}
