import * as React from 'react';
import { shallow } from 'enzyme';

import Square from '../../src/components/Square';
import Board from '../../src/components/Board';

describe("<Square/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Board squares={['First Cell','Second Cell']} onClick={() => {}}/>);

    expect(wrapper.html()).toContain('First Cell');
    expect(wrapper.html()).toContain('Second Cell');
    expect(wrapper.html()).toContain('class="board-row"');  
    expect(wrapper.find(Square).length).toBe(9);
  });

  it("should handle click event", () => {
    var evtObj = { click : (x:number) => {} };
    jest.spyOn(evtObj,"click");

    const wrapper = shallow(<Board squares={['X',null,'X']} onClick={(x:number) => {evtObj.click(x);}}/>);
    wrapper.find(Square).get(2).props.onClick();

    expect(evtObj.click).toHaveBeenCalledWith(2);
  });
});