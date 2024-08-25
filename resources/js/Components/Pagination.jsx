import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={`py-2 px-4 rounded-lg text-gray-200 ${
                    link.active ? "bg-gray-950 " : ""
                    }${!link.url ? "cursor-not-allowed opacity-50" : "hover:bg-gray-950"}`}
                    dangerouslySetInnerHTML={{__html: link.label}}
                />
            ))}
        </nav>
    )
}
