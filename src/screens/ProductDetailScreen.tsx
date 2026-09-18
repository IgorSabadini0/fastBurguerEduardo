import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { theme } from '../theme';

export const ProductDetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2).replace('.', ',')}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.lg, justifyContent: 'space-between' },
  backButton: { marginTop: 30, marginBottom: 10 },
  backText: { fontSize: 28, fontWeight: 'bold', color: theme.colors.textPrimary },
  image: { width: '100%', height: 260, borderRadius: theme.borderRadius.md },
  content: { flex: 1, marginTop: theme.spacing.lg },
  name: { fontSize: 24, fontWeight: 'bold', color: theme.colors.textPrimary, marginBottom: 8 },
  description: { fontSize: 14, color: theme.colors.textSecondary, marginBottom: 16, lineHeight: 20 },
  price: { fontSize: 24, fontWeight: 'bold', color: theme.colors.primary },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: theme.colors.white, fontWeight: 'bold', fontSize: 16 },
});