import { Stack } from "expo-router";
import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import {Drawer} from "expo-router/drawer";

export default function NotFound() {
	return (
	  <SafeAreaView>
		  <Drawer.Screen
		    options={{
			  title: "Oops!",
			  headerShown: false,
		    }}
		  />
		  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			  <Text>
				  This isn't the page you're looking for...
			  </Text>
		  </View>
	  </SafeAreaView>
	)
}
