import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Container extends React.Component {
    constructor(props) {
        super(props);
        Object.assign(this, PureRenderMixin);
        this._onEvent = this._onEvent.bind(this);
    }

    _onEvent(e, eventName, args) {
        this.props.onEvent(eventName, args);
    }

    render() {
        const { className, classNameLoading, loading, hidden } = this.props;

        if (hidden) {
            return null;
        }
        const _className = cn(className, { [classNameLoading]: loading });
        return (
            <div
                className={_className}
                onClick={e => this._onEvent(e, 'click')}
            >
                {this.props.children}
            </div>
        );
    }
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    className: React.PropTypes.string,
    classNameLoading: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    onEvent: React.PropTypes.func
};

Container.defaultProps = {
    children: undefined,
    className: undefined,
    classNameLoading: undefined,
    hidden: false,
    loading: false,
    onEvent: undefined,
};
export default Container;
