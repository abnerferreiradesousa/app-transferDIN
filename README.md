<h1 align="center">🚀 Bem vindo ao projeto TransferDIN! 🚀</h1>

<h2>🥱 Introdução...</h2>

<p>Este repositório contém uma aplicação fullstack, dockerizada de um sistema de transferência semelhante ao de um banco, desenvolvidos usando a plataforma Typescript, React com Next.js e PostgresSQL.</p>

![alt text](https://raw.githubusercontent.com/abnerferreiradesousa/app-transferDIN/main/images/app.png)

<details>
<summary><strong> 🛠️ Tecnologias utilizadas 🧰 </strong></summary>

* <p>👉 TypeScript</p>

* <p>👉 PostgresSQL</p>

* <p>👉 Docker</p>

* <p>👉 JsonWebToken</p>

* <p>👉 TypeORM</p>

* <p>👉 Express.js</p>

* <p>👉 Node.js</p>

* <p>👉 Bcrypt</p>

* <p>👉 Next.js</p>

* <p>👉 Redux</p>

* <p>👉 SASS</p>

</details>

<details>
<summary><strong> Critérios do projeto </strong></summary>

## Backend

- ☑️ Qualquer pessoa deverá poder fazer parte da NG. Para isso, basta realizar o cadastro informando *username* e *password*.

- ☑️ Deve-se garantir que cada *username* seja único e composto por, pelo menos, 3 caracteres.

- ☑️ Deve-se garantir que a *password* seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser *hashada* ao ser armazenada no banco.

- ☑️ Durante o processo de cadastro de um novo usuário, sua respectiva conta deverá ser criada automaticamente na tabela **Accounts** com um *balance* de R$ 100,00. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado,  a tabela **Accounts** não deverá ser afetada.

- ☑️ Todo usuário deverá conseguir logar na aplicação informando *username* e *password.* Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido.

- ☑️ Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar seu próprio *balance* atual. Um usuário A não pode visualizar o *balance* de um usuário B, por exemplo.

- ☑️ Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um *cash-out* informando o *username* do usuário que sofrerá o *cash-in*), caso apresente *balance* suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo.
- ☑️ Toda nova transação bem-sucedida deverá ser registrada na tabela **Transactions**. Em casos de falhas transacionais, a tabela **Transactions** não deverá ser afetada.
- ☑️ Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (*cash-out* e *cash-in*) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela.
- ❌ Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por:
    - ❌ Data de realização da transação e/ou
        - ☑️ Transações de *cash-out;*
        - ☑️ Transações de *cash-in.*

## Frontend

- ☑️ Página para realizar o cadastro na NG informando *username* e *password.*
- ☑️ Página para realizar o login informando *username* e *password.*
- ☑️ Com o usuário logado, a página principal deve apresentar:
    - ☑️ *balance* atual do usuário;
    - ☑️ Seção voltada à realização de transferências para outros usuários NG a partir do *username* de quem sofrerá o *cash-in*;
    - ☑️ Tabela com os detalhes de todas as transações que o usuário participou;
    - ❌ Mecanismo para filtrar a tabela por data de transação e/ou transações do tipo *cash-in*/*cash-out*;
    - ☑️ Botão para realizar o *log-out.*

</details>


<h2>👨‍💻 Rodando o projeto👨‍💻</h2>

<details>
  
<summary><strong>Como rodar?</strong></summary>
  
1. Clone o repositório com o comando:
  - `git@github.com:abnerferreiradesousa/app-transferDIN.git`;
    - Entre na pasta do repositório:
      - `cd app-transferDIN`
2. Inicie a aplicação com o comando:
 - `docker-compose up -d --build`
   - *Obs: Este comando será responsável por criar três cointainers docker: um para container para o banco de dados, o segundo para o backend e o último para o frontend. Estarão rodando nas portas 5432, 3001 e 3000, respectivamente, garanta que essas portas estejam livres para uso.*
3. Depois é só acessar a seguinte URL: http://localhost:3000/
  - Caso queira testar a API via Postman, basta acessar o tópico <i>"Como usar cada rota?".</i>

  
</details>

<details>
  
<summary><strong>Como usar cada rota?</strong></summary>  
</br>
 
[Rotas Documentadas](https://github.com/abnerferreiradesousa/app-transferDIN/blob/main/NGCASH_API.md)
      
</details>

<h2>💥 Defafios que enfrentei... 🗡️</h2> 

* 🛡️ Dockerizar a aplicação.
* 🥊 Aprender o TypeORM do zero.
* ⚔️ Configuração do PostgreSQL.
* 💥 Como desenvolver o projeto.

<h2>Considerações finais... ✍️</h2>

<p>
 📚 Aprendi a analisar melhor os bugs, erros e problemas em geral e assim pude buscar soluções mais assertivas, de forma mais rápida e até mais concisas.
  Entendi também que devo me planejar melhor quanto ao que o frontend precisa para funcionar de forma integrada e eficiente, porque por vezes precisei alterar algo no backend que já estava construído para se adequar ao frontend.
</p>

