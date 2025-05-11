import {Tabs, useLocalSearchParams} from "expo-router";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {BibleVerse} from "@/types/supabase";
import {Heading} from "@/components/text";
import {groupVersesByChapter} from "@/utils/helpers";

export default function BookPage() {
	const { book, name }: { book: string, name: string } = useLocalSearchParams();
	
	const [data, setData] = useState<BibleVerse[]>();
	const [transformedData, setTransformedData] = useState<Record<number, { verse: number, text: string }[]>>();
	
	useEffect(() => {
		(async () => {
			setData(undefined);
			setTransformedData(undefined);
			
			const res = await fetch('http://localhost:8081/api/book',{
				headers: {
					'Book': book
				}
			})
			const response: { result: BibleVerse[] } = await res.json();
			console.log(response)
			setData(response.result)
			setTransformedData(groupVersesByChapter(response.result))
		})()
	}, [ book, name ]);
	
	return (
	  <SafeAreaView style={styles.container}>
		  <Tabs.Screen
		    options={{
				title: book,
			    headerShown: false,
		    }}
		  />
		  
		  <View>
			  <Heading props={{ family: "Galada", variant: "h2", weight: "thin" }}>
				  {name}
			  </Heading>
		  </View>
		  
		  { (data && transformedData) ?
				(
				  <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
					  {Object.entries(transformedData || {}).map(([chapter, verses]) => (
					    <View key={chapter}>
						    <Heading
						      props={{ family: "Galada", variant: "h3", weight: "thin" }}
						      style={{ marginTop: 20 }}
						    >
							    Chapter {chapter}
						    </Heading>
						    {verses.map((verse) => (
						      <Text key={verse.verse} style={{ marginVertical: 5 }}>
							      {verse.verse}: {verse.text}
						      </Text>
						    ))}
					    </View>
					  ))}
				  </ScrollView>
				): (
				  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					  <Text style={{ fontSize: 20 }}>Loading...</Text>
				  </View>
		        )
		  }
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
