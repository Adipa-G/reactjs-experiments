import * as React from 'react';
import { shallow } from 'enzyme';

import { createStore } from "redux";
import { Provider } from 'react-redux'

import reducer from "../../src/redux/Reducer";

import Square from '../../src/components/Square';

describe("<Square/>", () => {
  var store = createStore(reducer);

  it("should render", () => {
    const wrapper = shallow(<Provider store={store}><Square key={1} index={100}/></Provider>);

    expect(wrapper.html()).toContain('class="square"');  
  });
});