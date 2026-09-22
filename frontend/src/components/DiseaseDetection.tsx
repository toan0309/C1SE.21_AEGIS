import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DiseaseDetection = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>🔍 Phát hiện bệnh cây</Text>
      <Text style={styles.description}>
        Chụp hoặc tải ảnh lá cây để AI phân tích tình trạng bệnh.
      </Text>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>📷 Phân tích hình ảnh</Text>
      </TouchableOpacity>
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
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#6B7280',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DiseaseDetection;