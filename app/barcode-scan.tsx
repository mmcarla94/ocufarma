import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Barcode, Camera, X } from 'lucide-react-native';
import { useMedicationStore } from '@/store/medication-store';

// Only import BarCodeScanner if not on web platform
let BarCodeScanner;
if (Platform.OS !== 'web') {
  try {
    BarCodeScanner = require('expo-barcode-scanner').BarCodeScanner;
  } catch (error) {
    console.error('Failed to import BarCodeScanner:', error);
  }
}

export default function BarcodeScanScreen() {
  const router = useRouter();
  const colors = useThemeColors();
  const { medications } = useMedicationStore();
  
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web' && BarCodeScanner) {
        try {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        } catch (error) {
          console.error('Error requesting camera permissions:', error);
          setHasPermission(false);
        }
      }
    })();
  }, []);
  
  const handleClose = () => {
    router.back();
  };
  
  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    if (scanned) return;
    
    setScanned(true);
    setScanResult(data);
    
    // Simuliamo la ricerca del farmaco tramite codice a barre
    // In un'app reale, questo sarebbe collegato a un database di codici a barre
    setTimeout(() => {
      // Per demo, reindirizza al primo farmaco
      // In un'app reale, cercheremmo il farmaco con il codice a barre corrispondente
      if (medications.length > 0) {
        router.replace(`/medication/${medications[0].id}`);
      } else {
        // Se non ci sono farmaci, torna indietro
        router.back();
      }
    }, 1500);
  };
  
  // Simuliamo una scansione per la versione web
  const simulateScan = () => {
    setScanned(true);
    setScanResult("123456789");
    
    setTimeout(() => {
      if (medications.length > 0) {
        router.replace(`/medication/${medications[0].id}`);
      } else {
        router.back();
      }
    }, 1500);
  };
  
  if (hasPermission === null && Platform.OS !== 'web') {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.permissionText, { color: colors.text }]}>
          Richiesta di accesso alla fotocamera...
        </Text>
      </SafeAreaView>
    );
  }
  
  if (hasPermission === false && Platform.OS !== 'web') {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.permissionText, { color: colors.text }]}>
          Accesso alla fotocamera negato. Per favore, concedi l'accesso nelle impostazioni.
        </Text>
        <Pressable 
          style={[styles.closeButton, { backgroundColor: 'rgba(255, 255, 255, 0.2)' }]}
          onPress={handleClose}
        >
          <X size={24} color={colors.text} />
        </Pressable>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        {Platform.OS !== 'web' && BarCodeScanner ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        ) : (
          <View style={styles.cameraPreview}>
            <Camera size={48} color={colors.gray[400]} />
            <Text style={styles.cameraText}>
              {scanned ? 'Codice rilevato!' : 'La scansione del codice a barre non è disponibile sul web'}
            </Text>
          </View>
        )}
        
        <View style={styles.scanArea}>
          <View style={styles.cornerTopLeft} />
          <View style={styles.cornerTopRight} />
          <View style={styles.cornerBottomLeft} />
          <View style={styles.cornerBottomRight} />
        </View>
        
        {scanned && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {scanResult ? `Codice rilevato: ${scanResult}` : 'Ricerca farmaco in corso...'}
            </Text>
          </View>
        )}
      </View>
      
      <View style={styles.footer}>
        <Pressable 
          style={styles.closeButton}
          onPress={handleClose}
        >
          <X size={24} color="white" />
        </Pressable>
        
        {Platform.OS === 'web' && (
          <Pressable 
            style={[styles.scanButton, { backgroundColor: colors.primary }]}
            onPress={simulateScan}
            disabled={scanned}
          >
            <Barcode size={24} color="white" />
          </Pressable>
        )}
        
        {scanned && Platform.OS !== 'web' && (
          <Pressable 
            style={[styles.scanButton, { backgroundColor: colors.primary }]}
            onPress={() => setScanned(false)}
          >
            <Text style={styles.scanButtonText}>Scansiona di nuovo</Text>
          </Pressable>
        )}
        
        <View style={styles.placeholder} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraPreview: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  cameraText: {
    color: 'white',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  scanArea: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#4A90E2',
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#4A90E2',
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#4A90E2',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#4A90E2',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  placeholder: {
    width: 50,
  },
  resultContainer: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  permissionText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
});