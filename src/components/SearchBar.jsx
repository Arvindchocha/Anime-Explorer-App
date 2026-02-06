export default function SearchBar({ value, onChange, onSearch }) {
    return(
        <div className="flex gap-2 mb-6">
            <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search anime..." className="border p-2 flex-1 rounded" />
            <button onClick={onSearch} className="bg-blue-600 text-white px-4 rounded">Search</button>
        </div>
    )
}