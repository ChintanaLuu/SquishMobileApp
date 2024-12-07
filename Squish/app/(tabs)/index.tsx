import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
        /*Replace image with app icon. */
          source={require('@/assets/images/squishappicon.png')}
          style={styles.squishLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Welcome! Squishling!</ThemedText>
        <ThemedText>
          Hullo! Welcome to Squish! The app where you meet new friends!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

/* Define styles. */
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    /* Center container.*/
    alignItems: 'center',
    marginBottom: 8,
  },
  squishLogo: {
    height: 284,
    width: 474,
    alignSelf: 'center',
    // bottom: 0,
    // left: 0,
    position: 'absolute',
  },
});
