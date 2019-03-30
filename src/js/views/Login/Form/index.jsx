import React, * as react from 'react';
import Button from 'js/components/Button';
import Input from 'js/components/Input';

class LoginForm extends react.PureComponent {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form>
                    <Input
                        type='text'
                        placeholder='Usuario'
                        required />
                    <Input
                        type='password'
                        placeholder='Contraseña'
                        required />
                    <Button type="submit">
                        Login
                    </Button>
                </form>

            </div>
        );
    }
}

export default LoginForm;