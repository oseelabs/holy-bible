import {getBibleBook} from "@/utils/functions/verse";


export const GET = async (req: Request) => {
	const book = Number(req.headers.get('Book') || 1)
	console.log("---STARTING FETCH---")
	const bookData = await getBibleBook(book)
	
	console.log(bookData)
	
	return Response.json({
		result: bookData
	})
};
