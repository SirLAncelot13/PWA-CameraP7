let sinPretexto = '/PWA-CameraP7/sw.js';
let url = window.location.href;

let play = $('#player')
let btnCamere = $('#btnCamera')
let btnCaBack = $('#btnBackCa')
let btnTakePh = $('#btnTakeOn')
let photoUser = $('#photoUser')

let tipo = ""

const CAMARA = new Camera(play[0]);

btnCamere.on('click', () => {
    console.log("Abrir camara frontal");

    CAMARA.encender().then(result => {
        if(!result){
            alert("Error al iniciar camara")
        }
    });

    tipo = "Frontal"
})

btnCaBack.on('click', () => {
    console.log("Abrir camara trasera");

    CAMARA.encenderBack().then(result => {
        if(!result){
            alert("Error al iniciar camara")
        }
    });

    tipo = "Trasera"
})

btnTakePh.on('click', () => {
    console.log("Tomar foto");

    CAMARA.apagar();
    //photoUser.attr('src', CAMARA.takePhoto());
    //var srcPhoto = CAMARA.takePhoto()

    let photoHtml = $(`<div class="col-sm-6" 
                        <div class="card" style="width: 300px;">
                            <img src="${CAMARA.takePhoto()}" width="300" height="300" id="photoUser">
                            <div class="card-body">
                                <p class="card-text">${tipo}</p>
                            </div>
                        </div>
                    </div>`);
    $("#divPhoto").append(photoHtml)
})

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        sinPretexto = '/sw.js';
    }

    navigator.serviceWorker.register(sinPretexto);
}