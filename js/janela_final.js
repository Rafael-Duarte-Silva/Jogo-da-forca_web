function janela_final(texto){
    document.getElementById("tema").style.visibility = "hidden";

    const janela_div = document.createElement('div');
    janela_div.setAttribute("id", "janela_div");
    janela_div.style.width = "60vh";
    janela_div.style.height = "10vh";
    janela_div.style.backgroundColor = "whitesmoke";
    janela_div.style.position = "fixed";
    janela_div.style.top = "2vh";
    janela_div.style.left = "75vh";
    janela_div.style.display = "flex";
    janela_div.style.justifyContent = "center";
    janela_div.style.alignItems = "center";
    janela_div.style.border = "0.4vh black solid";
    janela_div.style.borderRadius = "2vh";
    document.body.appendChild(janela_div);

    const janela_h1 = document.createElement('h1');
    janela_h1.innerText = texto;
    janela_h1.setAttribute("id", "janela_h1");
    janela_h1.style.fontSize = "5vh";
    document.getElementById("janela_div").appendChild(janela_h1);

    const janela_button = document.createElement('button');
    janela_button.setAttribute("id", "janela_button");
    janela_button.setAttribute("onclick", "recarregar()");
    janela_button.style.width = "8vh";
    janela_button.style.height = "7.5vh";
    janela_button.style.position = "absolute";
    janela_button.style.right = "5vh";
    janela_button.style.border = "0.6vh black solid";
    janela_button.style.borderRadius = "0.8vh";
    janela_button.style.display = "flex";
    janela_button.style.justifyContent = "center";
    janela_button.style.alignItems = "center";
    document.getElementById("janela_div").appendChild(janela_button);

    const janela_img = document.createElement('img');
    janela_img.setAttribute("id", "janela_img");
    janela_img.setAttribute("src", "imagens/icons/recarregar.png");
    janela_img.style.width = "110%";
    document.getElementById("janela_button").appendChild(janela_img);

    janela_div.animate([
      {opacity: "0"},
      {opacity: "0"},
    ], {
      duration: 30,
    });

    janela_div.animate([
      { top: '0vh', opacity: "0.1"},
      { top: '2vh', opacity: "1"},
    ], {
      duration: 420,
      delay: 30
    });
}

function recarregar(){
  location.reload();
}