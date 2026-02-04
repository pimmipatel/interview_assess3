import React from 'react';
import { Box, Image, Text, Button, VStack, HStack } from '@chakra-ui/react';

export default function ProductCard({ product, onAdd }) {
  return (
    <Box borderWidth={1} borderRadius="md" overflow="hidden">
      <Image
        src={product.thumbnail}
        alt={product.title}
        height="160px"
        width="100%"
        objectFit="cover"
      />
      <VStack align="stretch" p={3} spacing={2}>
        <Text fontWeight="semibold" noOfLines={1}>
          {product.title}
        </Text>
        <HStack justify="space-between">
          <Text>${product.price}</Text>
          <Button size="sm" onClick={onAdd}>
            Add
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
