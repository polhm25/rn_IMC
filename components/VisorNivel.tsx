import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Nivel } from '../model/Nivel';

interface Props {
  nivel: Nivel;
  seleccionado: boolean;
}

export default function VisorNivel({ nivel, seleccionado }: Props) {
  return (
    <View
      style={[
        styles.contenedor,
        seleccionado
          ? {
              backgroundColor: nivel.color,
              width: '85%',
              paddingVertical: 7,
              paddingHorizontal: 15,
              borderRadius: 20,
              marginVertical: 5,
            }
          : {
              opacity: 0.4,
              borderWidth: 2,
              borderColor: '#00000040',
            },
      ]}
    >
      <Text
        style={[
          styles.texto,
          !seleccionado && { color: '#1A1A1A' },
          seleccionado && { color: '#1A1A1A' },
        ]}
      >
        {nivel.categoria} ({nivel.extremoInferior}-{nivel.extremoSuperior})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 14,
    color: '#1A1A1A',
  },
});
