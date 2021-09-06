var secao = document.querySelector("section.produto");
secao.addEventListener("mouseover", trocarImagem());

function trocarImagem() {
    var imageElement = document.querySelector("img#image");                 // Rotação //

    console.log(imageElement);
    imageElement.style.transition = "all 2s";
    imageElement.style.transform = "rotate(2deg)";
    
};


function alterarFoto1() {       
    document.querySelector("img#image").src="https://images.lojanike.com.br/500x500/produto/95874_750708_20190703174813.png";               // Alterar foto 1
    var desc = document.querySelector("h1.description");
    var price = document.querySelector("h1.price-apresentation");

    desc.innerHTML = "Air Max 97 - Preto";
    price.innerHTML = "799,99";
}

function alterarFoto2() {
    document.querySelector("img#image").src="https://images.lojanike.com.br/1024x1024/produto/59023_196372_20190603151231.png";            // Alterar foto 2
    var desc = document.querySelector("h1.description");
    var price = document.querySelector("h1.price-apresentation");

    desc.innerHTML = "Air Max 97 - Branco";
    price.innerHTML = "799,99";
}
