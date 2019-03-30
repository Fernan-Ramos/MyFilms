import React, { PureComponent } from 'react';
import './style.scss';

export default class Input extends PureComponent {

    render() {
        const { className, type, placeholder, required, props } = this.props;
        return (
            <input
                className='Input'
                type={type}
                placeholder={placeholder}
                required={required}
                {...props}
            />
        );
    }

}