import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

export default function Pagination({ current, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <HStack spacing={2} justify="center" mt={4}>
      {pages.map((p) => (
        <Button
          key={p}
          size="sm"
          onClick={() => onChange(p)}
          variant={p === current ? 'solid' : 'outline'}
        >
          {p}
        </Button>
      ))}
    </HStack>
  );
}
