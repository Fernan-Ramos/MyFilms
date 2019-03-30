import React, { PureComponent } from 'react';
import './style.scss';

export default class Button extends PureComponent {

    render() {
        const {className, onClick, children, props} = this.props;
        return (
            <button className='Button' onClick={onClick}  {...props}>
                {children}
            </button>
        );
    }

}