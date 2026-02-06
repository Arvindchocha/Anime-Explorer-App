export default function AnimeCard({ anime }) {
  const imageUrl = anime?.images?.jpg?.image_url || anime?.image?.jpg?.image_url || "";
  return (
    <div className="bg-white rounded shadow p-4">
        <img src={imageUrl} alt={anime.title} className="w-full h-64 object-cover rounded" />
         <h3 className="font-bold mt-2">{anime.title}</h3>

      <p className="text-sm text-gray-600">
        ⭐ {anime.score ?? "N/A"}
      </p>
    </div>
  )
}