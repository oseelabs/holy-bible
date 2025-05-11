import {BibleVerse} from "@/types/supabase";

export function groupVersesByChapter(data: BibleVerse[]) {
	const result: Record<number, {
		verse: number;
		text: string;
	}[]> = {}; // Initialize the output object
	
	data.forEach(item => {
		const chapter = item.chapter;
		const verse = {
			verse: item.verse,
			text: item.text
		};
		
		// Check if the chapter key already exists in the result object
		if (!result[chapter]) {
			// If not, create a new array for this chapter
			result[chapter] = [];
		}
		
		// Push the verse object into the array for the corresponding chapter
		result[chapter].push(verse);
	});
	
	return result;
}