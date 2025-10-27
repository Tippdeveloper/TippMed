import { loginManager } from "../moduloGestor/LoginManager.js";
import { templateExtrato } from "../templates/templateExtrato.js";
export const router = (_rota)=> {
  const http = constantes.url;
  const token = localStorage.getItem("access_token");
  console.log(_rota)
    switch (_rota) {
        case 'Sair':
          $(".app").fadeOut(500, () => {
            loginManager();
            const app2Stile = document.querySelector("#app2");
            const gestor = document.querySelector("#gestor");
            gestor.style.display="block";
            app2Stile.style = `
            background: url(../img/fundogerente.jpg) no-repeat;
            background-position: top;`;
            $("#app2").fadeIn(300);
        });
          break;
        case 'Colaboradores':
          cadastraColaboradores(token,http)
          break;
        case 'Transações':
          transacoes(token,http);
          break;
        case 'Comissões':
          comissoes(token,http);
          break;
        case 'QRCode':
          qrcode(token,http)
        break;
        case 'Gerenciar Escalas':
          gerenciarEscalas(token,http)
        break;
        case 'Escala Colaboradores':
          escalaColab(token,http)
        break;
        case 'Extrato':
          templateExtrato(token,http)
        break;
        default:
          console.log('Rota não reconhecida${}');
      }
}