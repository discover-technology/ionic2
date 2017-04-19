# Configuração do Ambiente
## Instalação Node.js
Para instalar o node, você pode acessar  http://nodejs.org e baixar o instalador para sua plataforma. A instalação é praticamente um next, next e finish.
Você pode confirmar a instalação digitando em um cmd:
```
node –v
```
Irá aparecer a versão do node instalada.
## Instalação Apache Cordova
Para instalar o cordova, volte ao cmd e digite: 
```
npm install –g cordova.
```

Você pode confirmar a instalação digitando em um cmd: 
```
cordova –v
```
Irá aparecer a versão do cordova instalada.
## Instalação Ionic
Para instalar o Ionic, volte ao cmd e digite:
```
npm install –g ionic.
```
Você pode confirmar a instalação digitando em um cmd: 
```
ionic –v
```
Irá aparecer a versão do ionic instalada.
# Estrutura do Projeto
- src -- Este diretórios terá o código da aplicação atual que será desenvolvida.
- hooks -- Esse diretório contem scripts que serão utilizados pelo Cordova durante o processo de building.
- node_modules -- Suporte a bibliotecas do ionic ficam aqui.
- resources -- Os ícones padrões e splash screens para android e ios são incluídos nesta pasta.
- plafforms -- Esse diretório contém os elementos específicos para cada plataforma que o aplicativo irá rodar.
- plug-ins -- Esse diretório contem os plug-ins do cordova.
# Rodando o Projeto Base
Faça download do projeto base e armazene em um diretório de fácil acesso.
Abra o cmd e execute o comando “cd” para navegar até o caminho em que salvou o projeto. 
```
cd C:\Users\meu.usuario\Documents\ionic\BaseProject
```
Estando na pasta do projeto, basta rodar o comando 
```
ionic serve
```
ele fará sua aplicação rodar no browser..

