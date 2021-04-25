import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';

import colors from '../../constants/colors';
import GoodsProviderItem from './GoodsProviderItem';

const GoodsProviderItems = ({ items }) => {
    return (
        <View style={styles.itemsContainer} >
            <FlatList
                data={items}
                renderItem={({ item }) => {
                    return (
                        <GoodsProviderItem item={item} />
                    )
                }}
                keyExtractor={item => item._id}
                horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemsContainer: {
        marginTop: 5,
        flex: 1,
        marginLeft: '1%',
        alignItems: 'stretch'
    }
})

export default GoodsProviderItems