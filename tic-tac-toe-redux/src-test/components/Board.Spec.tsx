import * as React from 'react';

import { createStore } from "redux";
import { Provider } from 'react-redux'

import { shallow } from 'enzyme';

import reducer from "../../src/redux/Reducer";

import Board from '../../src/components/Board';

describe("<Board/>", () => {
  let store = createStore(reducer);

  it("should render", () => {
    const wrapper = shallow(<Provider store={store}><Board/></Provider>);

    expect(wrapper.html()).toContain('class="board-row"');  
    expect(wrapper.html()).toContain('class="square"');  
  });
});