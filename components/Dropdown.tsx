"use client";
import { useCallback, useMemo } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Separator from "./Separator";

export interface DropdownProps {
    allItemsLabel: string;
    items: string[];
    selectedItems: string[];
    onSelect: (selectedItems: string[]) => void;
    onDone?: () => void;
}

const DROPDOWN_SHADOW = '0 8px 15px 0 rgba(0, 0, 0, 0.1), 0 0px 4px 0 rgba(0, 0, 0, 0.1)';

export default function Dropdown({
    allItemsLabel,
    items,
    selectedItems,
    onSelect,
    onDone,
}: DropdownProps) {
    const handleAllItemsToggle = useCallback((checked: boolean) => {
        onSelect(checked ? [...items] : []);
    }, [items, onSelect]);

    const handleItemToggle = useCallback((item: string) => (checked: boolean) => {
        if (checked) {
            onSelect([...selectedItems, item]);
        } else {
            onSelect(selectedItems.filter(selected => selected !== item));
        }
    }, [selectedItems, onSelect]);

    const allSelected = useMemo(() =>
        items.length > 0 && selectedItems.length === items.length,
        [items.length, selectedItems.length]
    );

    const handleDone = useCallback(() => {
        onDone?.();
    }, [onDone]);

    return (
        <div
            className={`flex flex-col items-center w-[370px] border border-gray-active rounded-md py-2.5`}
            style={{ boxShadow: DROPDOWN_SHADOW }}
        >
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

            <div className="w-full px-[15px] py-2.5">
                <Button label="Done" onClick={handleDone} />
            </div>
        </div>
    );
}