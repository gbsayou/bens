import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Cookies from 'universal-cookie'
import styles from "./index.module.scss";

const Profile = ({ member }) => {
  const containerRef = useRef();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowProfileMenu(false);
    }
  };

  const logout = (e) => {
    const cookie = new Cookies()
    const  authKey = 'BSAUTHTIX'
    cookie.remove(authKey)
    window.location = '/'
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className={styles.profile} ref={containerRef}>
        {member && (
          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className={styles.name}
          >
            {member.name}
          </div>
        )}
        {showProfileMenu && (
          <div className={styles.menu}>
            <ul>
              <li><a href='/profile'>Profile</a></li>
              <li onClick={logout}>Log out</li>
            </ul>
          </div>
        )}
        {!member && (
          <>
            <a className={styles.secondary} href="/signin">
              Sign in
            </a>
            <a className={styles.primary} href="/signup">
              Sign up
            </a>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  member: state.layout.member,
});

export default connect(mapStateToProps, null)(Profile);
