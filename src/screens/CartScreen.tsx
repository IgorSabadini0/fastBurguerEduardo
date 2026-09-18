import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';
import { theme } from '../theme';

export const CartScreen = ({ navigation }: any) => {
  const { cart, updateQuantity, removeFromCart, subtotal, freight, total } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Pedido</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.product.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.product.name}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
                  <Text style={styles.removeText}>🗑️</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemPrice}>R$ {item.product.price.toFixed(2).replace('.', ',')}</Text>

              <View style={styles.quantityControls}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.product.id, -1)}>
                  <Text style={styles.qtyBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.product.id, 1)}>
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.row}>
          <Text style={styles.footerLabel}>Subtotal</Text>
          <Text style={styles.footerValue}>R$ {subtotal.toFixed(2).replace('.', ',')}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.footerLabel}>Entrega</Text>
          <Text style={styles.footerValue}>R$ {freight.toFixed(2).replace('.', ',')}</Text>
        </View>
        <View style={[styles.row, { marginTop: 8 }]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R$ {total.toFixed(2).replace('.', ',')}</Text>
        </View>

        <TouchableOpacity
          style={[styles.checkoutBtn, cart.length === 0 && { backgroundColor: '#ccc' }]}
          disabled={cart.length === 0}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutBtnText}>Finalizar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, paddingTop: 50, paddingHorizontal: theme.spacing.md },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: theme.spacing.md, color: theme.colors.textPrimary },
  cartItem: { flexDirection: 'row', backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.sm, padding: 12, marginBottom: 12 },
  itemImage: { width: 70, height: 70, borderRadius: theme.borderRadius.sm },
  itemDetails: { flex: 1, marginLeft: 12 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  itemName: { fontWeight: 'bold', fontSize: 16, color: theme.colors.textPrimary },
  removeText: { fontSize: 16 },
  itemPrice: { color: theme.colors.primary, fontWeight: 'bold', marginVertical: 4 },
  quantityControls: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  qtyBtn: { borderWidth: 1, borderColor: theme.colors.border, width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  qtyBtnText: { fontSize: 16, fontWeight: 'bold' },
  qtyText: { marginHorizontal: 12, fontWeight: 'bold' },
  footer: { backgroundColor: theme.colors.white, padding: theme.spacing.md, borderRadius: theme.borderRadius.sm, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  footerLabel: { color: theme.colors.textSecondary },
  footerValue: { fontWeight: 'bold', color: theme.colors.textPrimary },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: theme.colors.textPrimary },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: theme.colors.primary },
  checkoutBtn: { backgroundColor: theme.colors.primary, padding: theme.spacing.md, borderRadius: theme.borderRadius.sm, alignItems: 'center', marginTop: 16 },
  checkoutBtnText: { color: theme.colors.white, fontWeight: 'bold', fontSize: 16 },
});