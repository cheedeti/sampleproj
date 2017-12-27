/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import Container from './container.component';

describe('<Container />', () => {
    const items = [{ id: '1', value: 'foo' }, { id: '2', value: 'bar' }];

    describe('Property - onEvent', () => {
        let wrapper;
        let onEvent;
        beforeEach(() => {
            onEvent = spy();
            wrapper = shallow(<Container onEvent={onEvent} items={items} />);
        });

        it('Should emit "click" event', () => {
            wrapper.find('div').simulate('click');
            assert.ok(onEvent.calledOnce, 'should call "onEvent"');
        });
    });

    describe('Property - hide', () => {
        it('should hide div when hide is true', () => {
            const wrapper = shallow(<Container hidden />);
            expect(wrapper.html()).to.be.null;
            expect(wrapper.children()).to.have.length(0);
        });
    });
});
