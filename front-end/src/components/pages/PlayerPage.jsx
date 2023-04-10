// importer via api!
import { useEffect, useState } from 'react';
import { Link, useAsyncValue, useParams } from 'react-router-dom';
import { getPlayer } from '../../service/api';

const PlayerPage = () => {
    const [player, setPlayer] = useState({});

    // {/* recuperer l'id:  de l'url*/}
    const { id } = useParams();
    // 
    useEffect(() => {
        getPlayer(id).then((data) => setPlayer(data))
    }, []);


    
    
    return (
        <>
        
                <p>
                    <h2 >id:{player.id}</h2>
                    <h2>Nom:{player.lastname}</h2>
                    <h2>Prenom:{player.firstname}</h2>
                
                <p>
                    <img src={player.picture} alt="img" />
                </p>

                <p>
                <img src={ player?.country?.picture}alt="flag" />

                </p>
                
                <button><Link to={'/'}>retour accueil</Link></button>
                </p>
           
                    
        </>
    
    )

}
export default PlayerPage;