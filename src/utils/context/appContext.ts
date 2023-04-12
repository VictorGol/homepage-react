import { createContext } from "react";
import { AppAction } from "../reducer";

interface AppContext {
  searchValue: string;
  dispatch?: React.Dispatch<AppAction>;
}

const defaultValue: AppContext = { searchValue: "" };

export const appContext = createContext(defaultValue);
