class Camera {
    constructor(videoNode){
        this.videoNode = videoNode;
        this.stream = null;
        this.photo = null;
        console.log("Bob el constructor ha creado una camara");
    }

    encender(){
        if(navigator.mediaDevices){
            this.apagar();
            return navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    width: 300, 
                    height: 300,
                    facingMode: 'user'
                }
            }).then(stream => {
                this.videoNode.srcObject = stream;
                this.stream = stream;
                return true
            }).catch(err => {
                alert('No pues valio v****')
                console.log(err);
                return false
            });
        }else{
            alert("No cuentas con dispositvos multimedia")
            return false
        }
    }

    encenderBack(){
        if(navigator.mediaDevices){
            this.apagar();
            return navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    width: 300, 
                    height: 300,
                    facingMode: {
                        exact: 'environment'
                    }
                }
            }).then(stream => {
                this.videoNode.srcObject = stream;
                this.stream = stream;
                return true
            }).catch(err => {
                alert('No pues valio v****')
                console.log(err);
                return false
            });
        }else{
            alert("No cuentas con dispositvos multimedia")
            return false
        }
    }

    apagar(){
        if(this.videoNode){
            this.videoNode.pause();
            if(this.stream){
                this.stream.getTracks().forEach(track => {
                    track.stop();
                })
            }
        }
    }

    takePhoto(){
        let canvas = document.createElement('canvas');
        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);

        let context = canvas.getContext('2d');
        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);

        this.photo = context.canvas.toDataURL();

        canvas= null;
        context = null;

        this.videoNode.removeAttribute('src');
        this.videoNode.load()

        return this.photo
    }
}