import https from 'node:https';
import * as fs from 'node:fs/promises';
import {getAllPlayers, getPlayerById} from "./services/playerService.js";


const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const server = https.createServer(options, (req, res) => {
 if (req.url.startsWith("/api/players") ) {

        res.writeHead(200, {
            "content-type": "application/json",
            // header: permet d'autorisé un port a rentré dans le port d'origin (ici : 3000) (pas de / a la fin du lien!)
            "Access-Control-Allow-Origin": "http://localhost:5173",
        });
     const splitURL = req.url.split("/");

    //  console.log(splitURL.length);

      // route api/players
        if (splitURL.length == 3) {
            
            res.write(JSON.stringify(getAllPlayers()));
        }
     
        //  route api/players/[id]
        else if (splitURL.length == 4) {
            
            res.write(JSON.stringify(getPlayerById(splitURL[3])));
            //=> c'est [3] car on place la 'getPlayerById' au 3eme rang de l'url

     };
            
        // console.log(splitURL);
        res.end();
        
    } 
    
});

export default server;
