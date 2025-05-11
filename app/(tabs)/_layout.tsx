import { Tabs } from "expo-router";
import {AntDesign, FontAwesome6, Ionicons, MaterialIcons} from "@expo/vector-icons";
import Colors from "@/constants/colors";
import {Text, View} from "react-native";

export default function TabLayout() {
	return (
	    <Tabs>
			<Tabs.Screen
			  name="index"
			  options={{
				  title: "Home",
				  tabBarLabel: "Home",
				  tabBarIcon: (props) => (
					  <AntDesign name="home" {...props} />
				  ),
				  headerShown: false,
				  headerStyle: {
					  backgroundColor: Colors.Transparent,
					  boxShadow: 'none',
					  shadowColor: 'transparent',
				  }
			  }}
			/>
		    <Tabs.Screen
		      name="bible/index"
		      options={{
			      title: "My Bible",
			      headerShown: false,
			      tabBarLabel: "Bible",
			      tabBarIcon: (props) => (
				    <FontAwesome6 name="book-bible" {...props} />
			      ),
		      }}
		    />
		    <Tabs.Screen
		      name="prayer-plan"
		      options={{
			      title: "My Prayer Plan",
			      // headerShown: false,
			      tabBarLabel: "Prayer Plan",
			      tabBarIcon: (props) => (
				    <FontAwesome6 name="person-praying" {...props} />
			      ),
		      }}
		    />
		    <Tabs.Screen
		      name="bookmarks"
		      options={{
			      title: "Saved Verses",
			      headerLeft: (props) => (
				    <View style={{ marginLeft: 10 }}>
					    <Ionicons name="bookmark" size={22} {...props.backImage} />
				    </View>
			      ),
			      // headerShown: false,
			      tabBarLabel: "Bookmarks",
			      tabBarIcon: (props) => (
				    <Ionicons name={ props.focused ? 'bookmark': 'bookmark-outline' } {...props} />
			      ),
		      }}
		    />
		    <Tabs.Screen
		      name="bible-groups"
		      options={{
			      title: "Bible Books Groups",
			      // headerShown: false,
			      tabBarLabel: "Bible Groups",
			      tabBarIcon: (props) => (
			        <MaterialIcons name={ props.focused ? 'info': 'info-outline' } {...props} />
			      ),
		      }}
		    />
		    
			{/*    Hidden tabs  */}
		    <Tabs.Screen name="bible/[book]" options={{ href: null }}/>
		    <Tabs.Screen name="settings" options={{ href: null }}/>
		    <Tabs.Screen name="about" options={{ href: null }}/>
	    </Tabs>
	);
}

