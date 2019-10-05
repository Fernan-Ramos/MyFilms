import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import links from './links';
import './style.scss';

import MenuLink from './MenuLink';
import MenuButton from './MenuButton';

class Menu extends PureComponent {
  isRouteActive = (route) => {
    const { location } = this.props;
    return location.pathname === route;
  };

  handleOnClick = () => {
    document.querySelector('.Menu').classList.remove('active');
  }


  render() {
    const {
      username, avatar, iso, isMobile
    } = this.props;
    // const gravatar = avatar.gravatar.hash;
    return (
      <>
        {isMobile && (
          <MenuButton />
        )}
        <nav className="Menu">
          <div className="Menu__user">
            <div className="avatar">
              {/* <img
                src={`https://www.gravatar.com/avatar/${gravatar}`}
                alt="gravatar"
              /> */}
            </div>
            <div className="username">
              <span>{username}</span>
              <span>{iso}</span>
            </div>
          </div>
          <div className="Menu__sections">
            <ul>
              {links.map(item => (
                <li
                  key={item.label}
                  className={classNames('Link', {
                    active: this.isRouteActive(item.route)
                  })}
                >
                  <MenuLink route={item.route} label={item.label} handleOnClick={this.handleOnClick} />
                </li>
              ))}
            </ul>
          </div>
          <div className="Menu__categories" />
          <div className="Menu__signout" />
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.get('username'),
  avatar: state.auth.get('avatar'),
  iso: state.auth.get('iso_3166_1'),
  isMobile: state.layout.get('isMobile')
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Menu)
);
