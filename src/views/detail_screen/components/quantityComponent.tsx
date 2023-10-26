import React, { Dispatch, SetStateAction, FC } from 'react'
import { View, Pressable, TextInput, StyleSheet } from 'react-native'
import IconButtonComponent from '../../components/iconButtonComponent'
import { SyS16_MinusIcon, SyS16_PlusIcon } from '../../../helpers/icons'
import { COLORS, TEXT_STYLES } from '../../../helpers/constants'

interface QuantityComponentProps {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantityComponent: FC<QuantityComponentProps> = ({ quantity, setQuantity }) => {
    const decrease = () => {
        if (quantity <= 1) return
        setQuantity(quantity - 1);
    };

    const increase = () => {
        setQuantity(quantity + 1);
    };

    const changeQuantity = (val: number) => {
        if (val <= 1) setQuantity(1);
        setQuantity(val);
    }

    return (
        <View style={styles.body}>
            <Pressable onPress={decrease}>
                <IconButtonComponent
                    icon={<SyS16_MinusIcon width={20} height={20}
                        stroke={COLORS.primaryColor} />}
                />
            </Pressable>
            <View style={styles.inputBody}>
                <TextInput
                    textAlignVertical='bottom'
                    textAlign='center'
                    cursorColor={COLORS.primaryColor}
                    selectionColor={COLORS.primaryColor}
                    inputMode='numeric'
                    maxLength={5}
                    onChangeText={val => {
                        const parsedValue = parseInt(val);
                        if (isNaN(parsedValue)) {
                            changeQuantity(1);
                        } else {
                            changeQuantity(parsedValue);
                        }
                    }}
                    style={[TEXT_STYLES.largeTextR, styles.input,]} value={quantity.toString()} />
            </View>
            <Pressable onPress={increase}>
                <IconButtonComponent
                    icon={<SyS16_PlusIcon width={20} height={20}
                        stroke={COLORS.primaryColor} />}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        // marginLeft: 16
    },
    inputBody: {
        marginHorizontal: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: COLORS.primaryColor,
        borderRadius: 5
    },
    input: {
        paddingVertical: 0,
        paddingHorizontal: 16,
        color: COLORS.textSecondaryColor
    }
})


export default QuantityComponent
