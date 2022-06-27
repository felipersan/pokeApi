import React from 'react';
import {View, Text} from 'react-native';

export default function Stats({name, power}) {
  return (
    <View>
      <Text>
        {name}: {power}
      </Text>
    </View>
  );
}
