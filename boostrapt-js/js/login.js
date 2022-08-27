
function log () {
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value
    let localSTG = JSON.parse(localStorage.getItem('usuario')) || []
    let userExist = localSTG.filter(local => local.user === user)

    if (userExist.length > 0) {
        if(userExist[0].pass === pass){
            setTimeout( ()=> {
            userExist[0].role === 'admin' 
            ?
            location.href= './homeAdmin.html'
            :
            location.href='./homeUser.html'
        },2000)
    }
}