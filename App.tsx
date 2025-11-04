import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Modal, Alert, ScrollView, Pressable,} from 'react-native';
import { getNivel } from './helpers/Funciones';
import Resultado from './components/Resultado';
import CajaImc from './components/CajaImc';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [botonPresionado, setBotonPresionado] = useState(false);

  const calcularImc = (): void => {
    const camposVacios = !peso || !altura;
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    
    const numerosInvalidos = isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0;
    const alturaInvalida = alturaNum > 3;

    camposVacios && Alert.alert('Error', 'Por favor, introduce tanto el peso como la altura');
    numerosInvalidos && !camposVacios && Alert.alert('Error', 'Por favor, introduce valores numéricos positivos válidos');
    alturaInvalida && !numerosInvalidos && !camposVacios && Alert.alert('Error', 'Por favor, introduce la altura en metros (ej: 1.75)');

    const puedeCalcular = !camposVacios && !numerosInvalidos && !alturaInvalida;
    
    puedeCalcular && setImc(pesoNum / (alturaNum * alturaNum));
    puedeCalcular && setModalVisible(true);
  };

  const reset = (): void => {
    setModalVisible(false);
    setImc(0);
  };

  const nivelActual = modalVisible ? getNivel(imc) : null;

  return (
    <View style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          placeholderTextColor="#999"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          placeholderTextColor="#999"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        
        <Pressable
          style={[
            styles.boton,
            botonPresionado && styles.botonPresionado
          ]}
          onPress={calcularImc}
          onPressIn={() => setBotonPresionado(true)}
          onPressOut={() => setBotonPresionado(false)}
        >
          <Text style={styles.textoBoton}>Calcular IMC</Text>
        </Pressable>

        {nivelActual && (
          <CajaImc idImcUsuario={nivelActual.id} />
        )}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={reset}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={reset}
        >
          <View style={styles.modalContent}>
            <Resultado imc={imc} />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  boton: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonPresionado: {
    backgroundColor: '#005BBB',
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    width: '100%',
  },
});