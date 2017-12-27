import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import cn from 'classnames';

const DEFAULT_VALUE = '';
const HELP_LABEL_CLASS = 'help-block';
const QUESTION_CIRCLE = 'fa fa-info';
const INPUT_CLASS_DEFAULT = 'form-control';
const CONTAINER_CLASS_DEFAULT = 'form-group';
const REQUIRED_SYMBOL_CLASS = 'required';

class Inputset extends React.Component {
    constructor(props) {
        super(props);
        Object.assign(this, PureRenderMixin);
        this.state = {
            touched: false
        };
        this._handleOnBlur = this._handleOnBlur.bind(this);
    }
    getDefaultProps() {
        return {
            value: DEFAULT_VALUE,
            hidden: false,
            disabled: false,
            srOnly: false,
            isValid: true,
            isRequired: false,
            requiredSymbol: '*',
            type: 'string',
            labelClass: 'input-label'
        };
    }
    getInitialState() {
        return { touched: false };
    }
    componentWillMount() {
        this._updateModel = function updateModelValue(val) {
            let value = val;
            if (this.props.type === 'number') {
                if (value === '') {
                    value = 0;
                } else {
                    value = parseInt(value, 10);
                    if (value < 0) value = 0;
                }
            }
            this.props.onEvent('change', value);
        };
    }
    _renderLabel() {
        if (!this.props.label) {
            return null;
        }
        const htmlFor = (this.props.id ? this.props.id : '');
        const classes = {
            'sr-only': this.props.srOnly,
            [REQUIRED_SYMBOL_CLASS]: this.props.isRequired
        };
        return (
            <label className={cn(classes, this.props.labelClass)} htmlFor={htmlFor}>
                {this.props.label}
            </label>
        );
    }
    _renderHelpLabel() {
        if (!this.props.helpLabel) {
            return null;
        }
        return (
            <p className={HELP_LABEL_CLASS}>{this.props.helpLabel}</p>
        );
    }
    _handleOnBlur(event) {
        if (!this.state.touched) {
            const value = event.target.value === null ? '' : event.target.value;
            event.persist();
            this._updateModel(value);
        }
        this.setState({
            touched: true
        });
    }
    _handleOnFocus() {

    }
    _renderTextbox() {
        return (
            <input
                value={this.props.modelValue}
                className={cn(INPUT_CLASS_DEFAULT)}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                minLength={this.props.minLength}
                maxLength={this.props.maxLength}
                onChange={e => this._onChange(e)}
                onBlur={this._handleOnBlur}
                onFocus={this._handleOnFocus}
                type={this.props.type}
            />
        );
    }

    _renderHint() {
        if (!this.props.hint) {
            return null;
        }

        return (
            <div className="tooltip-holder">
                <i className={cn(QUESTION_CIRCLE, 'hint-class')} />
                <div className={cn('tooltip-text')}>{this.props.hint}</div>
            </div>
        );
    }

    _renderError() {
        if (!this.state.touched || this.props.validations === undefined || this.props.validations.isValid) {
            return null;
        }
        return (
            <div className="field-error">{this.props.validations.messages[0].message}</div>
        );
    }

    _onChange(event) {
        event.persist();
        this._updateModel(event.target.value);
    }
    render() {
        if (this.props.hidden) {
            return null;
        }
        let validationClass = '';
        if (this.state.touched && this.props.validations) {
            validationClass = this.props.validations.isValid ? 'has-success' : 'has-error';
        }
        const classNames = cn(CONTAINER_CLASS_DEFAULT, this.props.className, validationClass);
        return (
            <div id={this.props.id} data-id={this.props.dataId} className={classNames}>
                {this._renderLabel()}
                {this._renderHint()}
                {this._renderTextbox()}
                {this._renderHelpLabel()}
                {this._renderError()}
            </div>
        );
    }
}

Inputset.propTypes = {
    className: React.PropTypes.string,
    dataId: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    helpLabel: React.PropTypes.string,
    hint: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    id: React.PropTypes.string,
    isValid: React.PropTypes.bool,
    isRequired: React.PropTypes.bool,
    label: React.PropTypes.string,
    labelClass: React.PropTypes.string,
    maxLength: React.PropTypes.string,
    minLength: React.PropTypes.string,
    modelValue: React.PropTypes.any,
    onEvent: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    srOnly: React.PropTypes.bool,
    type: React.PropTypes.string,
    validations: React.PropTypes.shape({
        model: React.PropTypes.object,
        field: React.PropTypes.object,
        isValid: React.PropTypes.bool,
        messages: React.PropTypes.array,
    })
};

Inputset.defaultProps = {
    className: '',
    dataId: '',
    disabled: false,
    error: false,
    errorText: '',
    helpLabel: '',
    hint: '',
    hidden: false,
    hintText: '',
    id: '',
    inputLabel: '',
    isValid: false,
    isRequired: false,
    label: '',
    labelClass: '',
    maxLength: '',
    minLength: '',
    modelValue: undefined,
    name: '',
    onEvent: undefined,
    pattern: '',
    placeholder: '',
    requiredSymbol: '',
    srOnly: false,
    type: '',
    validations: React.PropTypes.shape({
        model: {},
        field: {},
        isValid: false,
        messages: [],
    })
};

export default Inputset;
