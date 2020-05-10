import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { getUsername, getAvatar } from 'js/redux/auth/selectors';
import { getIsMobile } from 'js/redux/app/selectors';
import links from './links';
import MenuLink from './MenuLink';
import MenuButton from './MenuButton';

import './style.scss';

const Menu = ({ iso, location }) => {
  const username = useSelector(getUsername);
  const avatar = useSelector(getAvatar);
  const isMobile = useSelector(getIsMobile);
  const isRouteActive = (route) => {
    return location.pathname === route;
  };

  const handleOnClick = () => {
    document.querySelector('.Menu').classList.remove('active');
    const button = document.querySelector('.MenuButton');
    if (button) {
      document.querySelector('.MenuButton').classList.remove('is-open');
    }
  };

  return (
    <>
      {isMobile && <MenuButton />}
      <nav className="Menu">
        <div className="Menu__user">
          <div className="avatar">
            <img src={avatar} alt="gravatar" />
          </div>
          <div className="username">
            <span>{username}</span>
            <span>{iso}</span>
          </div>
        </div>
        <div className="Menu__sections">
          <ul>
            {links.map((item) => (
              <li
                key={item.label}
                className={classNames('Link', {
                  active: isRouteActive(item.route),
                })}
              >
                <MenuLink route={item.route} label={item.label} handleOnClick={handleOnClick} />
              </li>
            ))}
          </ul>
        </div>
        <div className="Menu__categories" />
        <div className="Menu__signout" />
      </nav>
    </>
  );
};

export default withRouter(Menu);
