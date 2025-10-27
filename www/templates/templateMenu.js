
export const templateMenu = () => {
    const dropDownColapsed = `
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    `;

    const menuTitulos = [
        {
            "item": "Colaboradores",
            "icon": `<i class="fa fa-users" aria-hidden="true"></i>`
        },
        {
            "item": "Comissões",
            "icon": `<i class="fa-solid fa-circle-dollar-to-slot"></i>`
        },
        {
            "item": "Transações",
            "icon": `<i class="fa fa-history" aria-hidden="true"></i>`
        },
        {
            "item": "Extrato",
            "icon": `<i class="fa-regular fa-rectangle-list"></i>`
        },
        {
            "item": "QRCode",
            "icon": `<i class="fa fa-qrcode" aria-hidden="true"></i>`
        },
        {
            "item": "Gerenciar Escalas",
            "icon": `<i class="fa-regular fa-calendar-days"></i>`
        },
        {
            "item": "Escala Colaboradores",
            "icon": `<i class="fa-solid fa-clipboard-user"></i>`
        },
        {
            "item": "Sair",
            "icon": `<i class="fa-solid fa-right-from-bracket"></i>`
        }
    ];
    let nomeGerente = localStorage.getItem("gerenteNome");
    let nomeEmpresa = localStorage.getItem("nomeMarca");
    let meusItens ="";
    const criaItens = menuTitulos.forEach((item, i) => {
        
        meusItens +=`<li class="nav-item menuClasse" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" id="${item.item}">
        <a class="nav-link linkExt" href="#">${item.icon} ${item.item}</a>
    </li>`;
    });

    const myTemplateMenu = `
    <div class="card">

                <div class="card-body">
                <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                <span class="empresa-nome"><i class="fa-regular fa-building"></i> <small>${nomeEmpresa}</small></span>
                            <h5 class="card-title">Olá, <span class="managerName">${nomeGerente}</span></h5>
                            ${dropDownColapsed}
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                ${meusItens}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    `;

    return myTemplateMenu;
}