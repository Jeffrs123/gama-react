# CURSO


**Professor**:  Guilherme Ramos

**Profissão**: Dev Front-End

**Instituíção**: Dev Front-End @ Dok Despachante


&nbsp;

# MÓDULO 9 - REACT.JS

&nbsp;

## [11.01 - BOAS VINDAS](https://xpcorp.gama.academy/aluno/aulas/36/78)

### O QUE VAMOS VER DURANTE AS AULAS:

- Por que React?
- Preparando o ambiente
- Entendendo a arquitetura do React
- Primeiros passos e conceitos básicos
    - Componente
    - Propriedade
    - Estado
    - Hoocks
    - Usar os eventures
- Consumindo dados de uma API com axios
    - Criar aplicação que vai buscar um usuário do GITHUB
    - Retornar pra gente todos os repositórios que aquela pessoa tem
- Utilizando React Router para criar rotas
    - Uma página de pesquisa
    - Uma págica para exibir esssa listagem de repositórios
- Boas práticas: organização e estilo
- Entendendo, na prática, o poder da programação declarativa.


&nbsp;

---

## [11.02 - POR QUE REACT?](https://xpcorp.gama.academy/aluno/aulas/36/79)

### Porque o React? - **`O que é`**

- Lib para criação de interfaces;
- Utilizado para construção de SPA (Single Page Application);
- Podemos chamar de framework, devido ao seu ecossistema:
    - ReactJS
    - React Native
    - Redux
    - Webpack
    - Etc...
- Tudo fica dentro do JavaScript (elementos visuais, lógica e estilo)

&nbsp;

### Porque o React? - **`Vantagens`**

- Organização do código
    - Dividir nosso app/código em blocos específicos;
    - O funcionamento de um componente não interfere em outro;
    - Se um componente é removido, o resto continua funcionando.

- Divisão de responsabilidades
    - Back-end: Regras de negócio
    - Interface

- Programação declarativa
    - Dizemos ao código o que queremos, ele se encarrega do resto;

&nbsp;

---

Para o Guilherme colocando o React.JA de encontro ao Angular/Vue.JS:
- A comunidade do React é a mais ativa.
- Há coisas que quando usa-se o Vue, que precisa ser feito, pacotes específicos, ou alternativas de pacotes que já são muito bons pra React. 
- Muito fácil para construção de interfaces SPA.


---

## [11.03 - PREPARANDO O AMBIENTE](https://xpcorp.gama.academy/aluno/aulas/36/80)

### `PRÉ-REQUISITOS - PREPARAÇÃO`

- Instalar o Node
- Instalar o NPM
    - Gerenciador de pacotes pra Node.
    - Alternativo ao NPM poderíamos usar o yarm
    - npm install -g yarm
- Instalar IDE 
    - Visual Estudio Code
    - É um editor de texto
- Terminal
    - Cada sistema tem um padrão
    - Podemos usar o Hiper, é diferente, poderoso, também se integra ao SO

Para começar o desenvolvimento da forma mais fluída possível com o REACT, temos que ter alguns carinhas instalados. Porque o React.JS tem diversas configurações, que são complexas de fazer.
- Para usar o React
    - Tem que configurar WebPack
    - Babel
        - O que faz a transpilação do React, do código com jsx com s.., do JS moderno para o JS que vai ser compreendido pelo browser
    - Dai já usamos a própria ferramenta que o facebook desenvolveu "create-react-app"
- **`cdm:`** 
    - npx create-react-app gamagit
    - npx ao invés de npm, pq npx é um comando alternativo pra Node.
    - É como se estivesse executando um comando de uma fonte externa.
    - Só que sem ter essa fonte instalada.

Caminho de criação do Projeto

    cd ~/Documentos/HiringCoders/VIDEOS_MODULOS/Módulo-11_REACT/Project


&nbsp;

---

## GIT: "PRÉ REQUISITOS"

---

&nbsp;

---

## [11.04 - FUNDAMENTOS DO REACT](https://xpcorp.gama.academy/aluno/aulas/36/81)

1. Objetivos da aula
    - Vamos entender a estrutura do React.JS
    - Como o React.JS funciona
    - Qual a sua estrutura
    - E o que foi instalado ao termos dado o comando:
        - `npx create-react-app gamagit`


O que vemos de uma aplicação em React.JS aparece na tela por renderizações. Quer dizer que o JavaScript do React pega um código HTML que escrevemos dentro do **.js* e o insere ao HTML. Isso é chamado de `COMPONETIZAÇÃO`.

Quer dizer, que no React criamos componentes, e eles são renderizados dentro no html no browser.

O que colocamos no arquivo **`"App.js"`** não é um bloco de códigos de estrutura (**`HTML`**), porque não tem como colocar html dentro de JavaScritp, na verdade, nesse contexto ele é chamado de **`JSX`** - `um html dentro do JS`.

&nbsp;

* NO CONTEXTO DE REACT
    Estaremos falando de **`JSX`** sempre que vermos
    - HTML
    - Dentro de uma função

&nbsp;

### PROSSEGUINDO

Acima é o básico do que precisamos saber sobre como o React funciona.
- Não iremos mais mexer na parte de renderização, porque isso seria motivo de ser assunto/estudo para coisas mais avançadas.
- Vamos entender:
    - Como faremos nossos componentes;
    - Como criar nossa aplicação, através dessa ferramenta pronta pra nós;

---

### O QUE VAMOS DESENVOLVER || FORMULÁRIO

- Campo de texto
    - Receberá o usuário do GITHUB
    - Do qual buscará os respositórios

- Botão, pra dar um submit nesse formulário

 
**`OBSERVAÇÃO:`** As tags com auto-fechamento como "img" ou "input" pode ser que no html seja opcional, todavia, aqui é obrigatório.

Como a propriedade **`"class"`** é uma palavra reservada, e como o JSX está dentro do JavaScritp, usar "class" pode dar "bug's" no futuro. Então no React usamos o **`"className"`**



---
&nbsp;

### COISAS QUE ACHEI INTERESSANTE

1. O **`service worker`** já vem preparado para uso, sem a necessidade de configurar.
2. **`Manifest`** igual ao SW.
3. E o arquivo **`robots.txt`** também.

Para uso deles, é apenas ver onde estão chamados, e fazer os ajustes mínimos.

&nbsp;

---
## CONCEITO DE PROPRIEDADE
---

### **`COISAS BÁSICAS SOBRE A COMPONETIZAÇÃO`**

1. Tudo dentro do React é componetizado, tudo é componente.
2. Todo componente tem um estado interno
    - Que vai definir todo o estado dele, variáveis, etc.
    - Ele vai receber propriedades.
        - Propriedades são como os atributos do HTML
        - Exemplo o `placeholder` no html é chamado como atributo, aqui chamaremos de propriedades.
        - outras propriedades: name, className, id, placeholder.
3. Todo componente recebe um parâmetro chamado props (de propriedades)

Sendo o nosso objetivo "retornar" mais uma tag-JSX deveremos encapsular elas dentro de algum elemento.

    function App(props) {
        return (
            <div>
                <h1>{ props.title } </h1>
                <input placeholder="usuário" name="usuario" id="usuario" className="usuarioInput" />
            </div>
        );
    }

Todavia, no caso acima, retornamos uma div, e se não quisermos que ela seja renderizada, e sim apenas as outras duas h1 e inpu, só encapsular o conteúdo dentro de fragmentos, tags vazias. exemplo:


    function App(props) {
        return (
            <>
                <h1>{ props.title } </h1>
                <input placeholder="usuário" name="usuario" id="usuario" className="usuarioInput" />
            </>
        );
    }



&nbsp;

### **`FRAGMENT: FRAGMENTOS`**

&nbsp;

### **`<>`**
### **`...`**

&nbsp;
### **`<p>`**

Sempre que quiser conter vários elementos para serem retornados dentro de outra tag, e esses elementos não queremos que seja retornado dentro de uma tag específica,
podemos retornar dentro de um fragmento **`fragment `**:**` <> ... </>`**.
### **`</p>`**

### **`<input>`**
<!-- ### **`<> ... </>`** -->
Digite sua dúvida aqui
### **`</input>`**

&nbsp;
### **`...`**
### **`</>`**



&nbsp;

---
## CONCEITO DE ESTADO - HOOKS
---

Todas aplicações possuem estados

- Aplicativo de linguas:
    - Estado do usuário que está logado;
    - Estado da pontuação;
    - Estado do andamento do aluno, em qual módulo ele está;

No **`react`** para definir estados usamos os **`hooks`**.

- **`useState`**
    - Esse hook permite setar estados, e modificar estados.
    - Não somente define um estado, retorna um array.
        - Primeira posição retorna um usuário.
        - Na segunda posição retorna uma função que vai ser usada para setar esse valor.
        - [ usuario, setUsuario ]
        - Quando estudarmos os componentes controlados, `voltaremos nesse assunto para abortar sobre como mudar o valor do estado`.

---
## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`Funcionamento do React.JS`**
- **`Componetização`**
    - O que são componentes.
- **`Propriedades`**
- **`Estados`**
    - **`hooks`**
        - Meios de realizar tarefas de forma mais simplificada, que alcançamos nesse contexto "react".
    - hook: **`useState`**

---

## GIT: 

git commit -m  "APRESENTAÇÃO - JXS - SW - MANIFAST - ROBOTS.TXT, COMPONETIZAÇÃO, PROPRIEDADES VS ATRIBUTOS HTML - FRAGMENTOS, ESTADOS - HOOKS"


---

&nbsp;

## [11.05 - CONSUMINDO DADOS DE UMA API](https://xpcorp.gama.academy/aluno/aulas/36/82)

## 1 - Setar `valores do usuário`

### O que são **`componentes controlados`**?

O estado, sempre deve ser fonte principal de dados, de preferência `o estado deve ser a única de fonte de dados do seu aplicativo`.

Chamativa de eventos no React
camelCase - onChange
onChange - Capturar qualquer alteração dentro do input e jogar na variavel do usuario. E pegar o valor do usuario e o jogar como valor do input.

    const [ usuario, setUsuario ] = useState('');

    return (
        <>
        <h1> { usuario } </h1>
        <input 
            className="usuarioInput" 
            placeholder="Usuário." 
            value={usuario}      
            onChange={e => {
                console.log(e.target.value); 
                setUsuario(e.target.value);
            }} 
        /> 

        <br />
        
        <button type="button">Pesquisar</button>
        </>
    );

OBS: Essa situação devem ser feito com inputs, textarea, selects. Elementos que armazem algum tipo de estado interno.

---

## 2 - `Buscar o usuário no GITHUB`

1. Colocar função dentro do botão pesquisar.

    - onClick={handlePesquisa}

    - pesquisar o usuário na API do GITHUB para retornar seus repositórios

    - Vamos usar o Axis. 
        - Poderíamos usar o JS Vanilla, JQuery.
        - O Axis sempre retorna promises, e para usar é facil.
        - importar na app
        - atualizar a função que usará ele

            `

                const urlUserRepo = `https://api.github.com/users/${usuario}/repos`;

                function handlePesquisa() {
                    axios
                    .get(urlUserRepo)
                    .then(r => console.log("r", r.data))
                    .catch(error => console.log(`O usuário ${usuario} ou NÃO EXISTE ou o nome está errado.`))
                    ;
                }
            `

2. Como usar pacote dentro do REACT - Instalar e usar

    Assim, como existem várias bibliotecas em JS para agilizar o nosso trabalho.
    Chamamos de pacotes.
    Para fazer uso, utilizamos o terminal para instalar.
    Eles são salvos na pasta do "node_modules".
    Assim, sempre que atulizarmos a aplicação, e se tiver alguma alteração em tal pacote, ela ocorrerá no node_module.

    - INSTALAR
        - npm install <nome-do-pacote>

    - USAR
        - import axios from 'axios';
        - Diferente de: import axios from './axios';
            - com o uso de ./ o app busca arquivo na mesma pasta. 
            - No caso queremos o pacote axios que foi salvo no node_modules.

3. API do GITHUB
    - https://api.github.com/users/{usuarioGitHub}
        - Ex: https://api.github.com/users/Jeffrs123

    -   {
            "login": "Jeffrs123",
            "id": 33886095,
            "node_id": "MDQ6VXNlcjMzODg2MDk1",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33886095?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Jeffrs123",
            "html_url": "https://github.com/Jeffrs123",
            "followers_url": "https://api.github.com/users/Jeffrs123/followers",
            "following_url": "https://api.github.com/users/Jeffrs123/following{/other_user}",
            "gists_url": "https://api.github.com/users/Jeffrs123/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Jeffrs123/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Jeffrs123/subscriptions",
            "organizations_url": "https://api.github.com/users/Jeffrs123/orgs",
            "repos_url": "https://api.github.com/users/Jeffrs123/repos",
            "events_url": "https://api.github.com/users/Jeffrs123/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Jeffrs123/received_events",
            "type": "User",
            "site_admin": false,
            "name": null,
            "company": null,
            "blog": "",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": null,
            "public_repos": 6,
            "public_gists": 0,
            "followers": 0,
            "following": 0,
            "created_at": "2017-11-22T03:05:11Z",
            "updated_at": "2020-05-10T18:01:27Z"
        }


---
## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`Componentes Controlado`**
    - value={usuario} onChange={e => setUsuario(e.target.value)} 
- **`Métodos`**
    - handlePesquisa
- **`Requisições`**
    - axios


---

## GIT: 

git commit -m  "BIND DE PROPRIEDADES _ COMPONENTES CONTROLADO- useState como única Fonte de Dados, PACOTES EXTERNOS _ AXIO - Instalação e Uso, AXIO - Cosumindo APIs e Promises de retorno, CONSUMO API _ MÉTODOS - handlePesquisa"


---

&nbsp;

---

## [11.06 - INSTALANDO E CONFIGURANDO O REACT-ROUTER-DOM](https://xpcorp.gama.academy/aluno/aulas/36/83)

Pelo escopo do projeto, ao retornar os repositórios do usário, exibí-los em outra página.

Criamos novo componente, e quando formos exportar vamos adotar um modelo diferente do 'App.js', o resultado é o mesmo.

De:

    import React from 'react';

    function Repositories() {
        return (
            <h1>Repositories</h1>
        )
    }

    export default Repositories;

Vamos usar:

    import React from 'react';

    export default function Repositories() {
        return (
            <h1>Repositories</h1>
        )
    }

---

Instalção do plugin que nos permitirá alternar entre páginas, sem a necessidade de recarregar todo o conteúdo da aplicação, com os arquivos de javascript e de estilo, carregando somente o conteúdo.

Ou seja, fazendo valer a intenção de que tenhamos uma SPA.

**`npm install react-router-dom`**


&nbsp;

---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`BrowserRouter`**
- **`Repositories`**
    - criação de component para renderizar os repositórios GIT
- **`router.js`**
    - Estrura base para alterações de rota da aplicação.


---

## GIT: 

git commit -m  "ROUTER - Estruturação para rotas SPA da aplicação"


---

&nbsp;

---

## [11.07 - IMPORTANDO AS ROTAS NO COMPONENTE APP](https://xpcorp.gama.academy/aluno/aulas/36/84)



---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`Terminar a configuração do arquivo de Rota`**
- **`Importar o arquivo de rotas dentro do app`**
- **`Boas práticas - Component APP`**
    - Deixar o Component APP como container principal da aplicação. E chamando as outras páginas, de acordo com a rota.


---

## GIT: 

git commit -m  "ROUTER - Configuração base finalizada"


---
&nbsp;

---

## [11.08 - ORGANIZAÇÃO, BOAS-PRÁTICAS E COMPONENTES DE ESTILO](https://xpcorp.gama.academy/aluno/aulas/36/85)

1. Re-estruturação da aplicação.
2. Estilização
    - Ou através de CSS
    - styled-components
        - npm install styled-components
        - Permite criar components de estilo
        - Ao invés de criar um component e estilizar ele através de um className ou id.
        - Já criamos um componente dentro dele
        - E só importar o componente dentro do nosso componente padrão.
    - styled - ANTES:

        <>
            <h1>Repositórios</h1>
            <ul>
                <li>Repositório 01</li>
            </ul>
        </>

    - styled - DEPOIS:

        <>
            <S.Title>Repositórios</S.Title>
            <S.List>
                <S.ListItem>Repositório 01</S.ListItem>
                <S.ListItem>Repositório 02</S.ListItem>
            </S.List>
        </>

---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`Styled Components`**
    - Componentes Estilos
    - Como criar esses componentes
    - Importá-los em nossos componentes
    - Importar CSS normal
---

## GIT: 

git commit -m  "COMPONENTES ESTILIZADOS - Styled-Components"


---

&nbsp;

---

## [11.09 - SALVANDO DADOS NO STORAGE](https://xpcorp.gama.academy/aluno/aulas/36/86)

1. Agora, vamos pegar o que vem da tela de pesquisa
2. Mandar pra tela de repositórios e Exibir os dados
    - Usaramos o storage do navegador

- **`STORAGE`** - É um armazenamento interno do navegador.
    - Podemos armazernar localmente;
    - Ou armazenar a sessão.

---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`Storage`**
    - Tratamento função handlePesquisa()
    - pegando os dados da API do GITHUB
    - Salvando apenas os nomes dentro de um array
    - E salvando os dados desse array no Storage do navegador.


---

## GIT: 

git commit -m  "STORAGE"


---

&nbsp;

---

## [11.10 - RENDERIZANDO REPOSITÓRIOS E PROGRAMAÇÃO DECLARATIVA](https://xpcorp.gama.academy/aluno/aulas/36/87)

- **`useHistory`** - Alternar a página
- **`Hook - useEffect`**
    - Monitora mudança em cima de uma variável.
    - Dispara função quando essa variável for alterada.
    - Nos colchetes informo quais variáveis quero monitorar.
    - Mas se quiser que o hook seja disparado logo de cara, é só deixar o array vazio.
    - Vamos usar ele, e a partir dele recuperar os valores do localStorage.

- Antigamente quando se usava **`Class Components`**
    - tinha os ciclos de vida.
        - Quando o componente era montado;
        - Quando o componente era renderizado;
        - Quando o componente ia ser destruído;
- depois que começamos a usar as functions,
    - agente não tem mais métodos (pq uma função não tem método)

- **`Dois tipos de declaração IMPERATIVA e DECLARATIVA`** - Alternar a página

    - **`IMPERATIVA`**
        - É aquela que vimos no curso de JavaScript;
        - Quando precisamos dizer tudo o que o computador precisa fazer;
        - Construir o innerHTMl, fazer isso, aquilo, falar pra renderizar enfim...

    - **`DECLARATIVA`**
        - Falar pro computador, o que se espera.
        - Ao inves de dizer, que é pra pegar o array, mapear ele, gerar os elementos html, inserir os elementos na página, inserir os valores;
        - Vamos dizer que se eu tiver algum elemento naquele array, que a aplicação imprima os elementos.


---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`CONCEITOS DE PROGRAMAÇÃO DECLARATIVA`**
    - Usandos dados do Storage do navegador.
    - E detalhe, para limpar ele.
- **`Novos Hooks`**
    - useHistory
    - useEffect


---

## GIT: 

git commit -m "HOOKS - useHistory e useEffect, RENDERIZANDO REPOSITÓRIOS, PROGRAMAÇÃO DECLARATIVA"

---


&nbsp;

---

## [11.11 - LINK REACT-ROUTER-DOM](https://xpcorp.gama.academy/aluno/aulas/36/88)


---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`LINKS`**
    - react-router-dom.
    - Transição de telas sem **`refresh`**.


---

## GIT: 

git commit -m "LINKS - Transição de telas sem refresh"

---

&nbsp;

---

## [11.12 - TRATAMENTO DE ERROS E USEHISTORY](https://xpcorp.gama.academy/aluno/aulas/36/89)


git commit -m "TRATAMENTO DE ERROS - JavaScript"

&nbsp;

---

## [11.13 - CONDITIONAL RENDERING](https://xpcorp.gama.academy/aluno/aulas/36/90)

Renderização Condicional.
O "se" mas usado com o operador ternário.


---

## FINALIZAR - REVISÃO

Nessa aula vimos:

- **`Tudo o que vimos até agora`**
    - react-router-dom.
    - Transição de telas sem **`refresh`**.


---

## GIT: 

git commit -m "CONDITIONAL RENDERING"

---


&nbsp;

---

## [11.14 - DAQUI PRA FRENTE E ENCERRAMENTO](https://xpcorp.gama.academy/aluno/aulas/36/91)



&nbsp;

---