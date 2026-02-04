import React from 'react';
import { Box, Flex, Spacer, Button, HStack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function NavBar() {
  const cartCount = useSelector((s) =>
    s.cart.items.reduce((a, b) => a + b.qty, 0),
  );
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Box borderBottomWidth={1} px={6} py={3}>
      <Flex align="center">
        <HStack spacing={4}>
          <Link to="/">
            <Text fontWeight="bold">Shop</Text>
          </Link>
        </HStack>
        <Spacer />
        <HStack>
          <Link to="/checkout">
            <Button variant="ghost">Cart ({cartCount})</Button>
          </Link>
          {auth.token ? (
            <Button size="sm" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}
