import React from 'react';
import { HStack, Select } from '@chakra-ui/react';

export default function CategoryFilter({ products, value, onChange }) {
  const cats = Array.from(new Set(products.map((p) => p.category))).filter(
    Boolean,
  );
  return (
    <HStack>
      <Select
        w="240px"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All categories</option>
        {cats.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>
    </HStack>
  );
}
