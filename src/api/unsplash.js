const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchPhotos(query, perPage = 8) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка запроса к Unsplash");
  }

  const data = await response.json();
  return data.results;
}
