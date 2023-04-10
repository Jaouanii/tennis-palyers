// FAIRE APPEL API POUR RECUPERER LES NOM DES JOUERS et leur ID:
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPlayers } from '../../service/api';
import './nav.css'

const Nav = () => {
    const [players, setPlayers] = useState([]);

    // recuperer les donnees de l'api:
    useEffect(() => {
        getAllPlayers().then((data) => setPlayers(data.players)); 
        
    }, [])
    // getAllPlayers().then((data) => console.log(data));
    

    return (
        <div>
            <h1>liste des joueurs:</h1>
            {players.map((value, index) => (
                <p key={crypto.randomUUID()}>

                <Link to={ `/players/${value.id}` }>
                    {`${value.lastname} ${value.firstname}`}</Link>

                </p>

            )

            )}
        </div>
  )
}
export default Nav;