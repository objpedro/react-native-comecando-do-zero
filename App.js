import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';//IMPORTANTO FONTE

import AppLoading from 'expo-app-loading';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading /> //mantém a tela de splash enquanto a aplicação carrega
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <StatusBar />
      <Cesta {...mock /* isso equivale á topo={/mock.topo} detalhes={/mock.detalhes} */} />

    </SafeAreaView>
  );
}