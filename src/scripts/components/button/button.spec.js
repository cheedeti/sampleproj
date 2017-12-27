/* eslint-env mocha */
import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Button from './button.component';

describe('<Button />', () => {
    describe('Property - onEvent', () => {
        let wrapper;
        let onEvent;
        beforeEach(() => {
            onEvent = spy();
            wrapper = shallow(<Button onEvent={onEvent} value="test" />);
        });

        it('Should emit "click" event', () => {
            wrapper.find('button').simulate('click');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('click', 'test'), 'should call with correct parameters');
        });

        it('Should emit "mouseDown" event', () => {
            wrapper.find('button').simulate('mouseDown');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('mouseDown', 'test'), 'should call with correct parameters');
        });

        it('Should emit "mouseUp" event', () => {
            wrapper.find('button').simulate('mouseUp');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('mouseUp', 'test'), 'should call with correct parameters');
        });

        it('Should emit "focus" event', () => {
            wrapper.find('button').simulate('focus');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('focus', 'test'), 'should call with correct parameters');
        });

        it('Should emit "blur" event', () => {
            wrapper.find('button').simulate('blur');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('blur', 'test'), 'should call with correct parameters');
        });
    });

    describe('Property - aria-label', () => {
      // TODO
    });

    describe('Property - autofocus', () => {
      // TODO
    });

    describe('Property - className', () => {
        it('should contain the default className', () => {
            const wrapper = shallow(<Button value="Hello" />);
            assert.ok(wrapper.find('button').is('.btn-blue'), 'should contain the className');
        });
    });

    describe('Property - classNameWrapper', () => {
      // TODO
    });

    describe('Property - disabled', () => {
      // TODO
    });

    describe('Property - form', () => {
      // TODO
    });

    describe('Property - hide', () => {
        it('should hide button when hide is true', () => {
            const wrapper = shallow(<Button hidden />);
            expect(wrapper.find('div').children()).to.have.length(0);
        });

        it('should render button when hide is false', () => {
            const wrapper = shallow(<Button hidden={false} />);
            expect(wrapper.find('div').children()).to.have.length(1);
        });
    });

    describe('Property - label', () => {
      // TODO
    });

    describe('Property - name', () => {
      // TODO
    });

    describe('Property - type', () => {
      // TODO
    });

    describe('Property - value', () => {
      // TODO
    });
});
