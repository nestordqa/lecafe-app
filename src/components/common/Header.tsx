import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import MenuIcon from '../icons/MenuIcon';
import FilterIcon from '../icons/FilterIcon';

// Header con botones de menú y filtro
export const Header = () => {
    return (
        <View style={styles.container}>
            {/* Botón de menú */}
            <TouchableOpacity>
                <MenuIcon width={25} height={25}/>
            </TouchableOpacity>
            {/* Botón de filtro */}
            <TouchableOpacity>
                <FilterIcon width={25} height={25}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#ff0',
        height: heightPercentageToDP(7.5),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: widthPercentageToDP(2)
    }
});
