import { storage, auth } from "../../firebase";
import * as Contacts from "expo-contacts";
import { Alert } from "react-native";

// CONTACTS
const ADD_CONTACT = "ADD_CONTACT";
const GET_CONTACT = "GET_CONTACT";
const DELETE_ALL = "DELETE_ALL";

// STATE

const initialState = [];

// REDUCER

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case GET_CONTACT:
      return action.payload;

    case DELETE_ALL:
      return [];

    default:
      return [...state];
  }
}

// ACTIONS

export const addContact = (id) => async (dispatch) => {
  try {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      const format = data.map((c, index) => ({
        id: index,
        name: c.name,
        telefono: Array.isArray(c.phoneNumbers)
          ? c.phoneNumbers[0].number.replace(/[\ -]+/g, "")
          : "--",
        avatar_url: "--",
        subtitle: "QuiqueBank",
        alias: "Don_Quijote",
        cbu: "--",
        cvu: "--",
      }));

      // FILTRAR LOS CONTACTOS
      format.map((c) => {
        let document = {};

        let users = storage.collection("Users");
        let query = users
          .where("phone", "==", `${c.telefono}`)
          .get()
          .then((snapshot) => {
            if (snapshot.empty) {
              return;
            }
            snapshot.forEach((doc) => {
              document = doc.data();
              users.doc(id).collection("contactos").doc(doc.id).set(document);
              dispatch({
                type: ADD_CONTACT,
                payload: document,
              });
            });
          })
          .catch((err) => {
            console.log("Error getting documents", err);
          });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = (id) => async (dispatch) => {
  Alert.alert("entré");
  try {
    const data = storage.collection("Users").doc(id).collection("contactos");
    const colleccion = await data.get();
    let array = [];
    colleccion.forEach((doc) => (array = [...array, doct.data()]));
    dispatch({
      type: GET_CONTACT,
      payload: array,
    });
  } catch (err) {
    console.log("------->", err);
  }
};

export const deleteAll = () => (dispatch) => {
  dispatch({
    type: DELETE_ALL,
  });
};
