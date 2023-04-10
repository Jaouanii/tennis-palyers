// recuperer tout les joueurs:

// configurer tout la requette http:
const getAllPlayers = async() => {
    const url = "https://localhost:3000/api/players";
    
    const requestInfos = new Request(url, {
        method: 'get',
    });
// Executer la requete:
    const request = await fetch(requestInfos);

// recuperer la reponse
    const response = await request.json();

// return la response

    return response;
    
}

// api pour ciblier juste un joueur:
const getPlayer = async(id) => {
    const url = `https://localhost:3000/api/players/${id}`;
    
    const requestInfos = new Request(url, {
        method: 'get',
    });
    const request = await fetch(requestInfos);

    const response = await request.json();


    return response;
    
}



export { getAllPlayers, getPlayer };