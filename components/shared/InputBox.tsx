import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

export default function InputBox({
  placeholderText,
  className,
  value,
  onChange,
}: {
  placeholderText: string;
  className: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <InputGroup>
      <InputGroupInput
        id="inline-start-input"
        placeholder={placeholderText}
        className={className}
        value={value}
        onChange={onChange}
      />
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}
