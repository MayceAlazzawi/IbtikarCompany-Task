

export async function fetchSingleUser(id: number) {
    let url = `https://dummyjson.com/users/${id}`;
    const response = await fetch(url)
    if (!response.ok) {
      let error = await response.text();
      error = await response.text();
     
      throw new Error(
        `Failed to fetch data ${error}`,
      );
    }
    let res = response.json()
    return res;
}

console.log("hello")