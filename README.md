## NLW - rocketseat (IMPULSIONAR CARREIRAS DE PROGRAMAÇÃO) Cada evento é um portfólio SÓ ATÉ DOMINGO
 ### POR ISSO EU ESTUDO NELA

-- app e mobile

--- **NextJS**
---- Ta na documentação do react usar, indicação número 1
---- ligação com meu trabalho. Fast store sendo somente em nextjs e não em gatsbyJS.
---- Importação do componente de imagem do NextJS otimizado. Dentro do componente usa o import da imagem.

--- **EXPO (FRAMEWORK)**
---- NÃO PRECISA CONFIGURAR SDK DO MOBILE

--- WSL (subwindows do linux)

---- TSX automaticamente converte nsso cógido TS em JS
---- usar o watch no comando rápido no package.json

---- **SQLite** 
---- Configurado apenas com um arquivo

---- **Prisma** 
----- Ferramenta que intercepta a comunicação do back end com banco de dados. criando uam forma unificada pra do back end retirando a necessidade de ficar escrevendo as querys na mão.


----**tsconfig**
-----Não mexe

----**Componentes**
-----Componetização de apps

---- **props**
-----Passa os atributos no react por JS

---- **roteamento**
----- LIGADO AO NEXTJS
----- Vem nativamente no next (as rotas são as pastas)
----- Estrutura certa faz as rotas. cada pagina tem o nome da pasta e sempre é um arquivo **page.tsx** 

---- **mobile**
----- Não usa Pixel usa DP = Density Points
----- Não herda css de divs pais
----- CSS in JS
----- Instalar emuladores IOS e Android Studio

na doc está:
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

deve ficar:
  content: ["./App.tsx", "./app/**/*.tsx"],


### COMANDOS: 

**npm run dev** 
na pasta web / pasta server - roda o projeto em Next versão web. E na pasta server ao rodar isso temos a resposta no terminal do app.listen


**npm run start** 
na pasta mobile - roda o projeto em Expo/React Native  


**npx prisma migrate dev**
Comparado a um commit, é rodado a cada modificação do banco de dados. 
São arquivos que definem a estrutura e as alterações no esquema do banco de dados.

**npx prisma studio**
Live server do banco de dados do Prisma

**Tailwind**
só usar a documentação pra usar as classes

**npm i nativewind**
para o mobile

**npm i lucide-react**
Icones para o projeto WEB/React-TS


### server

http PUT <http://localhost:3333/memories/{id} content=oiiiiiiii coverUrl=https://github.com/diego3g.png>

http DELETE <http://localhost:3333/memories/{id}>