import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <View>
      <Button title="Click" onPress={handleSignOut} />
    </View>
  );
}
