import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data/products';
import { CategoryPill } from '../components/CategoryPill';
import { ProductCard } from '../components/ProductCard';
import { CartButton } from '../components/CartButton';
import { Category } from '../types';
import { theme } from '../theme';

export const ProductsScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories: { key: string; label: string }[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'burgers', label: 'Burgers' },
    { key: 'acompanhamentos', label: 'Acompanhamentos' },
    { key: 'bebidas', label: 'Bebidas' },
    { key: 'sobremesas', label: 'Sobremesas' },
  ];

  const filteredProducts = selectedCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cardápio</Text>
        <CartButton onPress={() => navigation.navigate('Cart')} />
      </View>

      <View style={styles.filterContainer}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <CategoryPill
              title={item.label}
              selected={selectedCategory === item.key}
              onPress={() => setSelectedCategory(item.key)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, paddingTop: 50, paddingHorizontal: theme.spacing.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.md },
  title: { fontSize: 26, fontWeight: 'bold', color: theme.colors.textPrimary },
  filterContainer: { marginBottom: theme.spacing.md },
  list: { paddingBottom: 20 },
});