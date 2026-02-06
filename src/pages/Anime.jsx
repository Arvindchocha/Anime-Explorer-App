import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import { getTopAnime, searchAnime } from "../services/animeApi";
export default function Anime() {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getTopAnime().then((data) => {
            setAnimeList(data);
            setLoading(false);
        })
    }, []);

    async function handleSearch() {
        if (!query) return;
        setLoading(true);
        const data = await searchAnime(query);
        setAnimeList(data);
        setLoading(false);
    }
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Anime Explorer 🎌</h1>
            <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />

            {loading ? <p className="text-center mt-10">Loading anime...</p> :
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            }
        </div>
    )
}