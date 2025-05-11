import {getTestamentBooks} from "@/utils/functions/testaments";

export const GET = async (req: Request) => {
	console.log("---STARTING FETCH---")
	const ot = await getTestamentBooks('OT')
	const nt = await getTestamentBooks('NT')
	
	console.log(ot)
	console.log(nt)
	
	return Response.json({
		testaments: {
			ot,
			nt,
		}
	})
};
