/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import List from './list.component';

describe('<List />', () => {
    const items = [{ id: '1', value: 'foo' }, { id: '2', value: 'bar' }];

    describe('Property - onEvent', () => {
        let wrapper;
        let onEvent;
        beforeEach(() => {
            onEvent = spy();
            wrapper = shallow(<List onEvent={onEvent} items={items} />);
        });

        it('Should emit "click" event for 1st element', () => {
            expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
            wrapper.find('ul').childAt(0).simulate('click');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('click', items[0]), 'should call with correct parameters');
        });

        it('Should emit "click" event for 1st element', () => {
            expect(wrapper.find('ul').childAt(1).type()).to.equal('li');
            wrapper.find('ul').childAt(1).simulate('click');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
            assert.ok(onEvent.alwaysCalledWith('click', items[1]), 'should call with correct parameters');
        });
    });

    describe('Property - items', () => {
        it('should render "1" li elements', () => {
            const _items = [{ id: '1', value: 'foo' }];
            const wrapper = shallow(<List onEvent={spy()} items={_items} type="unordered" />);
            expect(wrapper.children()).to.have.length(1);
        });
        it('should render "2" li elements', () => {
            const _items = [{ id: '1', value: 'foo' }, { id: '2', value: 'bar' }];
            const wrapper = shallow(<List onEvent={spy()} items={_items} type="unordered" />);
            expect(wrapper.children()).to.have.length(2);
        });
    });

    describe('Property - hide', () => {
        it('should hide button when hide is true', () => {
            const wrapper = shallow(<List onEvent={spy()} items={items} type="unordered" hidden />);
            expect(wrapper.html()).to.be.null;
            expect(wrapper.children()).to.have.length(0);
        });

        it('should render button when hide is false', () => {
            const wrapper = shallow(<List onEvent={spy()} items={items} type="unordered" hidden={false} />);
            expect(wrapper.children()).to.have.length(2);
        });
    });

    describe('Property - type', () => {
        it('should render "default" list', () => {
            const wrapper = shallow(<List onEvent={spy()} items={items} />);
            expect(wrapper.type()).to.equal('ul');
            expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
            expect(wrapper.find('ul').childAt(1).type()).to.equal('li');
        });

        it('should render "ul" list', () => {
            const wrapper = shallow(<List onEvent={spy()} items={items} type="unordered" />);
            expect(wrapper.type()).to.equal('ul');
            expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
            expect(wrapper.find('ul').childAt(1).type()).to.equal('li');
        });

        it('should render "ol" list', () => {
            const wrapper = shallow(<List onEvent={spy()} items={items} type="ordered" />);
            expect(wrapper.type()).to.equal('ol');
            expect(wrapper.find('ol').childAt(0).type()).to.equal('li');
            expect(wrapper.find('ol').childAt(1).type()).to.equal('li');
        });

        it('should render "dl" list', () => {
            const wrapper = shallow(<List onEvent={spy()} items={items} type="description" />);
            expect(wrapper.type()).to.equal('dl');
            expect(wrapper.find('dl').childAt(0).type()).to.equal('li');
            expect(wrapper.find('dl').childAt(1).type()).to.equal('li');
        });
    });
});
