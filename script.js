
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

function trocar(){

  var axolote= documente.getElementById('axolote')
  var leao= documente.getElementById('leao')
  var panda= documente.getElementById('panda')
  var cavalo= documente.getElementById('cavalo')
  var coruja = documente.getElementById('coruja')
  var aranha = documente.getElementById('aranha')
  var abelha = documente.getElementById('abelha')
  var  arraia= documente.getElementById('arraia')
  var coelho= documente.getElementById('coelho')
  switch (x){

    case 2:
      axolote.classList.add('ativo')
      axolote.classList.remove('desativo')
      break

      case 3:
        window.alert('aaaaaaaaaaa')
        leao.classList.add('ativo')
        leao.classList.remove('desativo')
      break

      case 4:
        panda.classList.add('ativo')
        panda.classList.remove('desativo')
      break

      case 5:
        cavalo.classList.add('ativo')
        cavalo.classList.remove('desativo')
      break

      case 6:
        coelho.classList.add('ativo')
        coelho.classList.remove('desativo')
      break

      case 7:
        aranha.classList.add('ativo')
        aranha.classList.remove('desativo')
      break

      case 8:
        abelha.classList.add('ativo')
        abelha.classList.remove('desativo')
      break

      case 9:
        arraia.classList.add('ativo')
        arraia.classList.remove('desativo')
      break

      case 10:
        coruja.classList.add('ativo')
        coruja.classList.remove('desativo')
      break

  }
}




