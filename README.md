# 🚀 Backend Node.js

Este repositório contém a implementação do backend da aplicação. Siga os passos abaixo para configurar e executar o projeto corretamente.

## 📌 Requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [Docker](https://www.docker.com/) **ou** [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/) (opcional, mas recomendado)
- [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar a API

## 👥 Instalação

1. Clone este repositório:

   ```sh
   git clone https://github.com/danyllo-aniceto/investment-api.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:
   ```sh
   yarn install
   ```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente com base no `.env.example`:

   ```sh
   cp .env.example .env
   ```

   **Exemplo de `.env`**:

   ```sh
   PORT=4000
   NODE_ENV=development
   DATABASE_URL=postgres://BD_USERNAME:BD_PASSWORD@localhost:BD_PORT/BD_DATABASE

   BD_USERNAME=meu_usuario
   BD_PASSWORD=minha_senha
   BD_DATABASE=meu_banco
   BD_PORT=5432
   ```

## 🛄 Banco de Dados

### Opção 1: Usando Docker

Se preferir usar um container Docker para o PostgreSQL, execute:

```sh
docker-compose up -d
```

Isso iniciará um container PostgreSQL com as configurações definidas no `docker-compose.yml`.

### Opção 2: Usando PostgreSQL instalado localmente

Caso já tenha o PostgreSQL instalado em sua máquina, crie um banco de dados com as credenciais definidas no `.env`.

### Executando as migrations

Após subir o Docker ou configurar o PostgreSQL, execute a migration do banco de dados com o Prisma:

```sh
yarn prisma migrate dev
```

Caso utilize npm:

```sh
npm run prisma migrate dev
```

## ▶️ Executando o Projeto

Para iniciar a aplicação em modo de desenvolvimento, execute:

```sh
yarn dev
```

A API estará rodando em `http://localhost:4000` (ou na porta definida no `.env`).

## 📩 Testando a API

Você pode testar os endpoints da API utilizando:

- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

## 💜 ORM Prisma

Este projeto utiliza o ORM [Prisma](https://www.prisma.io/) para interação com o banco de dados. Certifique-se de executar as migrations após configurar o banco de dados.

## 🐟 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e contribuir! 🎉
