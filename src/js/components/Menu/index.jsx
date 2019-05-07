import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import links from './links';
import './style.scss';

class Menu extends PureComponent {
  render() {
    return (
      <div className="Menu">
        <div className="Menu__content">
          <div className="Menu__content-logo">MY FILMS</div>
          <div className="Menu__content-sections">
            <ul>
              {links.map(item => (
                <li>{item.label}</li>
              ))}
            </ul>
          </div>
          <div className="Menu__content-categories">LISTS MOVIES LOREM LOREM</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
