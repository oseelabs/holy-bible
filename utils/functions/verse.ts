import {supabase} from "@/utils/supabase";
import {BibleVerse} from "@/types/supabase";

export const getBibleBook = async <T extends number>(book: T): Promise<BibleVerse[]> => {
	const { data, error } = await supabase
	  .from('t_kjv')
	  .select('*')
	  .eq('book', book)
	  .order('chapter', { ascending: true })
	  .order('verse', { ascending: true });
	
	if (error) {
		console.error('Error fetching books:', error);
		return [];
	}
	
	return data as BibleVerse[];
}