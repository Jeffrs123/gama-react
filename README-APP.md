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



&nbsp;

---

## [11.06 - INSTALANDO E CONFIGURANDO O REACT-ROUTER-DOM](https://xpcorp.gama.academy/aluno/aulas/36/83)



&nbsp;

---

## [11.07 - IMPORTANDO AS ROTAS NO COMPONENTE APP](https://xpcorp.gama.academy/aluno/aulas/36/84)



&nbsp;

---

## [11.08 - ORGANIZAÇÃO, BOAS-PRÁTICAS E COMPONENTES DE ESTILO](https://xpcorp.gama.academy/aluno/aulas/36/85)



&nbsp;

---

## [11.09 - SALVANDO DADOS NO STORAGE](https://xpcorp.gama.academy/aluno/aulas/36/86)



&nbsp;

---

## [11.10 - RENDERIZANDO REPOSITÓRIOS E PROGRAMAÇÃO DECLARATIVA](https://xpcorp.gama.academy/aluno/aulas/36/87)



&nbsp;

---

## [11.11 - LINK REACT-ROUTER-DOM](https://xpcorp.gama.academy/aluno/aulas/36/88)



&nbsp;

---

## [11.12 - TRATAMENTO DE ERROS E USEHISTORY](https://xpcorp.gama.academy/aluno/aulas/36/89)



&nbsp;

---

## [11.13 - CONDITIONAL RENDERING](https://xpcorp.gama.academy/aluno/aulas/36/90)



&nbsp;

---

## [11.14 - DAQUI PRA FRENTE E ENCERRAMENTO](https://xpcorp.gama.academy/aluno/aulas/36/91)



&nbsp;

---