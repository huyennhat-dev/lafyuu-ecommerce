import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
    SyS_CartIcon,
    SyS_LeftIcon,
    SyS_MoreIcon,
    SyS_SearchIcon,
} from '../../../helpers/icons';
import IconButtonComponent from '../../components/iconButtonComponent';
import { COLORS, SCREENS, TEXT_TYPES, kDefaultPadding } from '../../../helpers/constants';
import TextComponent from '../../components/textComponent';
import { ProductModel } from '../../../models/product.model';
import DotComponent from '../../components/dotComponent';

const DetailHeader = ({ navigation }: { navigation: any }) => {
    const carts:ProductModel[] = [];
    return (
        <View style={styles.body}>
            <Pressable onPress={() => navigation.goBack()} >
                <IconButtonComponent icon={
                    <SyS_LeftIcon width={25} height={25} stroke={COLORS.defaultColor} />
                } />
            </Pressable>
            <View style={styles.textForm}>
                <TextComponent data={{
                    type: TEXT_TYPES.heading4,
                    maxLine: 1,
                    style: { color: COLORS.textSecondaryColor },
                    text: "Nike Air Max 270 React nike adidas"
                }} />
            </View>
            <View style={styles.iconBtn}>
                <IconButtonComponent icon={
                    <SyS_SearchIcon width={25} height={25} stroke={COLORS.defaultColor} />
                } />
            </View>
            <View style={styles.cartBtn}>
                <Pressable onPress={() => navigation.navigate(SCREENS.CartScreen)} style={styles.iconBtn}>
                    <IconButtonComponent icon={
                        <SyS_CartIcon width={25} height={25} stroke={COLORS.defaultColor} />
                    } />
                </Pressable>
               <DotComponent value={carts.length}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        padding: kDefaultPadding * 1.6,
        borderColor: COLORS.borderColor,
    },
    textForm: {
        flex: 1,
        marginLeft: 16
    }
    , iconBtn: {
        marginLeft: 16,
    },
    cartBtn: {
        position: 'relative'
    },

});

export default DetailHeader;
