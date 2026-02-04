import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';
import { Box, SimpleGrid, Spinner, VStack } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/CategoryFilter';

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((s) => s.products);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const perPage = 12;

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  const filtered =
    selectedCategory === 'all'
      ? items
      : items.filter((p) => p.category === selectedCategory);
  const total = filtered.length;
  const pages = Math.ceil(total / perPage) || 1;
  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  return (
    <Box p={6}>
      <VStack align="stretch" spacing={6}>
        <CategoryFilter
          products={items}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        {status === 'loading' ? (
          <Spinner />
        ) : (
          <>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
              {pageItems.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={() => dispatch(addToCart(p))}
                />
              ))}
            </SimpleGrid>
            <Pagination current={page} totalPages={pages} onChange={setPage} />
          </>
        )}
      </VStack>
    </Box>
  );
}
