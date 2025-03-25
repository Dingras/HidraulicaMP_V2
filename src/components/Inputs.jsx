export function Input({ label, ...props }) {
    return (
        <div className="flex flex-col">
            {label && <label className="mb-1 text-gray-600">{label}</label>}
            <input
                {...props}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
        </div>
    );
}

export function Textarea({ label, ...props }) {
    return (
        <div className="flex flex-col">
            {label && <label className="mb-1 text-gray-600">{label}</label>}
            <textarea
                {...props}
                className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
        </div>
    );
}
