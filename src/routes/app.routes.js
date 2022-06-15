import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Pokedex from '../pages/Pokedex';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import News from '../pages/News';

const AppBottomTabs = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppBottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Pokedex':
              iconName = 'user';
              break;
            case 'Profile':
              iconName = 'settings';
              break;
            case 'Details':
              iconName = 'bar-chart';
              break;
            case 'News':
              iconName = 'bell';
              break;

            default:
              iconName = 'circle';
              break;
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#385fa3',
        inactiveTintColor: '#777',
        showLabel: false,
      }}>
      <AppBottomTabs.Screen
        name="Pokedex"
        component={Pokedex}
        options={{headerShown: false}}
      />
      <AppBottomTabs.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <AppBottomTabs.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({tintColor}) => (
            <View>
              <LinearGradient
                style={styles.iconTabRound}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={['#385fa3', '#162641']}>
                <Feather name="home" size={26} color="#FFF" />
              </LinearGradient>
            </View>
          ),
        })}
      />

      <AppBottomTabs.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
      <AppBottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </AppBottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#9C27B0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
