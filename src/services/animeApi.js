const BASE_URL = 'https://api.jikan.moe/v4';

export async function getTopAnime() {
    const res = await fetch(`${BASE_URL}/top/anime`);
    const data = await res.json();
    return data?.data ?? data;
}

export async function searchAnime(query) {
    const res = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data?.data ?? data;
}