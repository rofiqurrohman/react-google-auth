import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import App from '../firebase.js';

console.log(App);

function Login() {
  let history = useHistory();
  const { getDatabase, ref, push, set } = App;

  const onSuccess = (res) => {
    const db = getDatabase();
    const postListRef = ref(db, 'users');
    const newPostRef = push(postListRef);
    set(newPostRef, res.profileObj);

    sessionStorage.setItem('userData', JSON.stringify(res.profileObj));
    alert(`Logged in successfully welcome ${res.profileObj.name}`);
    history.push('/Dashboard');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(`Failed to login`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginBottom: '100px' }}
        isSignedIn={false}
      />
    </div>
  );
}

export default Login;
