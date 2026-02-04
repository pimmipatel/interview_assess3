import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';
import { removeFromCart, clearCart, setQty } from '../store/cartSlice';

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <Box p={6} maxW="4xl" mx="auto">
      <Heading size="md" mb={4}>
        Checkout
      </Heading>
      <VStack spacing={4} align="stretch">
        {items.length === 0 && <Text>Your cart is empty.</Text>}
        {items.map((it) => (
          <Box key={it.id} borderWidth={1} p={3} borderRadius="md">
            <HStack justify="space-between">
              <Text>
                {it.title} x {it.qty}
              </Text>
              <HStack>
                <Text>${(it.price * it.qty).toFixed(2)}</Text>
                <Button
                  size="sm"
                  onClick={() => dispatch(removeFromCart(it.id))}
                >
                  Remove
                </Button>
              </HStack>
            </HStack>
          </Box>
        ))}
        <Divider />
        <HStack justify="space-between">
          <Text fontWeight="bold">Total</Text>
          <Text fontWeight="bold">${total.toFixed(2)}</Text>
        </HStack>
        <HStack>
          <Button
            colorScheme="green"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Place order
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
