"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";

export function Provider2({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>

        {children}</Provider>;
}
