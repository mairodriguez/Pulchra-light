const registroForm = document.querySelector('.registroForm')
registroForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const nombre = document.querySelector(".nombre").value;
    const apellidos = document.querySelector(".apellido").value;
    const email = document.querySelector(".email").value;
    const contrasena = document.querySelector(".contrasena").value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [] 
    const usuarioregistrado = usuarios.find(usuarios => usuarios.email === email)
    if(usuarioregistrado){
        return alert("el usuario está registrado")
    }
    usuarios.push({name:nombre, apellidos:apellidos, email:email , contraseña:contrasena})
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert("registro exitoso")
    window.location.href = "lamparas.html";
   
})
