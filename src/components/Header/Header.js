import React from 'react';
import s from './Header.module.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>Your Company</span>
          </Link>
          <div className={s.banner}>
            <h2 className={s.bannerTitle}>React</h2>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
