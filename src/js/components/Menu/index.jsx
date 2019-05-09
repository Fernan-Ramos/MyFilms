import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import links from './links';
import './style.scss';

class Menu extends PureComponent {
  render() {
    return (
      <div className="Menu">
        <div className="Menu__content">
          <div className="Menu__content-logo">MY FILMS</div>
          <nav className="Menu__content-sections">
            <ul>
              {links.map(item => (
                <li key={item.label}>
                  <Link to={item.route}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="Menu__content-categories">LISTS MOVIES LOREM LOREM</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
