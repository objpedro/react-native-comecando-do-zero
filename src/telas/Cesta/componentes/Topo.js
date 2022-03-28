import React from 'react';
import { Image, StyleSheet, Dimensions, } from 'react-native';

import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto';

const width = Dimensions.get('screen').width;//PEGA A LARGURA DA TELA E SALVA NA VARIÁVEL WIDTH

export default function Topo({ titulo }) {
    return (<>

        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>

    </>)
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',//O TEXTO FICA POR CIMA DA IMAGEM
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold', //GORDURA DA FONTE
        padding: 16,
    },
})