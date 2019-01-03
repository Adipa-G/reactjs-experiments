import * as React from 'react';
import { shallow } from 'enzyme';

import Board from '../../src/components/Board';
import {Game} from '../../src/components/Game';

describe("<Game/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Game />);

    expect(wrapper.html()).toContain('class="game"');
    expect(wrapper.html()).toContain('class="game-board"');
    expect(wrapper.html()).toContain('class="game-info"');
    expect(wrapper.html()).toContain('Go to game start');
    expect(wrapper.html()).toContain('Next player: X');
    expect(wrapper.find(Board).length).toBe(1);
  });

  it("jumpTo set the step number", () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();

    instance.handleClick(0);
    instance.handleClick(1);
    instance.handleClick(2);
    instance.handleClick(3);

    instance.jumpTo(2);

    expect(instance.state.stepNumber).toBe(2);
    expect(instance.state.xIsNext).toBe(true);
  });

  describe("handleClick",() => {
    it("given winner then do nothing", () => {
      const wrapper = shallow(<Game />);
      const instance = wrapper.instance();
      
      spyOn(instance,'setState');
      spyOn(instance,'calculateWinner').and.returnValue('O');
      
      instance.handleClick(5);
  
      expect(instance.setState).not.toHaveBeenCalled();
    });  

    it("given no winner then set state", () => {
      const wrapper = shallow(<Game />);
      const instance = wrapper.instance();
      
      spyOn(instance,'setState').and.callThrough();
      spyOn(instance,'calculateWinner').and.returnValue(null);
      
      instance.handleClick(5);
  
      expect(instance.setState).toHaveBeenCalled();
      expect(instance.state.history.length).toBe(2);
      expect(instance.state.history[1].row).toBe(2);
      expect(instance.state.history[1].col).toBe(3);
      expect(instance.state.stepNumber).toBe(1);
      expect(instance.state.xIsNext).toBe(false);
    }); 
  });

  describe("calculateWinner",() => {
    it("given win situation", () => {
      const wrapper = shallow(<Game />);
      const instance = wrapper.instance();
      
      let result = instance.calculateWinner(['X','X','X',null,null,null,null,null,null]);
  
      expect(result).toBe('X');
    });  

    it("given non win situation", () => {
      const wrapper = shallow(<Game />);
      const instance = wrapper.instance();
      
      let result = instance.calculateWinner(['X','O','X',null,null,null,null,null,null]);
  
      expect(result).toBe(null);
    });   
  });
});