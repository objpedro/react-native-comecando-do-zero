import React from "react";
import { StyleSheet, Text, } from 'react-native';

export default function Texto({ children, style }) {// STYLE FAZ COM QUE O ESTILO APLICADO N SEJA ESQUECIDO

    let estilo = estilos.texto; //ESTILO PADRÃO

    if (style?.fontWeight === 'bold') {//"?" VERIFICA SE O COMPONETE TEM UM STYLE
        estilo = estilos.textoNegrito;
    }
    return (
        <Text style={[style, estilo]}>{children}</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: 'normal',
    }
});