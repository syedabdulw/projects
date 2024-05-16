const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("encendido-1.png") && $cambiarInterruptor.src.match("on-or.png")){
        $cambiarFoco.src = "apagado-1.png";
        $cambiarInterruptor.src =  "off-or.png";
    }else{
        $cambiarFoco.src = "encendido-1.png";
        $cambiarInterruptor.src = "on-or.png";
    }
}

$swith.addEventListener("click",cambiarImagenes)