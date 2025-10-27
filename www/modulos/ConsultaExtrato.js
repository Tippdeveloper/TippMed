
import { modalEspecial} from "../modulos/ModalEspecial.js";
// consulta o extrato do usuario no banco
let colunaExtrato = document.querySelector("#valorEntradas");
let totalReceber = document.querySelector("#totalReceber");
let nextPaymentDate = document.querySelector("#nextPaymentDate");
export const consultExtrato = (_token,_http,_ano,_modal) => {
    if(_modal == true) {
        modalEspecial(true,"Atualizando extrato")
    }   
    $.ajax({
        url: _http + "users/payments" + _ano,
        async: true,
        type: "GET",
        beforeSend: (xhr) => {
            xhr.setRequestHeader('Authorization', "Bearer " + _token)
        },
        data: {},
        success: function (result, status, xhr) {
            console.log(result.data);
            console.log(result)
            if (result.data.length == 0) {
                    modalEspecial(false,"Atualizando extrato");
                let colunaExtrato = document.querySelector("#valorEntradas");
                colunaExtrato.innerHTML = `<div class="col-12 text-center minMargem"><b>Não há entradas disponíveis</b></div>`;
                console.log("aqui chegou sem dados");
               // $("#meuLoading").fadeOut(300);
            }
            else {
                geraExtrato(result.data);
                modalEspecial(false);
               // $("#meuLoading").fadeOut(300);
            }


        },
        error: (xr, status, error) => {
            console.log("xr" + JSON.parse(xr), "xr" + status, error)
        }
    });
    nextPayment(_token,_http); 
}

// monta na tela os dados de extrato do usuario
const geraExtrato = (_dadosExt) => {
    
console.log(_dadosExt);
    //let oSaldo = 0;

    colunaExtrato.innerHTML = "";
    for (let i = 0; i < _dadosExt.length; i++) { 

        let newValor = parseFloat(_dadosExt[i].amount);

        
        let statusPagamento = filtraExtrato(_dadosExt[i].status);
        let corPagamento = filtraCor(_dadosExt[i].status);
        if(statusPagamento == "Pgt Efetuado"){
            colunaExtrato.innerHTML += `<div class="col estilo">${_dadosExt[i].payment_date.replace(/[-]/g, "/")}</div>
        <div class="col estilo"><div class="alinhaSaldo"><span>R$ ${newValor.toFixed(2).toString().replace(".", ",")}</span></div></div>
        <div class="col text-center text-uppercase ${corPagamento} status estilo">${statusPagamento}</div>`;
        } else if ( statusPagamento == "Não aprovado") {
            colunaExtrato.innerHTML += `<div class="col estilo">${_dadosExt[i].payment_date.replace(/[-]/g, "/")}</div>
        <div class="col estilo"><div class="alinhaSaldo"><span>R$ ${newValor.toFixed(2).toString().replace(".", ",")}</span></div></div>
        <div class="col text-center text-uppercase ${corPagamento} status estilo">${statusPagamento}</div>`;
        }
        else if ( statusPagamento == "cancelado") {
            colunaExtrato.innerHTML += `<div class="col estilo">${_dadosExt[i].payment_date.replace(/[-]/g, "/")}</div>
        <div class="col estilo"><div class="alinhaSaldo"><span>R$ ${newValor.toFixed(2).toString().replace(".", ",")}</span></div></div>
        <div class="col text-center text-uppercase ${corPagamento} status estilo">${statusPagamento}</div>`;
        }
        else {
            colunaExtrato.innerHTML += `<div class="col">${_dadosExt[i].payment_date.replace(/[-]/g, "/")}</div>
        
        <div class="col"><div class="alinhaSaldo"><span>R$ ${newValor.toFixed(2).toString().replace(".", ",")}</span></div></div>
        <div class="col text-center text-uppercase ${corPagamento} status">${statusPagamento}</div>`;
        }
        
        
        // if(i == _dadosExt.length -1){
        //     oSaldo = parseFloat(_dadosExt[i].amount);
        //     if (oSaldo.toFixed(2) < 9) {
        //         totalReceber.innerHTML = "0" + oSaldo.toFixed(2);
        //     } else {
        //         totalReceber.innerHTML = oSaldo.toFixed(2).replace(".", ",");
        //     }
        // }
        
    }

}
const nextPayment = (_token,_http)=> {
    
    $.ajax({
        url: _http + "users/next-payment",
        async: true,
        type: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + _token
        },
        data: {},
        success: function (result, status, xhr) {
            console.log(result)
           if(!result.data.balance) {
            nextPaymentDate.innerHTML = result.data.next_payment_date.replace(/[-]/g, "/");
           } else {
            totalReceber.innerHTML = result.data.balance.toFixed(2).toString().replace(/[.]/, ",");
            nextPaymentDate.innerHTML = result.data.next_payment_date.replace(/[-]/g, "/");
           }
                

        },
        error: (xr, status, error) => {
            console.log("xr" + JSON.parse(xr), "xr" + status, error)
        }
    });
}
function filtraCor (_key) {

    switch (_key) {
        case "approved":
            return "text-success font-weight-bold";
            break;
        case "created":
            return "text-primary font-weight-bold";
            break;
        case "pending":
            return "text-warning font-weight-bold";
            break;
        case "transferred":
            return "text-warning font-weight-bold";
            break;
        case "received":
            return "text-warning font-weight-bold";
            break;
            case "not approved":
                return "text-danger font-weight-bold";
                break;
            case "candeled":
                return "text-danger font-weight-bold";
            break;            
        default:
            return "text-danger font-weight-bold";
            break;
    }
} 
function  filtraExtrato (_key) {

    switch (_key) {
        case "approved":
            return "Pgt Efetuado";
            break;
            case "transferred":
            return "";
            case "received":
            return "Pendente";
            break;
        case "created":
            return "Em análise";
            break;
        case "pending":
            return "Pendente";
            break;
            case "not approved":
                return "Não aprovado";
                break;
            case "canceled":
            return "cancelado";
        break;
    
        default:
            return "";
            break;
    }
}