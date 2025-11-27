"use client";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";

export default function Home() {
    const items = ["Page 1", "Page 2", "Page 3", "Page 4"];
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    return (
        <div className="min-h-screen font-montserrat">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-16">
                    <h1 className="text-6xl pb-4 font-light">Ellty Design System</h1>
                    <p className="text-xl">First Test Assignment for Ellty</p>
                </header>
                <main className="flex justify-center max-w-6xl mx-auto">
                    <Dropdown allItemsLabel="All pages" items={items} selectedItems={selectedItems} onSelect={(selectedItems) => setSelectedItems(selectedItems)} />
                </main>
            </div>
        </div>
    );
}
