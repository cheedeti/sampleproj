import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Button extends React.Component {
    constructor(props) {
        super(props);
        Object.assign(this, PureRenderMixin);
        this._onEvent = this._onEvent.bind(this);
    }

    _onEvent(e, eventName, args) {
        this.props.onEvent(eventName, args);
    }

    render() {
        const { ariaLabel, autofocus, className, classNameWrapper,
           disabled, form, hidden, label, name, type, value } = this.props;

        if (hidden) {
            return null;
        }

        return (
            <div className={cn(classNameWrapper)}>
                <button
                    aria-label={ariaLabel || label || value}
                    autoFocus={autofocus}
                    className={cn(className)}
                    disabled={disabled}
                    form={form}
                    name={name || value}
                    type={type}
                    value={value}
                    onClick={e => this._onEvent(e, 'click', value)}
                    onMouseDown={e => this._onEvent(e, 'mouseDown', value)}
                    onMouseUp={e => this._onEvent(e, 'mouseUp', value)}
                    onFocus={e => this._onEvent(e, 'focus', value)}
                    onBlur={e => this._onEvent(e, 'blur', value)}
                >
                    {label || value}
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    ariaLabel: PropTypes.string,
    autofocus: PropTypes.bool,
    className: PropTypes.string,
    classNameWrapper: PropTypes.string,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    hidden: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onEvent: React.PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    value: PropTypes.string,

};

Button.defaultProps = {
    ariaLabel: undefined,
    autofocus: false,
    className: 'btn-blue',
    classNameWrapper: undefined,
    disabled: false,
    form: undefined,
    hidden: false,
    label: undefined,
    name: undefined,
    onEvent: undefined,
    type: 'button',
    value: 'click',
};


export default Button;
