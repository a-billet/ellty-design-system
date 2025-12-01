"use client";
import { useState, useCallback } from "react";
import CheckIcon from "../static/icons/CheckIcon";

interface CheckboxProps {
    isChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export default function Checkbox({ isChecked = false, onChange, label }: CheckboxProps) {
    const [showShadow, setShowShadow] = useState(false);

    const handleClick = useCallback(() => {
        if (onChange) {
            onChange(!isChecked);
        }

        // Show shadow on release
        setShowShadow(true);
        setTimeout(() => setShowShadow(false), 100);
    }, [onChange, isChecked]);

    return (
        <div className="group flex w-full items-center justify-between py-2 pr-[15px] pl-[22px] text-dark text-[14px] cursor-pointer font-normal" onClick={handleClick}>
            {label && (
                <div className="cursor-pointer">
                    {label}
                </div>
            )}
            <div
                className={`h-[25px] w-[25px] border rounded-md flex items-center justify-center cursor-pointer
                     ${showShadow ? 'shadow-[0_0_0_3px_rgba(36,105,246,0.1)]' : ''}
                     ${isChecked
                        ? 'bg-blue border-blue group-hover:bg-blue-light'
                        : 'border-gray-light group-hover:border-gray group-hover:border-[1.5] bg-white'
                    }`}
            >
                {isChecked && <CheckIcon />}
                {!isChecked && (
                    <div className="opacity-0 group-hover:opacity-100">
                        <CheckIcon color="#E3E3E3" />
                    </div>
                )}
            </div>
        </div>
    );
}