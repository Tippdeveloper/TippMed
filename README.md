# 🩺 TippMed App

**TippMed App** é um aplicativo mobile voltado para médicos associados a clínicas, que oferece uma forma simples e segura de gerenciar pagamentos e informações profissionais.

O sistema faz parte da plataforma **TippMed**, uma solução completa para gestão de pagamentos e repasses médicos.

---

## 📱 Sobre o Aplicativo

O **TippMed App** foi desenvolvido especialmente para **médicos**, permitindo que cada profissional acompanhe seus ganhos, status de repasses e mantenha seus dados atualizados de forma prática.

Cada médico é previamente cadastrado por uma **clínica parceira** na plataforma TippMed. Após o cadastro, o profissional pode acessar o aplicativo, visualizar suas informações e configurar suas preferências de pagamento.

### ⚙️ Funcionalidades principais

- 👤 **Perfil do médico:**  
  Visualização e atualização de informações pessoais e profissionais.

- 🏥 **Listagem de clínicas associadas:**  
  O médico pode ver todas as clínicas com as quais possui vínculo.  
  **Endpoint:** `GET /professional/clinics`

- 💰 **Gestão de pagamentos:**  
  Acompanhar status de pagamentos e valores recebidos conforme os procedimentos acordados com cada clínica.

- 🔑 **Cadastro de chave PIX:**  
  O médico pode cadastrar ou atualizar sua chave PIX para recebimento de valores.  
  - **Listar chaves PIX:** `GET /professional/pix-keys`  
  - **Cadastrar chave PIX em uma clínica:** `POST /professional/clinics/{clinic_id}/pix-key`

---

## 🧩 Tecnologias Utilizadas

### **Frontend (App)**
- HTML5  
- CSS3  
- JavaScript  
- **Node.js**  
- **Apache Cordova** → Compilação para **Android** e **iOS**

### **Backend**
- **PHP 8+**  
- **Laravel Framework**  
- Banco de dados compatível (MySQL / MariaDB)

---

## 🚀 Compilação e Execução

### 🔧 Requisitos
- Node.js v18+  
- Cordova CLI instalada globalmente  
- PHP 8+  
- Composer  
- Servidor Laravel configurado

### 💻 Executando o app
```bash
# Instalar dependências
npm install

# Compilar app para Android
cordova build android

# Compilar app para iOS
cordova build ios
