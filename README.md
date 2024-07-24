## TRYBESMITH

O projeto Trybesmith foi desenvolvido durante o curso de formação full-stack pela Trybe.

A aplicação consiste em uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma _API_, utilizando _Typescript_ e _Sequelize_.

Foram desenvolvidas as camadas de _Service_ e _Controllers_ da aplicação, utilizando _JWT_ para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação possui _endpoints_ que dão suporte a operações de criação, leitura e atualização de informações.

## REQUISITOS

- Node.js
- Docker/Docker Compose

<details>
<summary>🐳 Especificações sobre uso do Docker</summary>
<br>

- Clone o repositório (`git clone`) e instale as depedências com o comando `npm install`

> Após, rode os serviços `app-trybesmith` e `db` com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `trybesmith_api` e outro chamado `trybesmith_db`.
- A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.

  > Rode o comando `npm run db:reset` para criar o banco de dados, as tabelas que serão utilizadas e populá-las.

  > Use o comando `docker exec -it trybesmith_api bash` para entrar no container.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Para visualizar o logs do nodemon em seu terminal use os seguintes comandos:

  > `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`;

  > `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<details>
<summary>🖥️ Rodando testes</summary>
<br>
Para rodar os testes da aplicação localmente, utilize o seguinte comando:

```bash
npm run test:local
```

Para verificar a cobertura do código, utilize o seguinte comando:

```bash
npm run test:coverage
```
</details>

<details>
  <summary><strong>🎲 Tabelas</strong></summary>
<br>

O banco possui duas tabelas: pessoas usuárias (`users`) e produtos (`products`).

Toda a parte de criação do banco de dados, das tabelas, seeders e _models_ do sequelize já está pronta. Você pode verificar toda a configuração e associações nos arquivos dentro do diretório `src/database`.

</details>

## 📖 HABILIDADES TRABALHADAS 📖

- Desenvolvimento de API seguindo o padrão REST;
- Interação com banco de dados MySQL;
- Validação de dados recebidos pela API;
- _Type Assertion_;
- Autenticação utilizando JWT;
- Criação de testes para garantir correta implementação dos endpoints;

## IMPLEMENTAÇÕES REALIZADAS

- É possível ver o desenvolvimento passo-a-passo dos tópicos abaixo através do histórico de commits da aplicação

<details>
<summary><strong>Endpoint para o cadastro de produtos e respectivos testes</strong></summary>
<br>

- `POST /products`: Os produtos enviados são salvos na tabela `products` do banco de dados.

</details>

<details>
<summary><strong>Endpoint para a listagem de produtos e respectivos testes</strong></summary>
<br>

- `GET /products`: Retorna os produtos salvos na tabela `products` do banco de dados.

</details>

<details>
<summary><strong>Endpoint para a listagem de usuários e respectivos testes</strong></summary>
<br>

- `GET /users`: Retorna o nome de todas as pessoas usuárias e os `id`s dos seus respectivos produtos;
- Todos os produtos são itens artesanais, portanto, únicos. Por isso os produtos contêm os `id`s dos seus respectivos donos - que são pessoas usuárias.

</details>

<details>
<summary><strong>Endpoint para o login de usuários e respectivos testes</strong></summary>
<br>

- `POST /login`: Recebe os campos `username` e `password`, que são validados no banco de dados;
- Um token `JWT` é gerado e retornado caso haja sucesso no _login_, utilizando no _payload_ o `id` e `username`;
- A requisição enviada ao endpoint é validada, retornando um _status code_ e uma _message_ personalizada a depender do caso.

</details>

<details>
<summary><strong>Validações para a criação de produtos e respectivos testes</strong></summary>
<br>

- Validações referentes ao endpoint `POST /products`;

</details>

## ©️ DISCLAIMER

<div align="justify">
Com exceção das alterações destacadas acima no tópico "implementações realizadas", <b>TODOS OS DEMAIS ARQUIVOS</b> foram desenvolvidos e estão sob responsabilidade da TRYBE, incluindo, mas não se limitando ao: diagrama entidade-relacionamento do sistema, seeders, containers docker e organização dos demais diretórios da aplicação.
</div>
