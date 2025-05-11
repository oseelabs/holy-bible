import {useContext} from "react";
import {DatabaseContext} from "@/providers/database-provider";

export const useDatabase = () => {
	const context = useContext(DatabaseContext)
	
	if (!context) throw new Error("useDatabase must be used within DatabaseProvider")
	
	return context
}
