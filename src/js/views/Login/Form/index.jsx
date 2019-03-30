import React, * as react from 'react';

class LoginForm extends react.PureComponent {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form>
                    <input type='text' required/>
                    <input type='password' required/>
                    <input type='submit' />
                </form>
              
            </div>
        );
    }
}

export default LoginForm;