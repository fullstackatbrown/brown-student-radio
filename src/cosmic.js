const API_READ_KEY = "gAKMuSAIMjCjDfzc6pVT9euLl5GaiaJaacoGEcD79zaqhWaq9k"

export async function queryObjects(query) {
    const response = await fetch(`https://api.cosmicjs.com/v3/buckets/bsr-production/objects/?read_key=${API_READ_KEY}&query=${encodeURIComponent(JSON.stringify(query))}&limit=100`);
    return (await response.json()).objects;
}