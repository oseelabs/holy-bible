import {supabase} from "@/utils/supabase";
import {TestamentBooks} from "@/types/supabase";

export const getTestamentBooks = async <T extends ('OT' | 'NT')>(testament: T): Promise<TestamentBooks[]> => {
	const { data, error } = await supabase.from('key_english').select('*').eq('testament', testament);
	
	if (error) {
		console.error('Error fetching books:', error);
		return [];
	}
	
	return data as TestamentBooks[];
}