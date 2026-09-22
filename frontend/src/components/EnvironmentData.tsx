import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EnvironmentData = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>🌤️ Dữ liệu môi trường</Text>
      <View style={styles.environmentContainer}>
        <View style={styles.environmentItem}>
          <Text style={styles.environmentIcon}>🌡️</Text>
          <Text style={styles.environmentLabel}>Nhiệt độ</Text>
          <Text style={styles.environmentValue}>28°C</Text>
        </View>
        <View style={styles.environmentItem}>
          <Text style={styles.environmentIcon}>💧</Text>
          <Text style={styles.environmentLabel}>Độ ẩm</Text>
          <Text style={styles.environmentValue}>72%</Text>
        </View>
        <View style={styles.environmentItem}>
          <Text style={styles.environmentIcon}>🌱</Text>
          <Text style={styles.environmentLabel}>Độ ẩm đất</Text>
          <Text style={styles.environmentValue}>65%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },
  environmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  environmentItem: {
    alignItems: 'center',
    flex: 1,
  },
  environmentIcon: {
    fontSize: 25,
    marginBottom: 6,
  },
  environmentLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  environmentValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
});

export default EnvironmentData;