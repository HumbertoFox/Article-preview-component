const selectIconShare = document.getElementById("icon-share");

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
        }, 2000);
    });
});