function checkReg(){
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value
    let checkPass = document.getElementById('checkPass').value
    let localSTG = JSON.parse(localStorage.getItem('usuario'))||[]

    const array = []
    
    if (user === '' || pass === '' || checkPass === '') {
        console.log('Formulario incompleto')
    }
    else {
        for (let i = 0; i < localSTG.length; i++) {
            const usuarioEnLocalSTG = localSTG[i];
            array.push(usuarioEnLocalSTG)
        }

        let userExist = localSTG.filter(local => local.user === user)
        console.log('userExist',userExist)

        if (userExist.length === 0){
            if (pass === checkPass){
            array.push({id: localSTG.length + 1,user,pass,role:'admin'})
            localStorage.setItem('usuario',JSON.stringify(array))
            console.log(array)            
            }
            else {
                alert('Las contraseñass no coinciden')
            }
        }
        if (userExist.length !== 0){
            alert('Nombre de usuario no disponible')
        }
        
    }
}
