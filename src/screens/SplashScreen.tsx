import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>🍔</Text>
      <Text style={styles.title}>FAST BURGUER</Text>
      <Text style={styles.subtitle}>O melhor hambúrguer da cidade</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: { fontSize: 80, marginBottom: 10 },
  title: { fontSize: 32, fontWeight: 'bold', color: theme.colors.white },
  subtitle: { fontSize: 16, color: theme.colors.white, marginTop: 8 },
});