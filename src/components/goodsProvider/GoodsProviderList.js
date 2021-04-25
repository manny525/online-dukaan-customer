import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors'
import InventoryItems from './InventoryItems';
import GoodsProviderItems from './GoodsProviderItems';

const GoodsProviderList = ({ category }) => {
    const [imgSrc, setImgSrc] = useState(require('../../../assets/dropdown.png'))
    const [openList, setOpenList] = useState(false)
    return (
        <View>
            <View style={styles.header2}>
                <Text style={styles.category} >{category.type.toUpperCase()}</Text>
            </View>
            <GoodsProviderItems items={category.merchants} />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        marginVertical: 5,
        width: Dimensions.get('window').width * 0.8
    },
    category: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: 'white'
    },
    tinyLogo: {
        marginTop: 5,
        marginRight: 5,
        height: 16,
        width: 16
    },
    header2: {
        marginTop: '3%',
        width: Dimensions.get('window').width,
        height: 40,
        justifyContent: 'center',
        paddingLeft: '2%',
        backgroundColor: colors.primary,
        fontSize: 25
    }
})

export default GoodsProviderList