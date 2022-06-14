import React, {createContext, useState, useEffect} from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user, setUser] = useState('');

  useEffect(() => {
    async function getUser() {
      const storageUser = await AsyncStorage.getItem('auth_user');

      if (storageUser) {
        setUser(storageUser);
      }
    }
    getUser();
  }, []);

  async function signUp(nome, email, password) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            nome: nome,
          })
          .then(() => {
            let data = {
              nome: nome,
              email: email,
              uid: uid,
            };
            setUser(data);
            storageUser(data);
          });
      });
  }

  async function signIn(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value', snapshot => {
            let data = {
              nome: snapshot.val().nome,
              uid: uid,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch(err => {
        alert(err);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('auth_user', JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut;
    await AsyncStorage.clear();
    setUser('');
  }

  return (
    <AuthContext.Provider value={{user, setUser, signUp, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}
