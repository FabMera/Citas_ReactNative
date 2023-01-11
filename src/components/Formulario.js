import React, {useState} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({
  modalVisible,
  setModalVisible,
  setPacientes,
  pacientes,
}) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  const handleCita = () => {
    //VALIDAR
    if ([paciente, propietario, email, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [
        {text: 'Cancelar'},
        {text: 'OK'},
      ]); /* Mensaje nativo de Android o IOS..se puede agregar botones o dejarlo normal sin nada.. */
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
    };
    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(!modalVisible);
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => setModalVisible(false)}>
            <Text style={styles.btnCancelarTexto}>Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente :</Text>
            <TextInput
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario :</Text>
            <TextInput
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario:</Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario:</Text>
            <TextInput
              placeholder="Telefono propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={telefono}
              onChangeText={setTelefono}
              maxLength={9}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta :</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                locale="es"
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas:</Text>
            <TextInput
              placeholder="Sintomas del Paciente"
              placeholderTextColor={'#666'}
              style={[styles.input, styles.sintomasInput]}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
          </Pressable>
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
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  btnCancelarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '700',
  },

  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  campo: {marginTop: 10, marginHorizontal: 30},
  input: {backgroundColor: '#FFF', padding: 15, borderRadius: 10},
  sintomasInput: {height: 100},
  fechaContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
  },
});

export default Formulario;
