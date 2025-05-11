import {SafeAreaView, ScrollView, Text, View, StyleSheet} from "react-native";
import {useEffect, useState, useMemo} from "react";
import {Link} from "expo-router";
import {BibleData, loadBibleData} from "@/data/book-groups";
import {getBookByName} from "@/data/books-list";

export default function BibleGroupsPage() {
	const [bibleData, setBibleData] = useState<BibleData>();
	const data = useMemo(async () => {
		const loadedData = await loadBibleData();
		setBibleData(loadedData);
		return loadedData;
	}, []);
	
	useEffect(() => {
		(async () => {
			setBibleData((await data) as BibleData);
		})();
	}, [ data ]);
	
	const renderBookGroup = (group: any) => {
		return (
		  <View style={styles.groupContainer} key={group.name}>
			  <Text style={styles.groupTitle}>{group.name}</Text>
			  {group.note && <Text style={styles.note}>{group.note}</Text>}
			  {group.description && (
				<Text style={styles.description}>{group.description}</Text>
			  )}
			  {group.books && (
				<View style={styles.booksContainer}>
					{group.books.map((book: string) => (
					  <Link
					    key={book}
					    style={styles.book}
					    href={{
							pathname: '/bible/[book]',
						    params: {
								book: getBookByName(book),
						    }
					    }}
					  >
						  <Text key={book} style={styles.book}>
							  {book}
						  </Text>
					  </Link>
					))}
				</View>
			  )}
			  {group.subgroups?.map((subgroup: any) => renderBookGroup(subgroup))}
		  </View>
		);
	};
	
	return (
	  <SafeAreaView style={styles.container}>
		  <ScrollView>
			  {/*<Text style={styles.mainTitle}>Bible Books Groups</Text>*/}
			  <Text style={styles.description}>{bibleData?.bible.description}</Text>
			  {bibleData?.bible.testaments.map((testament) => (
				<View key={testament.name} style={styles.testamentContainer}>
					<Text style={styles.testamentTitle}>
						{testament.name} ({testament.book_count} books)
					</Text>
					{testament.note && <Text style={styles.note}>{testament.note}</Text>}
					{testament.groups.map((group) => renderBookGroup(group))}
				</View>
			  ))}
		  </ScrollView>
	  </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
	},
	mainTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		padding: 16,
		textAlign: 'center',
	},
	testamentContainer: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	testamentTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	groupContainer: {
		marginLeft: 16,
		marginTop: 16,
	},
	groupTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	description: {
		fontSize: 16,
		marginVertical: 8,
		color: '#666',
	},
	note: {
		fontSize: 14,
		fontStyle: 'italic',
		color: '#888',
		marginBottom: 4,
	},
	booksContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 8,
	},
	book: {
		fontSize: 14,
		backgroundColor: '#f0f0f0',
		padding: 4,
		margin: 2,
		borderRadius: 4,
	},
});