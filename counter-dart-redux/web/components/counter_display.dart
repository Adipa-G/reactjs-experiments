import 'dart:async';

import 'package:react/react.dart';
import 'package:redux/redux.dart';

class CounterDisplay extends Component {
  StreamSubscription<int> subscription;
  Store<int> store;

  @override
  void componentDidMount() {
    subscription = store.onChange.listen((value) => this.redraw());
    super.componentDidMount();
  }

  @override
  void componentWillUnmount() {
    subscription.cancel();
  }

  @override
  render() {
    return label({'className' : 'form-control counter-display'}, '${this.store.state}');
  }
}
