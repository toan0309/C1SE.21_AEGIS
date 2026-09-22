import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

// Import các components vừa tạo
import Header from '../components/Header';
import SystemStatus from '../components/SystemStatus';
import DiseaseDetection from '../components/DiseaseDetection';
import EnvironmentData from '../components/EnvironmentData';
import WarningCard from '../components/WarningCard';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
      <ScrollView contentContainerStyle={styles.content}>

        <Header />
        <SystemStatus />
        <DiseaseDetection />
        <EnvironmentData />
        <WarningCard />

        {/* Nút test và Footer được giữ nguyên ở màn hình chính */}
        <TouchableOpacity style={styles.testButton}>
          <Text style={styles.testButtonText}>Kiểm tra hệ thống</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          AEGIS • AI & IoT Plant Disease Detection
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  testButton: {
    backgroundColor: '#111827',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  testButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
  },
});

export default DashboardScreen;