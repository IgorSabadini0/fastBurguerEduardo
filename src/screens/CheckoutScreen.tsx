import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useCart } from '../context/CartContext';
import { theme } from '../theme';

export const CheckoutScreen = ({ navigation }: any) => {
  const { totalItems, freight, total, clearCart } = useCart();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'PIX' | 'Cartão' | 'Dinheiro'>('PIX');

  const handleConfirmOrder = () => {
    if (!address.trim()) {
      Alert.alert('Erro', 'Por favor, digite seu endereço de entrega.');
      return;
    }
    clearCart();
    navigation.replace('OrderStatus');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <Text style={styles.label}>Endereço de entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua, número, bairro"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Forma de pagamento</Text>
      <View style={styles.paymentContainer}>
        {(['PIX', 'Cartão', 'Dinheiro'] as const).map((method) => (
          <TouchableOpacity
            key={method}
            style={[styles.paymentBtn, paymentMethod === method && styles.paymentBtnActive]}
            onPress={() => setPaymentMethod(method)}
          >
            <Text style={[styles.paymentBtnText, paymentMethod === method && styles.paymentBtnTextActive]}>
              {method}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.summaryBox}>
        <View style={styles.row}>
          <Text style={styles.summaryLabel}>Itens ({totalItems})</Text>
          <Text style={styles.summaryValue}>R$ {(total - freight).toFixed(2).replace('.', ',')}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.summaryLabel}>Entrega</Text>
          <Text style={styles.summaryValue}>R$ {freight.toFixed(2).replace('.', ',')}</Text>
        </View>
        <View style={[styles.row, { marginTop: 8 }]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R$ {total.toFixed(2).replace('.', ',')}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirmOrder}>
        <Text style={styles.confirmBtnText}>Confirmar pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, paddingTop: 50, paddingHorizontal: theme.spacing.md },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: theme.spacing.lg, color: theme.colors.textPrimary },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: theme.colors.textPrimary },
  input: { backgroundColor: theme.colors.white, padding: theme.spacing.md, borderRadius: theme.borderRadius.sm, borderWidth: 1, borderColor: theme.colors.border, marginBottom: 20 },
  paymentContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  paymentBtn: { flex: 1, padding: 12, backgroundColor: theme.colors.white, borderWidth: 1, borderColor: theme.colors.border, borderRadius: theme.borderRadius.sm, alignItems: 'center', marginHorizontal: 4 },
  paymentBtnActive: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  paymentBtnText: { fontWeight: 'bold', color: theme.colors.textPrimary },
  paymentBtnTextActive: { color: theme.colors.white },
  summaryBox: { backgroundColor: theme.colors.white, padding: theme.spacing.md, borderRadius: theme.borderRadius.sm, marginBottom: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  summaryLabel: { color: theme.colors.textSecondary },
  summaryValue: { fontWeight: 'bold', color: theme.colors.textPrimary },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: theme.colors.textPrimary },
  totalValue: { fontSize: 18, fontWeight: 'bold', color: theme.colors.primary },
  confirmBtn: { backgroundColor: theme.colors.secondary, padding: theme.spacing.md, borderRadius: theme.borderRadius.sm, alignItems: 'center' },
  confirmBtnText: { color: theme.colors.white, fontWeight: 'bold', fontSize: 16 },
});