import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Material3IconTextButton from "@app/ui/components/Material3IconTextButton";
import EStyleSheet from "react-native-extended-stylesheet";
import Icons from "@app/assets/Icons";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomDrawer = props => {
    return (
        <View style={styles.background}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.headerBackground}>
                <View style={styles.drawerHeader}>
                    <Ionicons name={Icons.personCircleOutline} size={50} style={styles.headerIcon}/>
                    <Text
                        style={styles.nameText}>
                        John Doe
                    </Text>
                </View>
                <View style={styles.drawerItems}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.buttonContainer}>
                <Material3IconTextButton
                    text={"Tell a Friend"}
                    icon={Icons.share}
                    fontSize={15}
                />
                <Material3IconTextButton
                    text={"Sign Out"}
                    icon={Icons.logout}
                    fontSize={15}
                />
            </View>
        </View>
    );
};

const styles = EStyleSheet.create({
    background:{
        flex:1,
        backgroundColor: '$background',
    },
    headerBackground:{
        backgroundColor: '$primaryContainer',
    },
    buttonContainer:{
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    drawerHeader:{
        padding: 20,
        backgroundColor: '$primaryContainer',
    },
    drawerItems:{
        flex: 1,
        backgroundColor: '$background',
        paddingTop: 10,
    },
    nameText:{
        color: '$background',
        fontSize: 24,
        fontFamily: 'Roboto-Medium',
        marginBottom: 5,
    },
    descriptionText:{
        color: '$background',
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        marginRight: 5,
    },
    headerIcon:{
        color : '$background',
    },
});

export default CustomDrawer;
