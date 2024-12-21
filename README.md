<h1>Autenticação de Usuários</h1>
<h3>Este projeto é uma API simples para cadastro, autenticação e listagem de usuários. Ele utiliza tecnologias modernas para fornecer uma base sólida para aplicações que exigem autenticação e controle de acesso.</h3>


<h2>Funcionalidades</h2>

<p>Cadastro de usuários com validação de dados.</p>
<p>Autenticação de usuários com geração de token JWT.</p>
<p>Listagem de usuários (rota protegida).</p>

  
<h2>Tecnologias Utilizadas</h2>

<p>Node.js: Plataforma para desenvolvimento backend.</p>
<p>Express: Framework web para Node.js.</p>
<p>Prisma: ORM</p>
<p>Banco de dados: Mongo DB</p>
<p>JWT (JSON Web Token): Para autenticação e autorização.</p>
<p>Postman: Ferramenta para testes de API.</p>

<h2>Crie um .ENV e coloque isso dentro dele.</h2>

<p>DATABASE_URL="mongodb+srv://-USUARIO-:-SENHA-@-CLUSTER-.mongodb.net/-NOME_DO_BANCO-?retryWrites=true&w=majority&appName=-NOME_DA_APLICACAO-"</p>

<p>JWT_SECRET="-CHAVE_SECRETA-"</p>

#
<p>Explicacao de cada parte do DATABASE_URL</p>

<p>USUARIO: Substitua por seu nome de usuário do MongoDB.</p>

<p>SENHA: Substitua pela senha correspondente ao usuário no MongoDB.</p>

<p>CLUSTER: Nome do cluster que está configurado no MongoDB Atlas.</p>

<p>NOME_DO_BANCO: Nome do banco de dados que você deseja acessar ou criar.</p>

<p>NOME_DA_APLICACAO: Opcional, serve para identificar o nome da aplicação conectada.</p>

#
<h5>Gerar JWT_SECRET no Node.js:</h5>

<p>Execute o comando abaixo no Node.js para gerar uma chave:</p>
<p>require('crypto').randomBytes(64).toString('hex');</p>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a MIT License. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme necessário.</p>
