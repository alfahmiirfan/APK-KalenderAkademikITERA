import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
        onPress={() => setShowModal(true)} 
        style={{ 
          backgroundColor: 'red',
          borderRadius: 5,
          marginTop:70,
          marginBottom:35,
          marginLeft: 55,
          padding: 10,
          width: 300,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize:16, fontWeight: 'bold'}}>Kalender Akademik ITERA</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.logo}>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Image
          style={{ width: 250, height: 250 }}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png' }} />
        </View>
        </View>
        <Modal visible={showModal} animationType="fade">
        <Text style={{color: 'black', fontSize:20, marginTop:70, marginLeft:90, marginRight:95, backgroundColor: '#F2EDD7',}}>Kalender Akademik ITERA</Text>
        <Text style={{color: 'black', fontSize:8, marginLeft:90,}}>Copyright by M Alfahmi Irfan - 120140206</Text>
          <Calendar style={{borderRadius: 10, elevation:4, margin:10, padding:50}} 
          onDayPress={date => {
            console.log(date)
            setShowModal(false)
          }}
          initialDate={'2023-04-02'}
          minDate={'2023-01-01'}
          maxDate={'2023-12-31'}
          markingType={'period'}
          markedDates={{
            '2023-03-18': {marked: true, color:'lightblue', dotColor:'transparent'},
            '2023-03-20': {startingDay: true, color:'lightgreen', dotColor:'transparent'},
            '2023-03-21': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-03-22': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-03-23': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-03-24': {endingDay: true, color:'lightgreen', dotColor:'transparent'},
            '2023-04-19': {startingDay: true, color:'red', dotColor:'transparent'},
            '2023-04-20': {marked: true, color:'red', dotColor:'transparent'},
            '2023-04-21': {marked: true, color:'red', dotColor:'transparent'},
            '2023-04-22': {marked: true, color:'red', dotColor:'transparent'},
            '2023-04-23': {marked: true, color:'red', dotColor:'transparent'},
            '2023-04-24': {marked: true, color:'red', dotColor:'transparent'},
            '2023-04-25': {endingDay: true, color:'red', dotColor:'transparent'},
            '2023-05-12': {marked: true, color:'yellow', dotColor:'transparent'},
            '2023-05-15': {startingDay: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-16': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-17': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-18': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-19': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-20': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-21': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-22': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-23': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-24': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-25': {marked: true, color:'lightgreen', dotColor:'transparent'},
            '2023-05-26': {endingDay: true, color:'lightgreen', dotColor:'transparent'},
          }}
          />
        <View style={styles.bulan}>
        <Text style={styles.maret1}>18 Maret 2023 - Wisuda ke 13 ITERA</Text>
        <Text style={styles.maret2}>20-24 Maret 2023 - Masa UTS Smt Genap 2022/2023</Text>
        <Text style={styles.april}>19-25 April 2023 - Cuti Bersama Idul Fitri 1444H </Text>
        <Text style={styles.mei1}>12 Mei 2023 - Hari Terakhir Masa Kuliah Smt Genap 2022/2023 </Text>
        <Text style={styles.mei2}>15-26 Mei 2023 - Masa UAS Smt Genap 2022/2023 </Text>
        </View>
        </Modal>
        <View style={styles.footer}>
        <Text style={styles.copyright}>Copyright M Alfahmi Irfan - 120140206</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bulan: {
    marginLeft:27,
    marginRight:35,
    borderRadius: 10,
  },
  maret1: {
    backgroundColor: 'lightblue',
  },
  maret2: {
    backgroundColor: 'lightgreen',
  },
  april: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: 20,
  },
  mei1: {
    backgroundColor: 'yellow',
    marginTop: 20,
  },
  mei2: {
    backgroundColor: 'lightgreen',
    marginBottom: 150,
  },
  header: {
    backgroundColor: '#BFA045',
  },
  logo: {
    marginTop: 170,
    marginBottom: 250,
  },
  footer: {
    zIndex: -99,
    width: "100%",
    height: 90,
    backgroundColor: '#BFA045',
  },
  copyright: {
    color : 'white',
    fontWeight: 'bold',
    marginBottom: 45,
    marginTop: 'auto',
    textAlign: 'center',
  }
});
