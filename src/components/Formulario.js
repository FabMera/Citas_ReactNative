import React, { useState } from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const Formulario = ({modalVisible}) => {

  const [paciente,setPaciente] = useState('')
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente :</Text>
            <TextInput
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              style={styles.input}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario :</Text>
            <TextInput
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario:</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#666'}
              style={styles.input}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario:</Text>
            <TextInput
              placeholder="Telefono propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas:</Text>
            <TextInput
              placeholder="Sintomas del Paciente"
              placeholderTextColor={'#666'}
              style={styles.input}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {backgroundColor: '#6D28D9', flex: 1},
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFF',
    marginTop: 30,
  },
  tituloBold: {fontWeight: '900'},
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '6000',
  },
  campo: {marginTop: 10, marginHorizontal: 30},
  input: {backgroundColor: '#FFF', padding: 15, borderRadius: 10},
});

export default Formulario;
