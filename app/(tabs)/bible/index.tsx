import {SafeAreaView, Text, StyleSheet, FlatList, View, Alert, ScrollView} from "react-native";
import Colors from "@/constants/colors";
import { Heading } from "@/components/text";
import {useEffect, useState} from "react";
import {TestamentBooks, TestamentBooksResponse} from "@/types/supabase";
import {TestamentList} from "@/components/table-of-contents";


export default function HomePage() {
	const [{ot, nt}, setBooks] = useState<TestamentBooksResponse>({ ot: [], nt: [] });
	
	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8082/api/testaments');
			const data: { testaments: TestamentBooksResponse } = await res.json();
			setBooks(data.testaments);
		})()
	}, []);
	
	return (
	  <SafeAreaView style={styles.container}>
		  <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
			  <Heading
				props={{
					family: "Galada",
					variant: "h1",
					weight: "condensedBold",
					decoration: "underline",
				}}
			  >
				  Table of Contents
			  </Heading>
			  <View>
				  <Heading props={{ family: "Galada", variant: "h2", weight: "thin" }}>
					  Old Testament
				  </Heading>
				  <TestamentList testament={ot} />
			  </View>
			  <View>
				  <Heading props={{ family: "Galada", variant: "h2", weight: "thin" }}>
					  New Testament
				  </Heading>
				  <TestamentList testament={nt} />
			  </View>
		  </ScrollView>
	  </SafeAreaView>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundImage: 'url(https://i.imgur.com/0000000.jpg)',
	},
	scrollView: {
		flex: 1,
		padding: 20,
		width: '100%',
	},
	scrollViewContent: {
		flexGrow: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingBlockEnd: 30,
	}
});
