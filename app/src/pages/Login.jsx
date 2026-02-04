import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/authSlice';
import {
  Box,
  Button,
  Input,
  Heading,
  VStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((s) => s.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (auth.token) navigate('/');
  }, [auth.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();
      navigate('/');
    } catch (err) {
      // handled in slice
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={12} p={6} borderWidth={1} borderRadius="md">
      <Heading size="md" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={3}>
          {auth.error && (
            <Alert status="error">
              <AlertIcon />
              {String(auth.error)}
            </Alert>
          )}
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            isLoading={auth.status === 'loading'}
          >
            Sign in
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
