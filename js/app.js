let sinPretexto = '/PWA-CameraP7/sw.js';
let url = window.location.href;

let play = $('#player')
let btnCamere = $('#btnCamera')
let btnCaBack = $('#btnBackCa')
let btnTakePh = $('#btnTakeOn')
let photoUser = $('#photoUser')

const CAMARA = new Camera(play[0]);

btnCamere.on('click', () => {
    console.log("Abrir camara frontal");

    CAMARA.encender().then(result => {
        if(!result){
            alert("Error al iniciar camara")
        }
    });

})

btnCaBack.on('click', () => {
    console.log("Abrir camara trasera");

    CAMARA.encenderBack().then(result => {
        if(!result){
            alert("Error al iniciar camara")
        }
    });
})

btnTakePh.on('click', () => {
    console.log("Tomar foto");

    CAMARA.apagar();
    photoUser.attr('src', CAMARA.takePhoto());
})

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        sinPretexto = '/sw.js';
    }

    navigator.serviceWorker.register(sinPretexto);
}