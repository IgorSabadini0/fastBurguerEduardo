import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CartButton } from '../components/CartButton';
import { theme } from '../theme';

export const HomeScreen = ({ navigation }: any) => {
  const highlights = PRODUCTS.slice(0, 3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Mauricio 👋</Text>
          <Text style={styles.subGreeting}>O que você quer comer hoje?</Text>
        </View>
        <CartButton onPress={() => navigation.navigate('Cart')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Text style={styles.bannerEmoji}>🍔</Text>
          <View>
            <Text style={styles.bannerTitle}>Combos da Semana</Text>
            <Text style={styles.bannerSubtitle}>Até 30% OFF em combos</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Destaques</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {highlights.map((item) => (
            <View key={item.id} style={{ width: 140, marginRight: 12 }}>
              <ProductCard
                product={item}
                onPress={() => navigation.navigate('ProductDetail', { product: item })}
              />
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Cardapio')}>
          <Text style={styles.linkText}>Ver cardápio completo →</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, paddingTop: 50, paddingHorizontal: theme.spacing.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg },
  greeting: { fontSize: 22, fontWeight: 'bold', color: theme.colors.textPrimary },
  subGreeting: { fontSize: 14, color: theme.colors.textSecondary },
  banner: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  bannerEmoji: { fontSize: 40, marginRight: 16 },
  bannerTitle: { color: theme.colors.white, fontWeight: 'bold', fontSize: 18 },
  bannerSubtitle: { color: theme.colors.white, fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
  horizontalList: { marginBottom: theme.spacing.lg },
  linkButton: { padding: theme.spacing.md, alignItems: 'center' },
  linkText: { color: theme.colors.primary, fontWeight: 'bold', fontSize: 16 },
});