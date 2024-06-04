import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AboutPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Button title="Go to Home (Push)" onPress={() => router.push('/')} />
      <Button title="Go to Home (Replace)" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});