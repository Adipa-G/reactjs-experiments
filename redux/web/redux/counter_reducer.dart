import 'actions.dart';

class CounterReducer {
  int counterReducer(int state, dynamic action) {
    if (action == Actions.increment) {
      return state + 1;
    } else if (action == Actions.decrement && state > 0) {
      return state - 1;
    }

    return state;
  }
}

