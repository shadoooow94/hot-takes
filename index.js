
const express = require("express") //chercher la librairie  dans express
const app = express() //appeler la fonction express
const cors = require('cors') //chercher la librairie  dans cors
const port = 3000   //port d'écoute ou 4002



app.get('/', (req, res) => { // app va appeler la fonction get qui va chercher le chemin / et va appeler la fonction de callback qui va prendre 2 paramètres req et res
  res.send('Hello World!') //res va appeler la fonction send qui va envoyer le message Hello World!
})

app.listen(port, () => { //app va appeler la fonction listen pour écouter le port
    console.log(`"Listening on port" http://localhost:${port}`)
})

app.use(cors()) //app va appeler la fonction use pour utiliser cors = middleware recevoir des reponse du server
app.use(express.json()) //app va appeler la fonction use pour utiliser express.json = middleware recevoir des reponse du server

 
app.post('/api/auth/signup', (req, res) => { // app va appeler la fonction post qui va chercher le chemin /api et va appeler la fonction de callback qui va prendre 2 paramètres req et res
    req.body //va chercher le body de la requete 
    res.send({message: "Utilisarteur enregistré !"}) //res va appeler la fonction send qui va envoyer le message Hello World!
})