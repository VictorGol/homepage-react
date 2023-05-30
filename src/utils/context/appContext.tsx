import React, { Context, Dispatch, createContext, useContext } from "react";
import { ImmerReducer, useImmerReducer } from "use-immer";
import {
  setStorage,
  Storage,
  updateStorage,
  searchEngine,
  updateSetting,
} from "../common";
import { commands } from "../constant";
import defaultBackground from "../constant/img";

function AppProvider({ children }) {
  const [state, dispatch] = useImmerReducer<AppState, AppAction>(useApp, {
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

function useAppState() {
  return useContext(AppContext);
}

function useAppDispatch() {
  return useContext(AppDispatchContext);
}

interface AppState {
  img: string;
  trp: number;
  posx: number;
  posy: number;
  blur: number;
  searchValue: string;
}

interface AppAction {
  searchValue?: string;
  type: string;
  key?: string;
  img?: string;
  trp?: number;
  posx?: number;
  posy?: number;
  blur?: number;
}

const useApp: ImmerReducer<AppState, AppAction> = (
  draft: AppState,
  action: AppAction
) => {
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
          if (x==="bg") {
            fn("img", defaultBackground);
          }else if (x.startsWith("bg http")) {
            fn("img", x.slice(3));
          } else if (x.startsWith("trp ") || x === "trp") {
            fn("trp", x.slice(4), 1);
          } else if (x.startsWith("blur ") || x === "blur") {
            fn("blur", x.slice(5), 100);
          } else {
            const item = commands.find((v) => v.name === x);
            const ind = x.indexOf(" ");
            const url = item
              ? item.link
              : ind == -1
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
};

const storage: Storage = (function () {
  const str = localStorage.getItem("homepage");
  if (str) return JSON.parse(str);
  const obj: Storage = {
    img: defaultBackground,
    trp: 0,
    posx: 50,
    posy: 50,
    blur: 0,
  };
  setStorage(obj);
  return obj;
})();

const AppContext: Context<AppState> = createContext({
  ...storage,
  searchValue: "",
});

const defaultDispatchValue: Dispatch<AppAction> = ({}: AppAction) => {};
const AppDispatchContext: Context<Dispatch<AppAction>> =
  createContext(defaultDispatchValue);

export { AppProvider, useAppState, useAppDispatch, AppState, AppAction };
