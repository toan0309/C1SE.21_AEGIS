import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WarningCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>⚠️ Cảnh báo gần đây</Text>
      <View style={styles.warning}>
        <Text style={styles.warningTitle}>Không có cảnh báo</Text>
        <Text style={styles.warningText}>
          Hiện tại chưa phát hiện dấu hiệu bất thường.
        </Text>
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
  warning: {
    backgroundColor: '#F0FDF4',
    padding: 14,
    borderRadius: 10,
  },
  warningTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  warningText: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 5,
  },
});

export default WarningCard;