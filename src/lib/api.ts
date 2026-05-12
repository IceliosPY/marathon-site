export async function loadJson<T>(path: string): Promise<T> {
  const url = `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url} (${res.status})`);
  return (await res.json()) as T;
}