import React from 'react';
import Google from '../component/ButtonLogin';

export default function Login() {
  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='card loginform' style={{ width: '20rem' }}>
          <h5 className='card-header bg-primary text-white text-center'>Login</h5>
          <div className='card-body'>
            <form action=''>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email:
                </label>
                <input type='text' className='form-control' id='email' placeholder='Email' />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password :
                </label>
                <input type='password' className='form-control' id='password' placeholder='Password' />
              </div>
              <button type='submit' className='btn btn-primary w-100'>
                Signin
              </button>
            </form>
            <div className='border-top mt-4 pt-1 text-center font-monospace'>
              <span>Login With</span>
              <Google />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
