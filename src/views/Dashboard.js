/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const [user] = useState(sessionStorage.getItem('userData'));

  const data = JSON.parse(user);

  const clientId = process.env.REACT_APP_CLIENT_ID;
  let history = useHistory();
  const onLogoutSuccess = (res) => {
    sessionStorage.removeItem('userData');
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    history.push('/');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Dashboard
          </a>

          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img src={data.imageUrl} alt='image-profile' className='rounded-circle' width='40px' />
              </a>
              <ul className='dropdown-menu position-absolute' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Profile
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <button className='dropdown-item' onClick={signOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container text-center pt-5'>
        <h2>Welcome</h2>
        <h4>Hello {data.name}</h4>
      </div>
    </div>
  );
}
