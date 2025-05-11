export interface BibleBook {
	id: number;
	book: number;
	name: string;
	testament: 'OT' | 'NT';
	group: number;
}

export const bibleBooks: BibleBook[] = [
	{id: 29, book: 1, name: 'Genesis', testament: 'OT', group: 1},
	{id: 30, book: 2, name: 'Exodus', testament: 'OT', group: 1},
	{id: 31, book: 3, name: 'Leviticus', testament: 'OT', group: 1},
	{id: 32, book: 4, name: 'Numbers', testament: 'OT', group: 1},
	{id: 33, book: 5, name: 'Deuteronomy', testament: 'OT', group: 1},
	{id: 34, book: 6, name: 'Joshua', testament: 'OT', group: 2},
	{id: 35, book: 7, name: 'Judges', testament: 'OT', group: 2},
	{id: 36, book: 8, name: 'Ruth', testament: 'OT', group: 2},
	{id: 37, book: 9, name: '1 Samuel', testament: 'OT', group: 2},
	{id: 38, book: 10, name: '2 Samuel', testament: 'OT', group: 2},
	{id: 39, book: 11, name: '1 Kings', testament: 'OT', group: 2},
	{id: 40, book: 12, name: '2 Kings', testament: 'OT', group: 2},
	{id: 41, book: 13, name: '1 Chronicles', testament: 'OT', group: 2},
	{id: 42, book: 14, name: '2 Chronicles', testament: 'OT', group: 2},
	{id: 43, book: 15, name: 'Ezra', testament: 'OT', group: 2},
	{id: 44, book: 16, name: 'Nehemiah', testament: 'OT', group: 2},
	{id: 45, book: 17, name: 'Esther', testament: 'OT', group: 2},
	{id: 46, book: 18, name: 'Job', testament: 'OT', group: 3},
	{id: 47, book: 19, name: 'Psalms', testament: 'OT', group: 3},
	{id: 48, book: 20, name: 'Proverbs', testament: 'OT', group: 3},
	{id: 49, book: 21, name: 'Ecclesiastes', testament: 'OT', group: 3},
	{id: 50, book: 22, name: 'Song of Solomon', testament: 'OT', group: 3},
	{id: 51, book: 23, name: 'Isaiah', testament: 'OT', group: 4},
	{id: 52, book: 24, name: 'Jeremiah', testament: 'OT', group: 4},
	{id: 53, book: 25, name: 'Lamentations', testament: 'OT', group: 4},
	{id: 54, book: 26, name: 'Ezekiel', testament: 'OT', group: 4},
	{id: 55, book: 27, name: 'Daniel', testament: 'OT', group: 4},
	{id: 56, book: 28, name: 'Hosea', testament: 'OT', group: 4},
	{id: 57, book: 29, name: 'Joel', testament: 'OT', group: 4},
	{id: 58, book: 30, name: 'Amos', testament: 'OT', group: 4},
	{id: 59, book: 31, name: 'Obadiah', testament: 'OT', group: 4},
	{id: 60, book: 32, name: 'Jonah', testament: 'OT', group: 4},
	{id: 61, book: 33, name: 'Micah', testament: 'OT', group: 4},
	{id: 62, book: 34, name: 'Nahum', testament: 'OT', group: 4},
	{id: 63, book: 35, name: 'Habakkuk', testament: 'OT', group: 4},
	{id: 64, book: 36, name: 'Zephaniah', testament: 'OT', group: 4},
	{id: 65, book: 37, name: 'Haggai', testament: 'OT', group: 4},
	{id: 66, book: 38, name: 'Zechariah', testament: 'OT', group: 4},
	{id: 67, book: 39, name: 'Malachi', testament: 'OT', group: 4},
	{id: 68, book: 40, name: 'Matthew', testament: 'NT', group: 5},
	{id: 69, book: 41, name: 'Mark', testament: 'NT', group: 5},
	{id: 70, book: 42, name: 'Luke', testament: 'NT', group: 5},
	{id: 71, book: 43, name: 'John', testament: 'NT', group: 5},
	{id: 72, book: 44, name: 'Acts', testament: 'NT', group: 6},
	{id: 73, book: 45, name: 'Romans', testament: 'NT', group: 7},
	{id: 74, book: 46, name: '1 Corinthians', testament: 'NT', group: 7},
	{id: 75, book: 47, name: '2 Corinthians', testament: 'NT', group: 7},
	{id: 76, book: 48, name: 'Galatians', testament: 'NT', group: 7},
	{id: 77, book: 49, name: 'Ephesians', testament: 'NT', group: 7},
	{id: 78, book: 50, name: 'Philippians', testament: 'NT', group: 7},
	{id: 79, book: 51, name: 'Colossians', testament: 'NT', group: 7},
	{id: 80, book: 52, name: '1 Thessalonians', testament: 'NT', group: 7},
	{id: 81, book: 53, name: '2 Thessalonians', testament: 'NT', group: 7},
	{id: 82, book: 54, name: '1 Timothy', testament: 'NT', group: 7},
	{id: 83, book: 55, name: '2 Timothy', testament: 'NT', group: 7},
	{id: 84, book: 56, name: 'Titus', testament: 'NT', group: 7},
	{id: 85, book: 57, name: 'Philemon', testament: 'NT', group: 7},
	{id: 86, book: 58, name: 'Hebrews', testament: 'NT', group: 7},
	{id: 87, book: 59, name: 'James', testament: 'NT', group: 7},
	{id: 88, book: 60, name: '1 Peter', testament: 'NT', group: 7},
	{id: 89, book: 61, name: '2 Peter', testament: 'NT', group: 7},
	{id: 90, book: 62, name: '1 John', testament: 'NT', group: 7},
	{id: 91, book: 63, name: '2 John', testament: 'NT', group: 7},
	{id: 92, book: 64, name: '3 John', testament: 'NT', group: 7},
	{id: 93, book: 65, name: 'Jude', testament: 'NT', group: 7},
	{id: 94, book: 66, name: 'Revelation', testament: 'NT', group: 8}
];

export const getBookByName = (bookName: string): string | number => {
	const b = (bibleBooks.find(book => book.name === bookName));
	
	return b!.book || 1
};
