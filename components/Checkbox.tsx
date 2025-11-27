"use client";
interface CheckboxProps {
    isChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export default function Checkbox({ isChecked = false, onChange, label }: CheckboxProps) {
    const handleClick = () => {
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <div className="flex items-center gap-2 text-gray-dark cursor-pointer group w-full justify-between px-4 h-[42px]" onClick={handleClick}>
            {label && (
                <label className="cursor-pointer select-none">
                    {label}
                </label>
            )}
            <div
                className={`h-[25px] w-[25px] border rounded-md flex items-center justify-center cursor-pointer
                     ${isChecked
                        ? 'bg-blue border-blue hover:bg-blue-light group-hover:bg-blue-light'
                        : 'border-gray-light hover:border-gray group-hover:border-gray bg-white'
                    }`}
            >
                {isChecked && (
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </div>

        </div>
    );
}