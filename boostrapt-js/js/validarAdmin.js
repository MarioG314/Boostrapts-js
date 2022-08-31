// iife

// funcion que se autoejecuta 

(
   function validarDato() {
      let id = localStorage.getItem('id')
      let localSTG = JSON.parse(localStorage.getItem('usuario')) || []
      let userExist = localSTG.filter(local => local.id === Number(id))
      
      if (id === null) {
         window.location.href = './login.html'
      }else if (userExist[0].role === 'user'){
         window.location.href = './homeUser.html'
      }
   }
)()