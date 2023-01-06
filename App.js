import React, {useState} from 'react';

import {Text, View, StyleSheet, Button, Pressable, Modal} from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [clientes, setClientes] = useState([]);

  /* VIEW se comporta como un DIV y SafeAreaView es para IOS.se puede usar Fragment o <></> */
  /* StyleSheet es el CSS en react Native es un 95% igual a CSS ,FLEXBOX utiliza,se usa POR FUERA DEL RETURN */
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#F3F4F6', flex: 1},
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {fontWeight: '900', color: '#6D28D9'},
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
