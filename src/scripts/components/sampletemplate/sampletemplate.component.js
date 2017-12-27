import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import map from 'lodash/map';
import DynamicEventsMixin from '../mixins/dynamic-events-mixin';

const DEFAULT_ITEMS = [];
const DEFAULT_TYPE = 'unordered';
const TYPES = {
    unordered: 'ul',
    ordered: 'ol',
    description: 'dl'
};
const DEFAULT_ITEM_COMPONENT = prop => <span className={prop.className} >{prop.value}</span>;

class SampleTemplate extends React.Component {
    mixins: [
        PureRenderMixin,
        DynamicEventsMixin
    ]

    getDefaultProps() {
        return {
            items: DEFAULT_ITEMS,
            hidden: false,
            disabled: false
        };
    }

    _renderItems() {
        const Component = this.props.itemComponent || DEFAULT_ITEM_COMPONENT;

        console.log('beneficiaries', this.props.items.list);

        return map(this.props.items.list.value, (i, idx) => {
            const key = idx;
            return (
                <li
                    key={key}
                    className={'col-xs-12'}
                >
                    <Component className={'beneficaryFirstName'} value={i.name.kana.first} />
                    <span>&nbsp;</span>
                    <Component className={'beneficaryLastName'} value={i.name.kana.last} />
                </li>
            );
        });
    }
    render() {
        if (this.props.hidden) {
            return null;
        }

        const List = TYPES[this.props.type || DEFAULT_TYPE];
        const className = this.props.className;

        return (
            <List
                className={className}
                disabled={this.props.disabled}
            >
                {this._renderItems()}
            </List>
        );
    }
}

SampleTemplate.propTypes = {
    className: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    items: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    itemComponent: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.func
    ]),
    type: React.PropTypes.oneOfType([
        'unordered',
        'ordered',
        'description'
    ]),
};

SampleTemplate.propTypes = {
    className: undefined,
    hidden: false,
    disabled: false,
    itemComponent: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.func
    ]),
    type: React.PropTypes.oneOfType([
        'unordered',
        'ordered',
        'description'
    ]),
};
