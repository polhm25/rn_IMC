import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getNivel } from "../helpers/Funciones";
import { Nivel } from "../model/Nivel";

type ResultadoProps = {
  imc: number;
};

export default function Resultado(props: ResultadoProps) {
  const nivel: Nivel = getNivel(props.imc);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.categoria}>
        {nivel.categoria} ({props.imc.toFixed(1)})
      </Text>

      <Text style={styles.consejo}>{nivel.consejo}</Text>

      <View style={styles.lista}>
        <View style={[styles.item, { backgroundColor: "#D32F2F" }]}>
          <Text style={styles.textoItem}>Delgadez severa (0 - 16.0)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#E64A19" }]}>
          <Text style={styles.textoItem}>Delgadez moderada (16.0 - 16.9)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#F57C00" }]}>
          <Text style={styles.textoItem}>Delgadez leve (16.9 - 18.4)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#388E3C" }]}>
          <Text style={styles.textoItem}>Peso normal (18.4 - 24.9)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#FBC02D" }]}>
          <Text style={styles.textoItem}>Sobrepeso (24.9 - 29.9)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#FFA000" }]}>
          <Text style={styles.textoItem}>Obesidad grado I (29.9 - 34.9)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#F57C00" }]}>
          <Text style={styles.textoItem}>Obesidad grado II (34.9 - 39.9)</Text>
        </View>
        <View style={[styles.item, { backgroundColor: "#D84315" }]}>
          <Text style={styles.textoItem}>Obesidad grado III (39.9 o más)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  categoria: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 12,
  },
  consejo: {
    fontSize: 16,
    color: "#34495e",
    textAlign: "justify",
    marginBottom: 16,
  },
  lista: {
    width: "100%",
    alignItems: "center",
  },
  item: {
    width: "85%",
    borderRadius: 48,
    paddingVertical: 8,
    marginBottom: 6,
    alignItems: "center",
  },
  textoItem: {
    fontSize: 14,
    color: "#2c3e50",
  },
});