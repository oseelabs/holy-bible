import {TestamentBooks} from "@/types/supabase";
import {Dimensions, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {Heading} from "@/components/text";
import Colors from "@/constants/colors";
import {Link, useRouter} from "expo-router";

type Props = {
	testament: TestamentBooks[]
}

export const TestamentList = ({ testament }: Props) => {
	const router = useRouter();
	
	
	const numColumns = 2;
	// Calculate the number of items per column, rounding up
	const itemsPerColumn = Math.ceil(testament.length / numColumns);
	
	// Split the data into columns
	const columnData = [];
	for (let i = 0; i < numColumns; i++) {
		const start = i * itemsPerColumn;
		const end = start + itemsPerColumn;
		columnData.push(testament.slice(start, end));
	}
	
	return (
		<View style={container}>
			{/* Render each column */}
			{columnData.map((column, colIndex) => (
			  <View key={colIndex} style={styles.column}>
				  {/* Render items within the column */}
				  {column.map((book) => (
				    
				    <Link
				      key={book.id}
					  style={touchableStyle}
					  href={{
						  pathname: '/bible/[book]',
						  params: {
							  book: book.book,
							  name: book.name,
						  },
					  }}
				      >
					    <View style={{ flexDirection: 'row', gap: 5 }}>
						    <Heading
							  props={{ variant: "normal", family: "Galada" }}
							  style={{ color: Colors.Gray }}
						    >{ book.testament == "OT" ? book.book : (book.book - 39) }.</Heading>
						    <Heading
							  props={{ variant: "normal", family: "Galada", weight: "normal" }}
							  style={{ color: Colors.Gray }}
						    >{book.name}</Heading>
					    </View>
				    </Link>
				  ))}
			  </View>
			))}
		</View>
	)
};

const styles = StyleSheet.create({
	scrollViewContent: {
		flexGrow: 1, // Allows content to grow and enable scrolling
	},
	container: {
		flexDirection: 'row', // Arrange columns horizontally
		justifyContent: 'space-around', // Distribute space between columns
		padding: 10,
	},
	column: {
		flex: 1, // Each column takes equal space
		marginHorizontal: 5, // Add some space between columns
	},
	itemContainer: {
		backgroundColor: '#f0f0f0',
		padding: 10,
		marginVertical: 5, // Space between items in a column
		borderRadius: 5,
		alignItems: 'center',
	},
	itemText: {
		fontSize: 16,
	},
});

const container: ViewStyle = {
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
};

const touchableStyle: StyleProp<TextStyle> = {
	paddingHorizontal: 10,
	paddingVertical: 5,
	width: Dimensions.get('window').width / 2.5,
};
