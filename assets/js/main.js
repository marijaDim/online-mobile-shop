

function vracamNizArtikala() {
  return [
    {
      id: 1,
      marka: "HUAWEI",
      model: "P10 LITE BLACK DS",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/huaweiP10.jpg",
        alt: "huaweiP10",
      },
      kolicina: 22,
      cena: 29999,
      specifikacije: {
        ekran: 5.2,
        procesor: "Octa-Core",
        RAM: "3GB",
        operativniSistem: "Android OS, v7.0 (Nougat)",
        kamera: {
          prednja: "12 MP",
          zadnja: "8MP",
        },
      },
      popust: 30,
    },
    {
      id: 2,
      marka: "HUAWEI",
      model: "P8 LITE WHITE",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/huaweiP8.jpg",
        alt: "huaweiP8",
      },
      kolicina: 2,
      cena: 19999,
      specifikacije: {
        ekran: 5,
        procesor: "Octa-Core",
        RAM: "2GB",
        operativniSistem: "Android OS, v5.0.2 (Lollipop)",
        kamera: {
          prednja: "5MP",
          zadnja: "13MP",
        },
      },
      popust: 15,
    },
    {
      id: 3,
      marka: "SAMSUNG",
      model: "Galaxy J3 J320 GOLD",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/samsungJ3.jpg",
        alt: "samsungJ3",
      },
      kolicina: 16,
      cena: 18999,
      specifikacije: {
        ekran: 5,
        procesor: "Quad-core ",
        RAM: "1.5GB",
        operativniSistem: "Android 5.1.1 (Lollipop)",
        kamera: {
          prednja: "5MP",
          zadnja: "8MP",
        },
      },
      popust: 0,
    },
    {
      id: 4,
      marka: "HUAWEI",
      model: "Y3 II WH",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/huaweiY3.jpg",
        alt: "huaweiY3",
      },
      kolicina: 8,
      cena: 12990,
      specifikacije: {
        ekran: 4.5,
        procesor: "Quad-core",
        RAM: "1GB",
        operativniSistem: "Android OS, v5.1 (Lollipop)",
        kamera: {
          prednja: "2MP",
          zadnja: "5MP",
        },
      },
      popust: 0,
    },
    {
      id: 5,
      marka: "SAMSUNG",
      model: "Galaxy J7",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/SasmungGalaxy.jpg",
        alt: "SasmungGalaxy",
      },
      kolicina: 2,
      cena: 29999,
      specifikacije: {
        ekran: 5.5,
        procesor: "Octa-Core",
        RAM: "3GB",
        operativniSistem: "Android OS, v7.0 (Nougat)",
        kamera: {
          prednja: "5MP",
          zadnja: "13MP",
        },
      },
      popust: 30,
    },
    {
      id: 6,
      marka: "SAMSUNG",
      model: "S8 G950F BLACK",
      tipProizvoda: "mobilni telefon",
      slika: {
        putanja: "assets/images/samsungS8.jpg",
        alt: "samsungS8",
      },
      kolicina: 22,
      cena: 29999,
      specifikacije: {
        ekran: 5.5,
        procesor: "Octa-Core",
        RAM: "4GB",
        operativniSistem: "Android OS, v7.0 (Nougat)",
        kamera: {
          prednja: "12MP",
          zadnja: "8MP",
        },
      },
      popust: 10,
    },
  ];
}


var flagSort=1;
const artikli=vracamNizArtikala();
console.log(artikli);
ispisiArtikle(artikli);

function ispisiArtikle(data){

  data=filterProizvoda(data);
  data=upisiCenu(data);
  data=sortirajArtikle(data);
  let ispis="";

  data.forEach(element => {
    ispis+= `<div class="blok">
    <img src="${element.slika.putanja}" alt="${element.slika.alt}" />
    <h3>${element.marka} - ${element.tipProizvoda} - ${element.model}</h3>
    <ul>
      <li>Ekran: ${element.specifikacije.ekran}</li>
      <li>RAM: ${element.specifikacije.RAM}</li>
      <li>Procesor: ${element.specifikacije.procesor}</li>
      <li>Operativni sistem: ${element.specifikacije.operativniSistem}</li>
      <li>Kamera:
        <ul>
          <li>Prednja kamera: ${element.specifikacije.kamera.prednja}</li>
          <li>Zadnja kamera: ${element.specifikacije.kamera.zadnja}</li>

        </ul>
      </li>

    </ul>
    <h4>${element.popust !=0? element.cena - Math.round((element.cena*element.popust)/100) :element.cena} RSD</h4>
    <a class="korpaText" href="#" data-id="${element.id}">DODAJ U KORPU</a>
  </div>`

  });
document.getElementById("artikli").innerHTML = ispis;

}

const dugmici=document.querySelectorAll(".korpaText");

dugmici.forEach(elem=>{
  elem.addEventListener("click",prikaziIDObjekta);
})

function prikaziIDObjekta(e){
  e.preventDefault();
  let element=this;

  let id=element.dataset.id;

  let pronadjeniArtikal=artikli.find(function(elem){
    if(elem.id ==id) return elem;
  })

  if(pronadjeniArtikal){
    console.log(pronadjeniArtikal);
  }else{
    console.log("nije pronadjen");
  }
}

const tbModel=document.getElementById("tbDeoModel");
tbModel.addEventListener("keyup", filterChanged);

function filterProizvoda(data){

  let unos=document.getElementById("tbDeoModel").value;
if(unos!= ""){
  let noviNiz=data.filter(function(element){
    if(element.model.toLocaleLowerCase().indexOf(unos.trim().toLowerCase()) !=-1 || element.marka.toLocaleLowerCase().indexOf(unos.trim().toLowerCase()) !=-1){
      return element;
    }})
    return noviNiz;
    }else{
return data;
    }
  }

// if(noviNiz.length==0){
//   document.getElementById("artikli").innerHTML="nema rezultata pretrage"
// }else{

//   ispisiArtikle(noviNiz);
// }



const sortD= document.getElementById("sortMarka");
sortD.addEventListener("click",function (){
  flagSort=2;
  filterChanged()
});

function sortirajArtikle(data){
  if(flagSort==2){
  data.sort(function(a,b){
    if(a.marka>b.marka) return 1;

    if(a.marka<b.marka) return -1;
    if(a.marka==b.marka) return 0;

  })
  return data;
}else{
  return data;
}
}


const slajder=document.getElementById("rnCena");
slajder.addEventListener("change",filterChanged);

function upisiCenu(data){
  let cena=document.getElementById("rnCena").value;
  document.getElementById("cenaIzbor").textContent=cena;
  let noviNiz=data.filter(elem=> elem.cena<=cena);
  return noviNiz;
}


function filterChanged(){
  ispisiArtikle(artikli);
}

















