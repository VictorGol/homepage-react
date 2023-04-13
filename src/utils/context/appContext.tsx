import React, { Context, Dispatch, createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import {
  setStorage,
  Storage,
  updateStorage,
  searchEngine,
  updateSetting,
} from "../common";

export function AppProvider({ children }) {
  const [state, dispatch] = useImmerReducer(useApp, {
    ...storage,
    searchValue: "",
  });

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

function useApp(draft: AppState, action: AppAction) {
  switch (action.type) {
    case "searchValueChange": {
      draft.searchValue = action.searchValue ?? "";
      break;
    }
    case "keydown": {
      const key = action.key;
      const fn = (key: string, value: any, upperLimit?: number) => {
        draft[key] = updateSetting(key, value, upperLimit);
      };
      if (!key) return;
      const { searchValue, posx, posy } = draft;
      const x = searchValue.trim();
      const handleKeyAction = {
        ArrowUp: () => fn("posy", posy - 1, 100),
        ArrowDown: () => fn("posy", posy + 1, 100),
        ArrowLeft: () => fn("posx", posx - 1, 100),
        ArrowRight: () => fn("posx", posx + 1, 100),
        Enter: () => {
          if (x.startsWith("bg http")) {
            fn("img", x.slice(3));
          } else if (x.startsWith("trp ") || x === "trp") {
            fn("trp", x.slice(4), 1);
          } else if (x.startsWith("blur ") || x === "blur") {
            fn("blur", x.slice(5), 100);
          } else {
            const ind = x.indexOf(" ");
            const url =
              ind == -1
                ? searchEngine.bing + x
                : searchEngine[x.slice(0, ind)]
                ? searchEngine[x.slice(0, ind)] + x.slice(ind + 1)
                : searchEngine.bing + x;
            window.open(url);
          }
        },
      };
      const a = handleKeyAction[key];
      a && a();
      break;
    }
    case "bgl": {
      const img = action.img;
      if (!img) break;
      updateStorage({ img });
      draft.img = img;
      break;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

interface AppState {
  searchValue: string;
  img: string;
  trp: number;
  posx: number;
  posy: number;
  blur: number;
}

interface AppAction {
  type: string;
  key?: string;
  searchValue?: string;
  img?: string;
  trp?: number;
  posx?: number;
  posy?: number;
  blur?: number;
}

const storage: Storage = (function () {
  const str = localStorage.getItem("homepage");
  if (str) return JSON.parse(str);
  const obj: Storage = {
    img: "https://images.unsplash.com/photo-1680100612420-e57b14dd2c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80",
    trp: 0,
    posx: 50,
    posy: 50,
    blur: 0,
  };
  setStorage(obj);
  return obj;
})();

export const AppContext: Context<AppState> = createContext({
  ...storage,
  searchValue: "",
});

const defaultDispatchValue = ({}: AppAction) => {};

export const AppDispatchContext: Context<Dispatch<AppAction>> =
  createContext(defaultDispatchValue);

export function useAppState() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}