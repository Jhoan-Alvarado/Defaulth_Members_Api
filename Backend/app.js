let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express()
    .use(cors({ credentials: true, origin: 'http://localhost:4200' }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }));

app.listen(10101, () => {
    console.log("Conexión establecida en el puerto 10101");
});

/******************************************************************/

app.post('/register', function (req, res) {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email;
    console.log(name, lastname, email, req.header("Authorization"));
    return res.status(200).json({ "Status": "ok registrado con json" });
});

app.post('/login', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    if (email === 'test@gmail.com' && password === '1234') {
        return res.status(200).json({ "Status": "Ok inicio de sesión" });
    } else {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

app.get("/productos", (req, res) => {
    return res.status(200).json({
        prendas: [
            // { nombre: "", precio: "", url: "" },
        { nombre: "Pantalon", precio: "20000", url: "https://www.pngmart.com/files/6/Trousers-PNG-Transparent-Image.png" },
           { nombre: "Gorra", precio: "15000", url: "https://static.vecteezy.com/system/resources/previews/008/847/346/original/isolated-black-cap-front-view-free-png.png" },
           { nombre: "Saco", precio: "50000", url: "https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf30.png" },
           { nombre: "Bermuda", precio: "10000", url: "https://cdn.coordiutil.com/imagen-bermuda_tipo_cargo_en_dril_regular_fit_five_forty-2315193-0-0-0-100.jpg" },
           { nombre: "Sudadera", precio: "20000", url: "https://www.playerasmark.com/app/assets/media/2017/10/sudadera.png" },
           { nombre: "Zapatos", precio: "3000", url: "https://static.vecteezy.com/system/resources/thumbnails/009/664/903/small/3d-render-sport-shoes-illustration-png.png" },
           { nombre: "Camisa", precio: "15000", url: "https://png.pngtree.com/png-clipart/20211116/original/pngtree-mens-shirts-clothes-cotton-fabrics-warm-wearing-brand-png-image_6933128.png" },
           { nombre: "Camiseta", precio: "15000", url: "https://upload.wikimedia.org/wikipedia/commons/6/60/CamisetaRojaTrans.png" },
           { nombre: "Chaqueta", precio: "40000", url: "https://www.pngplay.com/wp-content/uploads/4/Leather-Jacket-PNG-Images-HD.png" },
        ]   
    })
})