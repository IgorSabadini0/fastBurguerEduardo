import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

export const OrderStatusScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={{ fontSize: 40, color: theme.colors.white }}>✓</Text>
      </View>

      <Text style={styles.title}>Pedido confirmado!</Text>
      <Text style={styles.orderNumber}>Nº FB-123456</Text>

      <View style={styles.timeline}>
        <View style={styles.step}>
          <View style={[styles.stepCircle, styles.stepDone]}>
            <Text style={styles.check}>✓</Text>
          </View>
          <Text style={styles.stepText}>Preparando</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.step}>
          <View style={[styles.stepCircle, styles.stepDone]}>
            <Text style={styles.check}>✓</Text>
          </View>
          <Text style={styles.stepText}>A caminho</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.step}>
          <View style={styles.stepCircle} />
          <Text style={[styles.stepText, { color: theme.colors.textSecondary }]}>Entregue</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainTabs')}>
        <Text style={styles.buttonText}>Voltar ao início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing.lg, alignItems: 'center', justifyContent: 'center' },
  iconContainer: { width: 80, height: 80, borderRadius: 20, backgroundColor: theme.colors.secondary, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: theme.colors.textPrimary },
  orderNumber: { fontSize: 16, color: theme.colors.textSecondary, marginBottom: 40 },
  timeline: { width: '80%', marginBottom: 40 },
  step: { flexDirection: 'row', alignItems: 'center' },
  stepCircle: { width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: theme.colors.border, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.white },
  stepDone: { backgroundColor: theme.colors.secondary, borderColor: theme.colors.secondary },
  check: { color: theme.colors.white, fontWeight: 'bold' },
  stepText: { marginLeft: 16, fontSize: 16, fontWeight: 'bold', color: theme.colors.textPrimary },
  line: { width: 2, height: 30, backgroundColor: theme.colors.secondary, marginLeft: 15 },
  button: { backgroundColor: theme.colors.primary, padding: theme.spacing.md, borderRadius: theme.borderRadius.sm, width: '100%', alignItems: 'center' },
  buttonText: { color: theme.colors.white, fontWeight: 'bold', fontSize: 16 },
});