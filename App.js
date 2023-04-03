import * as React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigation from "@app/ui/navigation/DrawerNavigation";

const App = () => {

    return (
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    );
};

EStyleSheet.build({
    $primary :'#00639b',
    $onPrimary: '#ffffff',
    $primaryContainer: '#cee5ff',
    $onPrimaryContainer: '#001d33',
    $secondary: '#51606f',
    $onSecondary: '#ffffff',
    $secondaryContainer: '#d5e4f7',
    $onSecondaryContainer: '#0e1d2a',
    $tertiary: '#68587a',
    $onTertiary: '#ffffff',
    $tertiaryContainer: '#eedbff',
    $onTertiaryContainer: '#231533',
    $error: '#ba1a1a',
    $onError: '#ffffff',
    $errorContainer: '#ffdad6',
    $onErrorContainer: '#410002',
    $background: '#fcfcff',
    $onBackground: '#1a1c1e',
    $surface: '#fcfcff',
    $onSurface: '#1a1c1e',
    $surfaceVariant : '#dee3eb',
    $onSurfaceVariant :'#42474e',
    //$outline : '#fff',
});

export default App;
