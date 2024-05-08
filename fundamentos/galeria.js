function agregaImagen(){
    var url=document.getElementById("imagenURL").value;
    var pie=document.getElementById("pieFoto").value;
    if(url && pie){
        var galeria=document.getElementById("galeriaImagenes");
        var div=document.createElement("div");
        var img=document.createElement("img");
        var p=document.createElement("p");

        img.src=url;
        img.width=250;
        img.height=200;
        p.textContent=pie;
        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);

        document.getElementById("imagenURL").value = "";
        document.getElementById("pieFoto").value = "";
        
    }else{
        alert("Por favor, introduce imagen y pie ");
    }
}