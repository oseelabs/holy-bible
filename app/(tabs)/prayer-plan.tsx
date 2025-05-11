import {SafeAreaView, ScrollView, Text} from "react-native";
import {BibleData, loadBibleData, formatToMarkdown} from "@/data/book-groups";
import {useEffect, useState} from "react";

export default function PrayerPlanPage() {
	const [test, setTest] = useState<BibleData>()
	
	useEffect(() => {
		(async () => {
			const bibleData = await loadBibleData()
			setTest(bibleData);
		})()
	}, [])
	
	
	return (
	  <SafeAreaView>
		  <Text>
			  This is the prayer plan page.
		  </Text>
		  <ScrollView>
			  <Text>
				  {JSON.stringify(test, null, 2)}
			  </Text>
		  </ScrollView>
	  </SafeAreaView>
	)
}