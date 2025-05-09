import { Stack } from "expo-router";
import React from "react";
import {Text, View} from "react-native";


export default function NotFound() {
	return (
	  <>
		  <Stack.Screen
		    options={{
			  title: "Oops!",
			  headerShown: false,
		    }}
		  />
		  <View>
			  <Text>
				  This isn't the page you're looking for...
			  </Text>
		  </View>
	  </>
	)
}
