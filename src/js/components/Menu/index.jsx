import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import links from './links';
import './style.scss';

class Menu extends PureComponent {
  render() {
    const { username, avatar, iso } = this.props;
    const gravatar = avatar.gravatar.hash;
    return (
      <div className="Menu">
        <div className="Menu__content">
          <div className="Menu__content-user">
            <div className="avatar">
              <img
                src={`https://www.gravatar.com/avatar/${gravatar}`}
                alt="gravatar"
              />
            </div>
            <div className="username">
              <span>{username}</span>
              <span>{iso}</span>
            </div>
          </div>
          <nav className="Menu__content-sections">
            <ul>
              {links.map(item => (
                <li key={item.label}>
                  <Link to={item.route}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="Menu__content-categories" />
          <div className="Menu__content-signout" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.get('username'),
  avatar: state.auth.get('avatar'),
  iso: state.auth.get('iso_3166_1')
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Menu)
);
