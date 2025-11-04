import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import { Nivel } from '../model/Nivel';
import datos from '../data/datos.json';
import VisorNivel from './VisorNivel';

interface Props {
  idImcUsuario: number;
}

export default function CajaImc({ idImcUsuario }: Props) {
  const niveles: Nivel[] = datos;

  return (
    <View style={styles.contenedor}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {
        niveles.map((nivel) => (
          <VisorNivel
            key={nivel.id}
            nivel={nivel}
            seleccionado={nivel.id === idImcUsuario}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center',
  },
});
