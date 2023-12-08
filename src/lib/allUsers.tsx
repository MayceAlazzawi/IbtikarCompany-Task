
export async function fetchAllUsers() {
    let url = "https://dummyjson.com/users";
    const response = await fetch(url)
    if (!response.ok) {
      let error = await response.text();
      error = await response.text();
     
      throw new Error(
        `Failed to fetch data ${error}`,
      );
    }
    let res = response.json()
    console.log(res)
    return res;
}
