const apiUrlBase = "https://rickandmortyapi.com/api/character/"

const getData = async (id) => {
  const apiUrl = id ? `${apiUrlBase}${id}` : apiUrlBase

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("Fetch Error", error)
  }
}

export default getData
