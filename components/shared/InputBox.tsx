import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function InputBox({
  placeholderText,
  className,
}: {
  placeholderText: string;
  className: string;
}) {
  return (
    <InputGroup>
      <InputGroupInput
        id="inline-start-input"
        placeholder={placeholderText}
        className={className}
      />
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}
