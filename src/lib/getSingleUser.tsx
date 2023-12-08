
export async function fetchSingleUser(slug: string) {
    let url = `https://dummyjson.com/users/${slug}`;
    const response = await fetch(url)
    if (!response.ok) {
      let error = await response.text();
     
      throw new Error(
        `Failed to fetch data ${error}`,
      );
    }
    let res = response.json()
    return res;
}
