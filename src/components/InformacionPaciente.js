import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const InformacionPaciente = ({paciente, setModalPaciente}) => {
  console.log(paciente);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion del <Text style={styles.tituloBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => setModalPaciente(false)}>
          <Text style={styles.btnCerrarTexto}>Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre :</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Propietario:</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email_ :</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono :</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas :</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {backgroundColor: '#F59E0B', flex: 1},
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFF',
    marginTop: 30,
  },
  tituloBold: {fontWeight: '900'},
  btnCerrar: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCerrarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  contenido: {
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    marginBottom: 3,
  },
  campo: {marginBottom: 10},
  valor: {fontWeight: '700', fontSize: 20, color: '#334155'},
});

export default InformacionPaciente;
