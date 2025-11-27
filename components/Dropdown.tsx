"use client";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Separator from "./Separator";

export interface DropdownProps {
    allItemsLabel: string;
    items: string[];
    selectedItems: string[];
    onSelect: (selectedItems: string[]) => void;
}

export default function Dropdown({ allItemsLabel, items, selectedItems, onSelect }: DropdownProps) {
    const handleAllItemsToggle = (checked: boolean) => {
        if (checked) {
            onSelect([...items]);
        } else {
            onSelect([]);
        }
    };

    const handleItemToggle = (item: string) => (checked: boolean) => {
        if (checked) {
            onSelect([...selectedItems, item]);
        } else {
            onSelect(selectedItems.filter(selected => selected !== item));
        }
    };

    const allSelected = items.length > 0 && selectedItems.length === items.length;

    return (
        <div className="flex flex-col items-center w-[370px] border border-gray-light rounded-md shadow-xl py-2.5 gap-2">
            <Checkbox
                label={allItemsLabel}
                isChecked={allSelected}
                onChange={handleAllItemsToggle}
            />
            <Separator />
            {items.map((item) => (
                <Checkbox
                    key={item}
                    label={item}
                    isChecked={selectedItems.includes(item)}
                    onChange={handleItemToggle(item)}
                />
            ))}
            <Separator />
            <Button label="Done" />
        </div>
    );
}