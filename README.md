# Frontend Mentor - Article preview component solution

Esta é uma solução para o [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.

<div align="center">

  <img src="https://github.com/HumbertoFox/repository/assets/126817628/bddff155-9de9-4a2a-94fd-4c2480e867b3" width="400px"/>

</div>

### O que aprendi

```Js
selectIconShare.addEventListener("mouseenter", () => {
    const selectDivFooter = document.getElementById("div-footer");
    const selectDivPerfil = document.querySelector(".div-perfil");

    selectDivFooter.style.display = "flex";
    selectIconShare.classList.add("active");
    selectIconShare.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
    selectDivPerfil.classList.add("perfil-disabled");

    selectIconShare.addEventListener("mouseout", () => {
        setTimeout(() => {
            selectDivFooter.style.display = "none";
            selectIconShare.classList.remove("active");
            selectIconShare.style.backgroundColor = "var(--Light-Grayish-Blue)";
            selectDivPerfil.classList.remove("perfil-disabled");
        }, 3000);
    });
});
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
