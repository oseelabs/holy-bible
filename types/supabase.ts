export type Testament = 'OT' | 'NT';

export type TestamentBooks = {
	  id: number;
	  book: number;
	  name: string;
	  testament: Testament;
	  group: Number;
};

export type TestamentBooksResponse = {
	ot: TestamentBooks[],
	nt: TestamentBooks[]
};

export type BibleVerse = {
	table_id: number;
	book: number;
	chapter: number;
	verse: number;
	text: string;
};

export type BibleVerseResponse = {};
