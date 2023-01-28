
var c=1

function  ocultar(){

  var icons = document.getElementById('navegacao')

  if (c%2==0) {

    icons.classList.add('esconder')
    icons.classList.remove('mostrar')


} 

else {

  icons.classList.remove('esconder')
  icons.classList.add('mostrar')

} 
c++
}

function trocar(x){

  

  var axolote= document.getElementById('axolote')
  var leao= document.getElementById('leao')

  switch (x){

    case 2:
      axolote.classList.add('ativo')
      axolote.classList.remove('desativo')

      leao.classList.add('desativo')
      leao.classList.remove('ativo')
      break

      case 3:
        window.alert('aaaaaaaaaaa')
        leao.classList.add('ativo')
        leao.classList.remove('desativo')

        axolote.classList.remove('ativo')
      axolote.classList.add('desativo')
      break

  }
}




