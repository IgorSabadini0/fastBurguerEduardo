import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

export const ProfileScreen = ({ navigation }: any) => {
  const options = ['Meus pedidos', 'Endereços', 'Formas de pagamento', 'Configurações', 'Sair'];

  const handlePress = (option: string) => {
    if (option === 'Sair') {
      const parentNav = navigation.getParent();
      if (parentNav?.reset) {
        parentNav.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        navigation.navigate('Login');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 40 }}>👤</Text>
        </View>
        <Text style={styles.name}>Mauricio das Neves</Text>
        <Text style={styles.email}>mauricio@email.com</Text>
      </View>

      <View style={styles.menu}>
        {options.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handlePress(item)}>
            <Text style={styles.menuText}>{item}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, paddingTop: 60, paddingHorizontal: theme.spacing.md },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#E9ECEF', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  name: { fontSize: 20, fontWeight: 'bold', color: theme.colors.textPrimary },
  email: { fontSize: 14, color: theme.colors.textSecondary },
  menu: { backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.md, paddingVertical: 8 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  menuText: { fontSize: 16, color: theme.colors.textPrimary, fontWeight: '500' },
  arrow: { fontSize: 18, color: theme.colors.textSecondary },
});