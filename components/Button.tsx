export default function Button({ label, onClick }: { label: string; onClick?: () => void }) {
    return (
        <button onClick={onClick} className="w-full px-5 py-2.5 rounded-sm text-[14px] text-dark bg-orange hover:bg-orange-light hover:cursor-pointer">
            {label}
        </button>
    );
}