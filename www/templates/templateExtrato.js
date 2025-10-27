import { templateMenu } from "./templateMenu.js";
import { constantes } from "../modulos/Constantes.js";
import { listarTransacoes } from "../moduloGestor/listarTransacoes.js";

export const templateExtrato = ()=> {
    const http = constantes.url;
    let token = localStorage.getItem("access_token");
    //listarColaboradores(token,http)
const meuMenu = `
<div class="container ">
${templateMenu()}
<div class="card cadastroColab">
<div class="card-header">
  <i class="fa fa-history" aria-hidden="true"></i> Extrato 
  <div class="botoesExtrato pdf bg-red"><i class="fa-solid fa-file-pdf"></i> Baixar PDF 
  </div>
  <div class="botoesExtrato excel "><i class="fa-solid fa-file-csv"></i> Baixar Excel </div>
</div>
<div class="card-header">
  <!-- <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="titulo-data">Mês</div>
        <select id="mesExtrato" class="form-select"></select>
      </div>
      <div class="col-4">
        <div class="titulo-data">Ano</div>
        <select id="anoExtrato" class="form-select"></select>
      </div>
    </div>
  </div>--!>
  <div class="container">
    <div class="row extrato-date">
        <div class="col-6">
        <i class="fa-regular fa-calendar"></i> Período :
        </div>
        <div class="col-6">
          <input id="dataSelect" type="month">
        </div>
    </div>
</div>
</div>

  </div>
  <div class="card-body">
  <div class="container-fluid" id="colabsList">
    </div>
  </div>

`;
let appBackground = document.querySelector("#app2");
appBackground.style.background = "white";


return meuMenu;

}
