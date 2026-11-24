# Atividade React - Componentes e Props

## Sobre o projeto

Projeto criado com Vite (template React) contendo os componentes `Header`, `Footer`, `Card` e `Lista`, usando props, Fragments e `.map()` com `key`.

## Reflexão

**Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React). Por que o Virtual DOM otimiza a performance?**

### Imperativa x Declarativa

Na abordagem **imperativa** (JavaScript puro), eu preciso dizer ao navegador **passo a passo como** fazer cada mudança na tela. Por exemplo: buscar o elemento com `document.getElementById`, criar um novo elemento com `createElement`, definir o texto e inserir no lugar certo com `appendChild`. Eu controlo cada detalhe da manipulação do DOM, e quanto maior a aplicação, mais difícil fica manter isso organizado.

Na abordagem **declarativa** (React), eu descrevo **o que** quero ver na tela de acordo com os dados (props e estado), e o React cuida de como atualizar o DOM. Por exemplo, no componente `Lista`, eu só digo "para cada item do array, mostre um `<li>`", e o React faz o resto. Se o array mudar, a tela se atualiza sozinha.

### Virtual DOM e performance

O **Virtual DOM** é uma cópia leve do DOM real, guardada na memória como objetos JavaScript. Quando algo muda, o React cria uma nova versão do Virtual DOM e **compara** com a anterior (processo chamado de *diffing*). Depois, atualiza no DOM real **somente o que realmente mudou**.

Isso otimiza a performance porque mexer no DOM real é uma operação cara para o navegador. Em vez de refazer a página inteira a cada alteração, o React faz apenas as mudanças necessárias, e isso torna a atualização mais rápida e eficiente.