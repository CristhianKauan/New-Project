

function  ocultar(){
  var c = 2
  var icons = document.getElementById('icons')
  if (c/2==1) {

   
    icons.classList.remove('mostrar')
    icons.classList.add('ocultar')
    
    c=c+1

} else {

    icons.classList.remove('ocultar')
    icons.classList.add('mostrar')

    c=c+1
    
}

}