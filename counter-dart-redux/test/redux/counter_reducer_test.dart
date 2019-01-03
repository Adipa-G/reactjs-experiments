import 'package:test/test.dart';

import '../../web/redux/counter_reducer.dart';
import '../../web/redux/actions.dart';

void main() {
  test("Given state when increment then state is increased by 1", () {
    var reducer = new CounterReducer();
    int newState = reducer.counterReducer(1, Actions.increment);
    expect(newState, equals(2));
  });
  test("Given state when decrement then state is decreased by 1", () {
    var reducer = new CounterReducer();
    int newState = reducer.counterReducer(3, Actions.decrement);
    expect(newState, equals(2));
  });
  test("Given state 0 when decrement then state is not changed", () {
    var reducer = new CounterReducer();
    int newState = reducer.counterReducer(0, Actions.decrement);
    expect(newState, equals(0));
  });
}