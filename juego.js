let si = document.getElementById("si");
let no = document.getElementById("no");
si.addEventListener("click", sii);
function sii(){
    alert("sabia que ibas a decir que si jeje");
}

no.addEventListener("mouseover", function (){
    cambiarPosicion()
})
no.addEventListener("onfocus", function (){
  cambiarPosicion()
})

const cambiarPosicion = () => {
  const newCoords = generarNuevasCoordenadas()
  no.style.top = newCoords.newTop+"px";
  no.style.left = newCoords.newLeft+"px";
}


const generarNuevasCoordenadas = () => {
  const newTop = Math.random()*300;
  const newLeft = Math.random()*300;
  if(newTop > 150 && newLeft > 150) {
    return { newTop , newLeft }
  }else{
    return generarNuevasCoordenadas()
  }
}