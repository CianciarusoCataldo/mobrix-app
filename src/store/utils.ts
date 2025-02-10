import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from ".";

export const useMbxAppSelector: TypedUseSelectorHook<RootState> = useSelector;
