// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
import HomeScreen from './screens/HomeScreen';
import FormAddFuncionario from './screens/FormAddFuncionario';
import AddFuncionario from './screens/AddFuncionario';
import ListaFuncionarios from './screens/ListaFuncionarios';
import FormAddPosto from './screens/FormAddPosto';
import ListaPosto from './screens/ListaPosto';
import AddPosto from './screens/AddPosto';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:'Tela Principal',headerShown: false}} />
        <Stack.Screen name="FormAddFuncionario" component={FormAddFuncionario} options={{title:'Adiciona Funcionario',headerShown: false}} />
        <Stack.Screen name="AddFuncionario" component={AddFuncionario} options={{title:'Funcionario Adicionado',headerShown: false}} />
        <Stack.Screen name="ListaFuncionarios" component={ListaFuncionarios} options={{title:'Listar Funcionários',headerShown: false}} />
        <Stack.Screen name="FormAddPosto" component={FormAddPosto} options={{title:'Adiciona Posto',headerShown: false}} />
        <Stack.Screen name="ListaPosto" component={ListaPosto} options={{title:'Lista Posto',headerShown: false}} />
        <Stack.Screen name="AddPosto" component={AddPosto} options={{title:'Adiciona posto',headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;