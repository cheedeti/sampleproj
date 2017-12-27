import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import map from 'lodash/map';

const TYPES = {
    unordered: 'ul',
    ordered: 'ol',
    description: 'dl'
};

const DEFAULT_ITEM_COMPONENT = prop => <span>{prop.value}</span>;

class List extends React.Component {
    constructor(props) {
        super(props);
        Object.assign(this, PureRenderMixin);
        this._onEvent = this._onEvent.bind(this);
    }

    _onEvent(e, eventName, args) {
        this.props.onEvent(eventName, args);
    }

    _renderItems() {
        // const ItemComponent = this.props.itemComponent || DEFAULT_ITEM_COMPONENT;
        const ItemComponent = DEFAULT_ITEM_COMPONENT;
        const className = cn(this.props.classNameItem);

        return map(this.props.items, (i) => {
            const key = i.id;
            return (
                <li
                    className={className}
                    key={key}
                    onClick={e => this._onEvent(e, 'click', i)}
                >
                    <ItemComponent value={i.value} />
                </li>
            );
        });
    }

    render() {
        const { className, disabled, hidden, type } = this.props;

        if (hidden) {
            return null;
        }

        const ListType = TYPES[type];

        return (
            <ListType
                className={className}
                disabled={disabled}
            >
                {this._renderItems()}
            </ListType>
        );
    }
}

List.propTypes = {
    className: PropTypes.string,
    classNameItem: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            value: PropTypes.string,
        })
    ).isRequired,
    onEvent: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['unordered', 'ordered', 'description']),

};

List.defaultProps = {
    className: undefined,
    classNameItem: undefined,
    disabled: false,
    hidden: false,
    type: 'unordered',
};

export default List;
