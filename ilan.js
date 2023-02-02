let btn = document.getElementById('ilanbtn');
let ilan = document.getElementById('ilan');
let yazi = document.getElementById('baslik');
let paragraf = document.getElementById('parag');
let baslik = document.getElementById('baslikh1');
let aciklama = document.getElementById('yazip');
let save = document.getElementById('savebtn');
let resim = "";
let yuklenen = document.getElementById('myfile');
let kapat = document.getElementById('buttonclose');
let panel = document.getElementById('panel');
let div2resim = "";
let resim2 = "";




yuklenen.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        resim = reader.result;
        document.getElementById('resim').style.backgroundImage = `url(${resim})`;
    })
    reader.readAsDataURL(this.files[0]);
})

kapat.onclick = function(){
    ilan.style.visibility = "hidden";
    baslik.innerHTML = "";
    aciklama.innerHTML = "";
    yazi.value = "";
    paragraf.value = "";
    yuklenen.value = "";
}

btn.onclick = function(){
    ilan.style.visibility = "visible";
}


save.addEventListener("click", function() {

    var divolustur = document.createElement("div");
    divolustur.classList = "jskutu";
    const reader = new FileReader();
    reader.onload = function(e) {
      const image = document.createElement("img");
      image.src = e.target.result;
      image.alt = yuklenen.files[0].name;
      image.classList = "div2";
  
      const title = document.createElement("h1");
      title.textContent = yazi.value;
  
      const text = document.createElement("p");
      text.textContent = paragraf.value;
  
      divolustur.appendChild(image);
      divolustur.appendChild(title);
      divolustur.appendChild(text);
    };
    panel.appendChild(divolustur);
    reader.readAsDataURL(yuklenen.files[0]);
    baslik.innerHTML = yazi.value;
    aciklama.innerHTML = paragraf.value;
  });