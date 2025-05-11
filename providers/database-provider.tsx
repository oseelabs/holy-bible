import {createContext, ReactNode} from "react";

export type DatabaseContextType = {
	// Define the shape of your database context here,
	// For example:
	// user: User | null;
	// isAuthenticated: boolean;
	// signIn: (email: string, password: string) => Promise<void>;
	// signOut: () => Promise<void>;
};

export const DatabaseContext = createContext<DatabaseContextType>({
	// Define default values for your context here
});

export const DatabaseProvider = (
  { children }: { children: ReactNode }
) => {
	return (
	  <DatabaseContext.Provider value={{ }}>
		  {children}
	  </DatabaseContext.Provider>
	)
}
