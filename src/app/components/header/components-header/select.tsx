import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="border-none outline-none">
        <SelectValue placeholder="Uzbek" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="eng">English</SelectItem>
          <SelectItem value="rus">Russian</SelectItem>
          <SelectItem value="uz">Uzbek</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
