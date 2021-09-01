import React, { useState, useEffect } from 'react';
import App from '../firebase.js';

export default function GetData() {
  const [users, setUsers] = useState([]);

  const { getDatabase, ref, child, get } = App;

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`))
      .then((data) => {
        if (data.exists()) {
          const obj = data.val();
          const arr = Object.keys(obj).map((e) => {
            return obj[e];
          });
          setUsers(arr);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <ul>
          <li>Nama : {user.name}</li>
          <li>Email : {user.email}</li>
          <li>Photo : {user.imageUrl}</li>
          <li>Google ID : {user.googleId}</li>
        </ul>
      ))}
    </div>
  );
}
