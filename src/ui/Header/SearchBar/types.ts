import { Dispatch, SetStateAction } from "react";

export type SearchBarProps = {
  searchBarDisplay: boolean,
  setSearchBarDisplay: Dispatch<SetStateAction<boolean>>
}
