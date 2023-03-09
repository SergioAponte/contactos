import contactos from './contactos.js'

let encontrar_nombre=[]

agregar.addEventListener('click',event=>{
          if (localStorage.getItem('datos')==null){
                    encontrar_nombre.push(nombre.value,apellido.value)
                    localStorage.setItem('data', JSON.stringify(encontrar_nombre))
          }else{
                    
          }
})
