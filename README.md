# CRUD de Usuários - Uniube

Projeto completo de CRUD (Create, Read, Update, Delete) utilizando **React** no front-end, **Node.js + Express** no back-end e **MongoDB** como banco de dados.

---

## ✨ Descrição Geral

Este sistema permite o administrador cadastrar, visualizar, atualizar e excluir moradores de um condomínio, o Condomínio Uniube. Cada morador pode ter nome, email, endereço e imagem de perfil (enviada como arquivo), que é armazenada localmente e acessível via URL.

---

## 🖥️ Tecnologias Utilizadas

### Front-end
- ReactJS (Create React App)
- React Router DOM
- Axios
- CSS puro
- React Hot Toast

### Back-end
- Node.js
- Express
- Mongoose
- Multer (upload de imagem)
- dotenv
- cors

### Banco de Dados
- MongoDB Compass

---

## 🚀 Passos para Instalação e Execução

### Pré-requisitos
- Node.js instalado
- MongoDB rodando

### 1. Clonar o repositório
```bash
git clone https://github.com/moiseszip/crud-uniube.git
cd crud-uniube
```

### 2. Rodar o Back-end (pasta server)
```bash
cd server
npm install
node --watch ./index.js
```

### 3. Rodar o Front-end (pasta client)
```bash
cd client
npm install
npm start
```

## 📚 Descrição da API
Base URL
http://localhost:7000/api

Endpoints
🔹 GET /users
Retorna todos os usuários cadastrados.

🔹 GET /user/:id
Retorna um usuário pelo ID.

🔹 POST /user
Cria um novo usuário com imagem.
Formato multipart/form-data esperado:
```bash
{
  "name": "Fulano da Silva",
  "email": "fulano@email.com",
  "address": "Rua Brasil 123"
  "image": (arquivo de imagem)
}
```

🔹 PUT /update/user/:id
Atualiza os dados de um usuário.
Formato JSON:
```bash
{
  "name": "Nome Atualizado",
  "email": "novo@email.com"
}
```

🔹 DELETE /delete/user/:id
Remove um usuário do sistema.

## Estrutura do Projeto
```bash
crud-uniube/
├── client/       # Front-end React
│   ├── public/
│   └── src/
│       ├── addUser/
│       ├── getUser/
│       └── updateUser/
├── server/       # Back-end Node.js
│   ├── controller/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   └── uploads/
```

## 👨‍💻 Autor
Desenvolvido por Moisés – Projeto da disciplina de Linguagem de Programação para Internet 2 (Uniube).