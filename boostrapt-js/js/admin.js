let usuarioSTG = JSON.parse(localStorage.getItem('usuario'))
let tBody = document.getElementById('tBody')
tBody.innerHTML = usuarioSTG.map(usuarioLocalSTG =>
`
<tr>
   <th scope="row">${usuarioLocalSTG.id}</th>
   <td>${usuarioLocalSTG.user}</td>
   <td>
      <button type="button" class="btn btn-primary">Modificar</button>
      <button type="button" class="btn btn-danger">Eliminar</button>
   </td>
  <td>${usuarioLocalSTG.role}</td>
</tr>
`
)

