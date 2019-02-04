import * as React from 'react';
import { shallow } from 'enzyme';

import { createStore } from "redux";
import { Provider } from 'react-redux'

import reducer from "../../src/redux/Reducer";

import {Game} from '../../src/components/Game';

describe("<Game/>", () => {
  let store = createStore(reducer);

  it("should render", () => {
    const wrapper = shallow(<Provider store={store}><Game/></Provider>);

    expect(wrapper.html()).toContain('class="game"');
    expect(wrapper.html()).toContain('class="game-board"');
    expect(wrapper.html()).toContain('class="game-info"');
  });
});