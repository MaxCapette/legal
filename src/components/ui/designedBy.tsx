'use client'
import Link from "next/link";
import "./designedBy.css";

export default function DesignedBy() {
    return (
        <div className="flex flex-col items-center justify-center p-1 mt-2">
            <Link
                href="https://www.easy-gpu.fr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center transition-all hover:scale-105"
            >
                <div className="pixel-badge border-[0.5px] border-[var(--orange)] bg-black/5 px-2 py-1 rounded-sm shadow-sm transform hover:rotate-1 transition-all">
                    <h2 className="pixel-font text-xs font-medium group-hover:text-[var(--orange)] transition-colors">
                        Designed by Easy-gpu
                    </h2>
                </div>
            </Link>
        </div>
    )
}

