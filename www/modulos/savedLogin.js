export const savedLogin = ()=>{
    //verifica sem lebrarMeGerente está ativa
    const lebrarMeGerente = localStorage.getItem("lembrarMeGerente");
    const userAdmin = document.querySelector("#userAdmin");
    const passAdmin = document.querySelector("#passAdmin");
    const lembrarMe = document.querySelector(".rememberGerente");
    if(lebrarMeGerente){
        
        userAdmin.value = localStorage.getItem("usuarioGerente");
        passAdmin.value = localStorage.getItem("passwordGerente");
        lembrarMe.checked = lebrarMeGerente;
        
    }else {
        userAdmin.value = "";
        passAdmin.value = "";
        lembrarMe.checked = lebrarMeGerente;
        
    }
}