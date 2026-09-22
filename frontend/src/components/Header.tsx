import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Header.scss'; // Import SCSS thay cho StyleSheet

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>🌱 AEGIS</Text>
      <Text style={styles.headerSub}>Giám sát & phát hiện bệnh cây</Text>
    </View>
  );
};

export default Header;