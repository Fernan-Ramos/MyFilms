import React, { PureComponent } from 'react';
import './style.scss';


export default class MenuButton extends PureComponent {
    handleOnClick = (e) => {
      e.currentTarget.classList.toggle('is-open');
      e.currentTarget.nextSibling.classList.toggle('active');
    }

    render() {
      return (
        <button id="burger" type='button' className="MenuButton" onClick={e => this.handleOnClick(e)}>
          <span className="burger" />
        </button>
      );
    }
}
