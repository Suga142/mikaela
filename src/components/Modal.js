import React from "react"
import { View, StyleSheet, Text, Button, Modal as NewModal } from "react-native"

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
  checkState,
}) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <Button title="Delete" onPress={() => actionDeleteItem()} />
          <Button title="Dismiss" onPress={() => onDismissModal(false)} />
          <Button title="Check" onPress={() => checkState === true} />
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 30,
  },
})