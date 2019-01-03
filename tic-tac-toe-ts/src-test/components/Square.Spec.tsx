import * as React from 'react';
import { shallow } from 'enzyme';

import Square from '../../src/components/Square';

describe("<Square/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Square value="XYZ" key={1} onClick="() => {}"/>);

    expect(wrapper.html()).toContain('XYZ');
    expect(wrapper.html()).toContain('class="square"');  
  });

  it("should handle click event", () => {
    var evtObj = { click : () => {} };
    jest.spyOn(evtObj,"click");

    const wrapper = shallow(<Square value="XYZ" key={1} onClick={() => {evtObj.click();}}/>);
    wrapper.find('button').simulate('click');

    expect(evtObj.click).toHaveBeenCalled();
  });
});