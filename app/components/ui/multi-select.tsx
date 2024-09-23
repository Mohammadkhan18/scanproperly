import React from "react";

import { CheckIcon, ChevronDown, X } from "lucide-react";
import { CommandLoading } from "cmdk";
import { cn } from "../../../lib/utils";
import { Badge } from "./badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";

import { FormControl } from "./form";

interface MultiSelectCompProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: { value: string; label: string }[];
  selectedValues: string[];
  onSelectedValuesChange: (selectedValues: string[]) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const MultiSelect = ({
  options = [],
  selectedValues = [],
  onSelectedValuesChange,
  placeholder = "Select...",
  isLoading,
  ...props
}: MultiSelectCompProps) => {
  const handleRemoveOption = (value: string) => {
    const updatedValues = selectedValues.filter(
      (selectedId) => selectedId !== value
    );
    onSelectedValuesChange(updatedValues);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <button
            className="relative min-h-11 flex items-center justify-end rounded-md border bg-white  w-full text-muted-foreground focus-within:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            {...props}
          >
            <div className="relative mr-auto flex flex-grow flex-wrap items-center overflow-hidden px-3 py-1">
              {selectedValues?.length > 0 ? (
                <>
                  {options &&
                    options
                      .filter((option) => selectedValues.includes(option.value))
                      .slice(0, 2)
                      .map((option) => (
                        <Badge
                          key={option.value}
                          variant="outline"
                          className="m-[2px] gap-1 pr-0.5"
                        >
                          <span>
                            {option.label?.length > 10
                              ? `${option.label.slice(0, 9)}...`
                              : option.label}
                          </span>
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              handleRemoveOption(option.value);
                            }}
                            className="rounded-full hover:bg-accent hover:text-red-500"
                            role="button"
                            aria-roledescription="remove the selected item"
                          >
                            <X size={14} />
                          </span>
                        </Badge>
                      ))}

                  {options &&
                    options?.length > 2 &&
                    `${
                      options
                        .filter((option) =>
                          selectedValues.includes(option.value)
                        )
                        .slice(2)?.length
                    } more...`}
                </>
              ) : (
                <span className="mr-auto text-sm">{placeholder}</span>
              )}
            </div>
            <div className="flex flex-shrink-0 items-center self-stretch px-1 text-muted-foreground/60">
              {selectedValues?.length > 0 && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectedValuesChange([]);
                  }}
                  className="flex items-center self-stretch p-2 hover:text-red-500"
                  role="button"
                  aria-roledescription="remove all selected item"
                >
                  <X size={16} />
                </span>
              )}
              <span className="mx-0.5 my-2 w-[1px] self-stretch bg-border" />
              <div className="flex items-center self-stretch p-2 text-muted-foreground opacity-50">
                <ChevronDown size={16} />
              </div>
            </div>
          </button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No result found.</CommandEmpty>
          {isLoading ? (
            <CommandLoading />
          ) : (
            <CommandList>
              <CommandGroup>
                <ScrollArea>
                  <div className="max-h-60">
                    {options.map((option) => {
                      const isSelected = selectedValues?.includes(option.value);
                      return (
                        <CommandItem
                          key={option.value}
                          onSelect={() => {
                            const updatedValues = isSelected
                              ? selectedValues.filter(
                                  (value) => value !== option.value
                                )
                              : [...selectedValues, option.value];
                            onSelectedValuesChange(updatedValues);
                          }}
                        >
                          <div
                            className={cn(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible"
                            )}
                          >
                            <CheckIcon className={cn("h-4 w-4 text-white")} />
                          </div>
                          <span>{option.label}</span>
                        </CommandItem>
                      );
                    })}
                  </div>
                </ScrollArea>
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
