export const templateLoginGestor = ()=> { 
    const myTemplate = document.querySelector("#app2");
    myTemplate.innerHTML =`
<div class="container " id="section">
<div class="row">
    
    <div ><h2 class="nomeEmpresa">Acessar</h2></div>
    <input type="hidden" id="empresa">
    <form>
        <div class="col-12 form-group left-inner-addon">
            <i class="fa fa-user"></i>
            <input type="email" class="form-control" placeholder="Digite seu email" id="userAdmin">
        </div>

        <div class="col-12 form-group left-inner-addon passAreaManager">
            <i class="fa fa-lock "></i>
            <input type="password" class="form-control" placeholder="senha mínino 8 digitos" id="passAdmin">

        </div>
        <div class="col-12 form-group myLoginManager">
            <div class="form-control button-app-gestor text-center">Acessar</div>
            <div class="row row-cols-2">
                <div class="col  subMenu"><input type="checkbox" class="rememberGerente" id="rememberGerente"><label for="rememberGerente">Lembrar-me</label>
                </div>
                <div class="col subMenu" id="recoverPassGestor"></div>
            </div>

        </div>

</div>
</div>
`;
}