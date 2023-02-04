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
  var capa = document.getElementById('capa')
  var axolote= document.getElementById('axolote')
  var leao= document.getElementById('leao')
  var panda= document.getElementById('panda')
  var cavalo= document.getElementById('cavalo')
  var coelho= document.getElementById('coelho')
  var aranha= document.getElementById('aranha')
  var abelha= document.getElementById('abelha')
  var arraia= document.getElementById('arraia')
  var coruja = document.getElementById('coruja')

  switch (x){
    case 0:
      capa.classList.add('ativo')
      capa.classList.remove('desativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')

      leao.classList.add('desativo')
      leao.classList.remove('ativo')

      panda.classList.add('desativo')
      panda.classList.remove('ativo')

      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')

      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')

      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')

      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')

      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')

      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break
  
    case 1:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('ativo')
      axolote.classList.remove('desativo')

      leao.classList.add('desativo')
      leao.classList.remove('ativo')

      panda.classList.add('desativo')
      panda.classList.remove('ativo')

      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')

      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')

      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')

      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')

      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')

      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 2:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
  
      leao.classList.add('ativo')
      leao.classList.remove('desativo')
  
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
  
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')

      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
  
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
  
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
  
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
  
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 3:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
    
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
    
      panda.classList.add('ativo')
      panda.classList.remove('desativo')
    
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')
    
      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
    
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
    
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
    
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
    
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 4:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
      
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
      
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
      
      cavalo.classList.add('ativo')
      cavalo.classList.remove('desativo')
      
      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
      
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
      
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
      
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
      
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 5:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
        
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
        
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
        
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')
        
      coelho.classList.add('ativo')
      coelho.classList.remove('desativo')
        
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
        
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
        
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
        
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 6:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
          
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
          
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
      
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')
      
      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
          
      aranha.classList.add('ativo')
      aranha.classList.remove('desativo')
          
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
          
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
        
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 7:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
            
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
            
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
            
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')
            
      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
            
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
            
      abelha.classList.add('ativo')
      abelha.classList.remove('desativo')
            
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
            
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break
        
    case 8:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
              
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
              
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
              
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')
              
      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
              
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
              
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
              
      arraia.classList.add('ativo')
      arraia.classList.remove('desativo')
              
      coruja.classList.add('desativo')
      coruja.classList.remove('ativo')
      break

    case 9:
      capa.classList.add('desativo')
      capa.classList.remove('ativo')

      axolote.classList.add('desativo')
      axolote.classList.remove('ativo')
                  
      leao.classList.add('desativo')
      leao.classList.remove('ativo')
                  
      panda.classList.add('desativo')
      panda.classList.remove('ativo')
                  
      cavalo.classList.add('desativo')
      cavalo.classList.remove('ativo')
                  
      coelho.classList.add('desativo')
      coelho.classList.remove('ativo')
                  
      aranha.classList.add('desativo')
      aranha.classList.remove('ativo')
                  
      abelha.classList.add('desativo')
      abelha.classList.remove('ativo')
                  
      arraia.classList.add('desativo')
      arraia.classList.remove('ativo')
                  
      coruja.classList.add('ativo')
      coruja.classList.remove('desativo')
      break
  } 
}