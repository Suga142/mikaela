import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const OnHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem]);
    setTextItem("");
  }

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = (item) => {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
      <Button title="Edit" onPress={() => handleModal(item)} />
    </View>
  )

  

  return (
    <View style={styles.container}>
      <View styles={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Type your product" style={styles.addItemInput} onChangeText={OnHandleChangeItem} value={textItem} />
        <Button title="ADD" onPress={addItem} />
      </View>

      <View style={styles.listContainer}>
        {/*list.map(item => (
          <View>
            <Text>{item}</Text>
          </View>
        ))*/}

        <FlatList data={list} keyExtractor={item => item.id} renderItem={renderItem} ></FlatList>
      </View>

      <Modal styles={styles.deleteButton} animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalStyle}>
            <Text style={styles.modalTextStyle}>
              {itemSelected}
            </Text>
            <Button title="Delete" onPress={() => console.log("borrar elemento")} />
            <Button title="Dismiss" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 80
  },
  titleContainer: {
    flex: 1,
    padding: 50,
    paddintTop: 80,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addItemInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    width: 200
  },
  title: {
    marginBottom: 30,
    color: "gray",
    fontSize: 20
  },
  listContainer: {
    flex: 2,

  },
  renderItemStyle:{
    backgroundColor: "silver",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop:20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-around",
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalStyle: {
    
    margin: 20,
    backgroundColor: "silver",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  deleteButton: {
    paddingTop: 50,
  },
  modalTextStyle:{
    fontSize: 20,
  },
});
