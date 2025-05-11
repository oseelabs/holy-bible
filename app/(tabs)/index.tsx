import {SafeAreaView, StyleSheet, View, ScrollView} from "react-native";
import {Image} from 'expo-image';
import {useAssets} from "expo-asset";
// import * as Navigation from 'ex'

import { Heading } from "@/components/text";
import {useEffect, useState} from "react";
import {TestamentBooksResponse} from "@/types/supabase";
import {TestamentList} from "@/components/table-of-contents";
import {Link, useRouter} from "expo-router";


export default function HomePage() {
	const [{ot, nt}, setBooks] = useState<TestamentBooksResponse>({ ot: [], nt: [] });
	
	const [assets, error] = useAssets([
	    require('../../assets/images/jesus/jesus_cross.png'),
		require('../../assets/images/jesus/jesus_arms_open.png')
	]);
	
	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:8082/api/testaments');
			const data: { testaments: TestamentBooksResponse } = await res.json();
			setBooks(data.testaments);
		})()
	}, []);
	
	return (
	  <>
		  { assets && (
		    <Image
			  source={assets[0]}
			  contentFit={'cover'}
			  style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
		    />
		  )}
		  
		  <SafeAreaView style={styles.container}>
			  <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
				  <Link href={'/settings'}>
					  Go To Settings
				  </Link>
			  </ScrollView>
		  </SafeAreaView>
	  </>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundImage: 'url(../../assets/images/jesus_cross.png)',
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
