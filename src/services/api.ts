// src/services/api.ts
export async function fetchNewsByCategory(category: string) {
  const response = await fetch(`API_URL_HERE/category/${category}`);
  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }
  return response.json();
}
