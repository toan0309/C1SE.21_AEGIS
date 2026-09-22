import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SystemStatus = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>🟢 Trạng thái hệ thống</Text>
      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>Hệ thống</Text>
        <Text style={styles.statusValue}>Đang hoạt động</Text>
      </View>
      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>AI</Text>
        <Text style={styles.statusValue}>Sẵn sàng</Text>
      </View>
      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>IoT</Text>
        <Text style={styles.statusValue}>Đã kết nối</Text>
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
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  statusLabel: {
    fontSize: 15,
    color: '#6B7280',
  },
  statusValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#16A34A',
  },
});

export default SystemStatus;