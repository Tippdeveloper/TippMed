//import { firstLogin } from "../modulos/FirstLogin.js";

import { templateLoginGestor } from "../templates/templateLogin.js";
import { constantes } from "../js/Constantes.js";
//import { templateColaboradores } from "../template/templateColaboradores.js";
//import { dadosGestor } from "./dadosGestor.js";
import { savedLogin } from "./savedLogin.js";

//import { cadastraColaboradores } from "../pages/cadastrarColaborador.js";

let lembrarMeGerente = false;

//criando chamada de login
export const loginManager = () => {
    const http = constantes.url;
    templateLoginGestor();
    /* lembrar-me gerente */
    //let lembrarMeGerente = false;
    if (localStorage.getItem("lembrarMeGerente") == "false" || localStorage.getItem("lembrarMe") == undefined) {
        lembrarMeGerente = false;
    } else {
        lembrarMeGerente = true;
    }
    let checkboxGerente = document.querySelector(".rememberGerente");
    checkboxGerente.addEventListener("click", (e) => {
        e.currentTarget.checked;
        lembrarMeGerente = e.currentTarget.checked;
        localStorage.setItem("lembrarMeGerente", lembrarMeGerente);
    });

    savedLogin();
    /*---------*/
    const login = (_dados, _http) => {
        //let meusDados = JSON.stringify(_dados);
        $("#meuLoading").fadeIn(300);
        $.ajax({
            url: _http + "professional/auth/login",
            type: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            data: JSON.stringify(_dados),
            async: true,
            success: (data) => {

                let response = data;
                lembrarMeGerente = checkboxGerente.checked;
                //feito login gera token
                localStorage.setItem("access_token", response.data.token);
                
                localStorage.setItem("lembrarMeGerente", lembrarMeGerente);
                let meuToken = response.data.access_token;
                //const hideButtonGestor = document.querySelector("#gestor").style.display ="none";
                dadosGestor(meuToken,http);
                $("#section").fadeOut(100, () => {
                    if (response.data.first_login == true) {
                        firstLogin(response.data);
                    } else {
                        $("#meuLoading").fadeOut(300);
                        $("#meuModal").fadeIn(500, () => {
                            
                            $("#app").css("display", "none");
                            
                            cadastraColaboradores(meuToken,http);
                            versao.style.display = "none";
                            $("#meuModal").fadeOut(500)
                            

                        });
                    }


                });

                
                console.log(response)
            },
            error: function (error) {
                $("#meuLoading").fadeOut(500, () => {
                    //alert(navigator.onLine)
                    alert(error.responseJSON.message);
                });
            }
        });
    }

    const buttonAppGestor = document.querySelector(".button-app-gestor");
    buttonAppGestor.addEventListener("click", () => {
        let userAdmin = document.querySelector("#userAdmin").value;
        let passAdmin = document.querySelector("#passAdmin").value;
        let dados = {
            "email": userAdmin,
            "password": passAdmin
        }
        login(dados,http);
    })
}