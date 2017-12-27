import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import cn from 'classnames';

class Accordion extends React.component {
    mixins: [
        PureRenderMixin
    ]

    getInitialState() {
        return {
            collapse: this.props.collapse || true
        };
    }

    getDefaultProps() {
        return {
            hidden: false,
            disabled: false
        };
    }

    _toggle() {
        this.setState({
            collapse: !this.state.collapse
        });

        if (this.state.collapse) {
            this.props.onEvent('open');
        } else {
            this.props.onEvent('close');
        }
    }

    _renderHeader() {
        return (
            <div className={cn('panel-heading', this.props.headerClassName)} onClick={this._toggle}>
                <div className={cn('panel-title')}>
                    {this.props.label}
                </div>
            </div>
        );
    }
    _renderBody() {
        if (this.state.collapse) {
            return null;
        }

        return (
            <div className="panel-collapse collapse in">
                <div className={cn('panel-body', this.props.bodyClassName)}>
                    {this.props.children}
                </div>
            </div>
        );
    }
    render() {
        if (this.props.hidden) {
            return null;
        }

        return (
            <div className={cn('panel panel-default', { collapsed: this.state.collapse }, this.props.className)}>
                {this._renderHeader()}
                {this._renderBody()}
            </div>
        );
    }
}

Accordion.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.arrayOf(React.PropTypes.element)
    ]),
    className: React.PropTypes.string,
    collapse: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    label: React.PropTypes.string,
    onEvent: React.PropTypes.func
};
