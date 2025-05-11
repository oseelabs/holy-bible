import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {SQLiteProvider} from "expo-sqlite";
import {migrateDbIfNeeded} from "@/utils/db";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
    const [loaded, error] = useFonts({
        'Inter': require('../assets/fonts/Inter.ttf'),
        'Galada': require('../assets/fonts/Galada-Regular.ttf'),
        'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
    
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    
    if (!loaded && !error) {
        return null;
    }
    
    return (
        <SQLiteProvider
          databaseName={'bible.db'}
          onInit={migrateDbIfNeeded}
          onError={(e) => {alert(e.message)}}
          options={{
            useNewConnection: true,
            finalizeUnusedStatementsBeforeClosing: true,
          }}
        >
            <Drawer
                // initialRouteName={'/(tabs)/prayer-plan'}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <StatusBar
                  style={"auto"}
                  backgroundColor={'transparent'}
                  networkActivityIndicatorVisible
                  animated
                  translucent
                />
                <Drawer.Screen
                  name="(tabs)"
                  options={{}}
                />
            </Drawer>
        </SQLiteProvider>
    );
}
