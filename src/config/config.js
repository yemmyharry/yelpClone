import queryString from "query-string";

export async function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return await fetch(`${path}?${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
  
      "Accept": "*/*",

      "Authorization": `Bearer ${window.env.API_KEY}`
   },
    withCredentials: true,
    Origin: "localhost",
  });
}
