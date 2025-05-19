"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectIdio = () => {
  return (
    <Select>
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Select a language" defaultValue={"eng"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Idioma</SelectLabel>
          <SelectItem value="eng">English</SelectItem>
          <SelectItem value="pt">Portugues</SelectItem>
          <SelectItem value="sp">Spanish</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectIdio;
