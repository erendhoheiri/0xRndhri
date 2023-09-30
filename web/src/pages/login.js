import React, { useState, useContext, useEffect } from 'react';
import PageSpace from '../components/PageSpace';
import { useLocation } from '@reach/router';
import { SlEye } from 'react-icons/sl';
import { SectionTitle } from '../components/typography/Title';
import {
  LoginWrapper,
  Text,
  Form,
  UserInput,
  Button
} from '../styles/LoginStyles';
import { IsAdminContext } from '../contexts/isAdminContext';

function NotFoundPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const { loginAsAdmin, isAdmin } = useContext(IsAdminContext);

  function handleLogin(event) {
    event.preventDefault();
    if (
      email === `${process.env.GATSBY_BASE_USER}` &&
      password === `${process.env.GATSBY_BASE_PASS}`
    ) {
      loginAsAdmin();
      location.replace('/');
    } else {
      alert('Username & Password Anda Salah!');
    }
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (isAdmin) {
      location.replace('/');
    }
  }, [isAdmin]);

  return (
    <PageSpace>
      <LoginWrapper>
        <Form onSubmit={handleLogin}>
          <SectionTitle className='title'>Administrator</SectionTitle>
          <UserInput
            type='text'
            placeholder='Masukan username'
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <UserInput
            type={passwordShown ? 'text' : 'password'}
            placeholder='Masukan password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
          <div
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              color: 'blue'
            }}
            onClick={togglePassword}
          >
            See Password
          </div>

          <Button type='submit'>Submit</Button>
        </Form>
      </LoginWrapper>
    </PageSpace>
  );
}

export default NotFoundPage;
