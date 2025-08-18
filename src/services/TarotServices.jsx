const URL_API = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot"

// Método GET para el READ
export async function getAllCards() {
    const response = await fetch(URL_API)
    if(!response.ok)  throw new Error('Error al obtener las cartas')
    return response.json()
}

export async function getOneCard(id) {
    const response = await fetch(`${URL_API}/${id}`)
    if (!response.ok) throw new Error('Error al obtener la carta')
    return response.json()
}