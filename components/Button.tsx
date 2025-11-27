export default function Button({ label }: { label: string }) {
    return (
        <button className="w-[340px] h-10 mx-5 my-2 rounded-sm text-dark bg-orange hover:bg-orange-light hover:cursor-pointer">
            {label}
        </button>
    );
}