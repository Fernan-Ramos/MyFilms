import React, { PureComponent } from 'react';
import LoginForm from './Form';
import './style.scss';


class LoginView extends PureComponent {
    render() {
        return (
            <div className='LoginWrapper'>
                <div className='LoginWrapper__form'>
                    <div className='LoginWrapper__form-image'>
                    </div>
                    <div className='LoginWrapper__form-content'>
                        <h1>Login</h1>
                        <p>Bienvenido a myFilms</p>
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginView;
