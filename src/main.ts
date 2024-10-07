import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

interface Ar{
  alapAr: number;
  szinAr: number;
  motorAr: number;
  valtoAr: number;
  gumiAr: number;
  klima: number;
  radio: number;
  tCam: number;
  mHajtas: number;
  futheto: number;
}

document.addEventListener("DOMContentLoaded", () =>{
  const ccfeherButton = document.getElementById("ccfeherButton") as HTMLButtonElement;
  const ccbarnaButton = document.getElementById("ccbarnaButton") as HTMLButtonElement;
  const cckekButton = document.getElementById("cckekButton") as HTMLButtonElement;
  const ccfeketeButton = document.getElementById("ccfeketeButton") as HTMLButtonElement;
  const ccpirosButton = document.getElementById("ccpirosButton") as HTMLButtonElement;

  const cefeherButton = document.getElementById("cefeherButton") as HTMLButtonElement;
  const cebarnaButton = document.getElementById("cebarnaButton") as HTMLButtonElement;
  const cekekButton = document.getElementById("cekekButton") as HTMLButtonElement;
  const cefeketeButton = document.getElementById("cefeketeButton") as HTMLButtonElement;
  const cepirosButton = document.getElementById("cepirosButton") as HTMLButtonElement;

  const cpfeherButton = document.getElementById("cpfeherButton") as HTMLButtonElement;
  const cpbarnaButton = document.getElementById("cpbarnaButton") as HTMLButtonElement;
  const cpkekButton = document.getElementById("cpkekButton") as HTMLButtonElement;
  const cpfeketeButton = document.getElementById("cpfeketeButton") as HTMLButtonElement;
  const cppirosButton = document.getElementById("cppirosButton") as HTMLButtonElement;

  var ccar = document.getElementById("ccar") as HTMLParagraphElement;
  var cear = document.getElementById("cear") as HTMLParagraphElement;
  var cpar = document.getElementById("cpar") as HTMLParagraphElement;

  var ccAr: Ar = {
    alapAr: 16620000,
    szinAr: 0,
    motorAr: 0,
    valtoAr: 0,
    gumiAr: 0,
    klima: 0,
    radio: 0,
    tCam: 0,
    mHajtas: 0,
    futheto: 0
  }
  var ceAr: Ar = {
    alapAr: 18400000,
    szinAr: 0,
    motorAr: 0,
    valtoAr: 0,
    gumiAr: 0,
    klima: 0,
    radio: 0,
    tCam: 0,
    mHajtas: 0,
    futheto: 0
  }
  var cpAr: Ar = {
    alapAr: 20100000,
    szinAr: 0,
    motorAr: 0,
    valtoAr: 0,
    gumiAr: 0,
    klima: 0,
    radio: 0,
    tCam: 0,
    mHajtas: 0,
    futheto: 0
  }

  ccar.textContent = OsszAr(ccAr) + " Ft";
  cear.textContent = OsszAr(ceAr) + " Ft";
  cpar.textContent = OsszAr(cpAr) + " Ft";


  ccfeherButton?.addEventListener("click", ()=>{
    
    ccfeherButton?.classList.add("btn-outline-primary");
    ccbarnaButton?.classList.remove("btn-outline-primary");
    cckekButton?.classList.remove("btn-outline-primary");
    ccfeketeButton?.classList.remove("btn-outline-primary");
    ccpirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CC-img", "src/exterior-3_040.jpg");
    ccAr.szinAr = parseInt(ccfeherButton.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  ccbarnaButton?.addEventListener("click", ()=>{
    
    ccfeherButton?.classList.remove("btn-outline-primary");
    ccbarnaButton?.classList.add("btn-outline-primary");
    cckekButton?.classList.remove("btn-outline-primary");
    ccfeketeButton?.classList.remove("btn-outline-primary");
    ccpirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CC-img", "src/exterior-3_4Y6.jpg");
    ccAr.szinAr = parseInt(ccbarnaButton.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  cckekButton?.addEventListener("click", ()=>{ 
    
    ccfeherButton?.classList.remove("btn-outline-primary");
    ccbarnaButton?.classList.remove("btn-outline-primary");
    cckekButton?.classList.add("btn-outline-primary");
    ccfeketeButton?.classList.remove("btn-outline-primary");
    ccpirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CC-img", "src/exterior-3_8X8.jpg");
    ccAr.szinAr = parseInt(cckekButton.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  ccfeketeButton?.addEventListener("click", ()=>{
    
    ccfeherButton?.classList.remove("btn-outline-primary");
    ccbarnaButton?.classList.remove("btn-outline-primary");
    cckekButton?.classList.remove("btn-outline-primary");
    ccfeketeButton?.classList.add("btn-outline-primary");
    ccpirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CC-img", "src/exterior-3_218.jpg");
    ccAr.szinAr = parseInt(ccfeketeButton.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  ccpirosButton?.addEventListener("click", ()=>{
    
    ccfeherButton?.classList.remove("btn-outline-primary");
    ccbarnaButton?.classList.remove("btn-outline-primary");
    cckekButton?.classList.remove("btn-outline-primary");
    ccfeketeButton?.classList.remove("btn-outline-primary");
    ccpirosButton?.classList.add("btn-outline-primary");

    ChangeImage("CC-img", "src/exterior-3_3U9.jpg");
    ccAr.szinAr = parseInt(ccpirosButton.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccvalto = document.getElementById("CCvalto") as HTMLInputElement;
  ccvalto.addEventListener("change", () => {
    ccAr.valtoAr = parseInt(ccvalto.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccvalto2 = document.getElementById("CCvalto2") as HTMLInputElement;
  ccvalto2.addEventListener("change", () => {
    ccAr.valtoAr = parseInt(ccvalto2.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccmotor = document.getElementById("CCmotor") as HTMLInputElement;
  ccmotor.addEventListener("change", () => {
    ccAr.motorAr = parseInt(ccmotor.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccmotor2 = document.getElementById("CCmotor2") as HTMLInputElement;
  ccmotor2.addEventListener("change", () => {
    ccAr.motorAr = parseInt(ccmotor2.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccgumi = document.getElementById("CCgumi") as HTMLInputElement;
  ccgumi.addEventListener("change", () => {
    ccAr.gumiAr = parseInt(ccgumi.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccgumi2 = document.getElementById("CCgumi2") as HTMLInputElement;
  ccgumi2.addEventListener("change", () => {
    ccAr.gumiAr = parseInt(ccgumi2.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccgumi3 = document.getElementById("CCgumi3") as HTMLInputElement;
  ccgumi3.addEventListener("change", () => {
    ccAr.gumiAr = parseInt(ccgumi3.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccklima = document.getElementById("CCKlima") as HTMLInputElement;
  ccklima.addEventListener("change", () => {
    ccAr.klima = parseInt(ccklima.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var ccklima2 = document.getElementById("CCKlima2") as HTMLInputElement;
  ccklima2.addEventListener("change", () => {
    ccAr.klima = parseInt(ccklima2.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var cctcam = document.getElementById("CCTCam") as HTMLInputElement;
  cctcam.addEventListener("change", () => {
    ccAr.tCam = parseInt(cctcam.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });

  var cctcam2 = document.getElementById("CCTCam2") as HTMLInputElement;
  cctcam2.addEventListener("change", () => {
    ccAr.tCam = parseInt(cctcam2.value);
    ccar.textContent = OsszAr(ccAr) + " Ft";
  });
  
  cefeherButton?.addEventListener("click", ()=>{
      
    cefeherButton?.classList.add("btn-outline-primary");
    cebarnaButton?.classList.remove("btn-outline-primary");
    cekekButton?.classList.remove("btn-outline-primary");
    cefeketeButton?.classList.remove("btn-outline-primary");
    cepirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CE-img", "src/exterior-3_040.jpg");
    ceAr.szinAr = parseInt(cefeherButton.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  cebarnaButton?.addEventListener("click", ()=>{
    
    cefeherButton?.classList.remove("btn-outline-primary");
    cebarnaButton?.classList.add("btn-outline-primary");
    cekekButton?.classList.remove("btn-outline-primary");
    cefeketeButton?.classList.remove("btn-outline-primary");
    cepirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CE-img", "src/exterior-3_4Y6.jpg");
    ceAr.szinAr = parseInt(cebarnaButton.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  cekekButton?.addEventListener("click", ()=>{ 
    
    cefeherButton?.classList.remove("btn-outline-primary");
    cebarnaButton?.classList.remove("btn-outline-primary");
    cekekButton?.classList.add("btn-outline-primary");
    cefeketeButton?.classList.remove("btn-outline-primary");
    cepirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CE-img", "src/exterior-3_8X8.jpg");
    ceAr.szinAr = parseInt(cekekButton.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  cefeketeButton?.addEventListener("click", ()=>{
    
    cefeherButton?.classList.remove("btn-outline-primary");
    cebarnaButton?.classList.remove("btn-outline-primary");
    cekekButton?.classList.remove("btn-outline-primary");
    cefeketeButton?.classList.add("btn-outline-primary");
    cepirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CE-img", "src/exterior-3_218.jpg");
    ceAr.szinAr = parseInt(cefeketeButton.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  cepirosButton?.addEventListener("click", ()=>{
    
    cefeherButton?.classList.remove("btn-outline-primary");
    cebarnaButton?.classList.remove("btn-outline-primary");
    cekekButton?.classList.remove("btn-outline-primary");
    cefeketeButton?.classList.remove("btn-outline-primary");
    cepirosButton?.classList.add("btn-outline-primary");

    ChangeImage("CE-img", "src/exterior-3_3U9.jpg");
    ceAr.szinAr = parseInt(cepirosButton.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cevalto = document.getElementById("CEvalto") as HTMLInputElement;
  cevalto.addEventListener("change", () => {
    ceAr.valtoAr = parseInt(cevalto.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cevalto2 = document.getElementById("CEvalto2") as HTMLInputElement;
  cevalto2.addEventListener("change", () => {
    ceAr.valtoAr = parseInt(cevalto2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cemotor = document.getElementById("CEmotor") as HTMLInputElement;
  cemotor.addEventListener("change", () => {
    ceAr.motorAr = parseInt(cemotor.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cemotor2 = document.getElementById("CEmotor2") as HTMLInputElement;
  cemotor2.addEventListener("change", () => {
    ceAr.motorAr = parseInt(cemotor2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cegumi = document.getElementById("CEgumi") as HTMLInputElement;
  cegumi.addEventListener("change", () => {
    ceAr.gumiAr = parseInt(cegumi.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cegumi2 = document.getElementById("CEgumi2") as HTMLInputElement;
  cegumi2.addEventListener("change", () => {
    ceAr.gumiAr = parseInt(cegumi2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var ceklima = document.getElementById("CEKlima") as HTMLInputElement;
  ceklima.addEventListener("change", () => {
    ceAr.klima = parseInt(ceklima.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var ceklima2 = document.getElementById("CEKlima2") as HTMLInputElement;
  ceklima2.addEventListener("change", () => {
    ceAr.klima = parseInt(ceklima2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var ceradio = document.getElementById("CERadio") as HTMLInputElement;
  ceradio.addEventListener("change", () => {
    ceAr.radio = parseInt(ceradio.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var ceradio2 = document.getElementById("CERadio2") as HTMLInputElement;
  ceradio2.addEventListener("change", () => {
    ceAr.radio = parseInt(ceradio2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cetcam = document.getElementById("CETCam") as HTMLInputElement;
  cetcam.addEventListener("change", () => {
    ceAr.tCam = parseInt(cetcam.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cetcam2 = document.getElementById("CETCam2") as HTMLInputElement;
  cetcam2.addEventListener("change", () => {
    ceAr.tCam = parseInt(cetcam2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cefutheto = document.getElementById("CEFutheto") as HTMLInputElement;
  cefutheto.addEventListener("change", () => {
    ceAr.futheto = parseInt(cefutheto.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });

  var cefutheto2 = document.getElementById("CEFutheto2") as HTMLInputElement;
  cefutheto2.addEventListener("change", () => {
    ceAr.futheto = parseInt(cefutheto2.value);
    cear.textContent = OsszAr(ceAr) + " Ft";
  });
 
  cpfeherButton?.addEventListener("click", ()=>{
      
    cpfeherButton?.classList.add("btn-outline-primary");
    cpbarnaButton?.classList.remove("btn-outline-primary");
    cpkekButton?.classList.remove("btn-outline-primary");
    cpfeketeButton?.classList.remove("btn-outline-primary");
    cppirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CP-img", "src/exterior-3_040.jpg");
    cpAr.szinAr = parseInt(cpfeherButton.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  cpbarnaButton?.addEventListener("click", ()=>{
    
    cpfeherButton?.classList.remove("btn-outline-primary");
    cpbarnaButton?.classList.add("btn-outline-primary");
    cpkekButton?.classList.remove("btn-outline-primary");
    cpfeketeButton?.classList.remove("btn-outline-primary");
    cppirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CP-img", "src/exterior-3_4Y6.jpg");
    cpAr.szinAr = parseInt(cpbarnaButton.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  cpkekButton?.addEventListener("click", ()=>{ 
    
    cpfeherButton?.classList.remove("btn-outline-primary");
    cpbarnaButton?.classList.remove("btn-outline-primary");
    cpkekButton?.classList.add("btn-outline-primary");
    cpfeketeButton?.classList.remove("btn-outline-primary");
    cppirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CP-img", "src/exterior-3_8X8.jpg");
    cpAr.szinAr = parseInt(cpkekButton.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  cpfeketeButton?.addEventListener("click", ()=>{
    
    cpfeherButton?.classList.remove("btn-outline-primary");
    cpbarnaButton?.classList.remove("btn-outline-primary");
    cpkekButton?.classList.remove("btn-outline-primary");
    cpfeketeButton?.classList.add("btn-outline-primary");
    cppirosButton?.classList.remove("btn-outline-primary");

    ChangeImage("CP-img", "src/exterior-3_218.jpg");
    cpAr.szinAr = parseInt(cpfeketeButton.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  cppirosButton?.addEventListener("click", ()=>{
    
    cpfeherButton?.classList.remove("btn-outline-primary");
    cpbarnaButton?.classList.remove("btn-outline-primary");
    cpkekButton?.classList.remove("btn-outline-primary");
    cpfeketeButton?.classList.remove("btn-outline-primary");
    cppirosButton?.classList.add("btn-outline-primary");

    ChangeImage("CP-img", "src/exterior-3_3U9.jpg");
    cpAr.szinAr = parseInt(cppirosButton.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpvalto = document.getElementById("CPvalto") as HTMLInputElement;
  cpvalto.addEventListener("change", () => {
    cpAr.valtoAr = parseInt(cpvalto.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpvalto2 = document.getElementById("CPvalto2") as HTMLInputElement;
  cpvalto2.addEventListener("change", () => {
    cpAr.valtoAr = parseInt(cpvalto2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpmotor = document.getElementById("CPmotor") as HTMLInputElement;
  cpmotor.addEventListener("change", () => {
    cpAr.motorAr = parseInt(cpmotor.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpmotor2 = document.getElementById("CPmotor2") as HTMLInputElement;
  cpmotor2.addEventListener("change", () => {
    cpAr.motorAr = parseInt(cpmotor2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpmotor3 = document.getElementById("CPmotor3") as HTMLInputElement;
  cpmotor3.addEventListener("change", () => {
    cpAr.motorAr = parseInt(cpmotor3.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpgumi = document.getElementById("CPgumi") as HTMLInputElement;
  cpgumi.addEventListener("change", () => {
    cpAr.gumiAr = parseInt(cpgumi.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpgumi2 = document.getElementById("CPgumi2") as HTMLInputElement;
  cpgumi2.addEventListener("change", () => {
    cpAr.gumiAr = parseInt(cpgumi2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpklima = document.getElementById("CPKlima") as HTMLInputElement;
  cpklima.addEventListener("change", () => {
    cpAr.klima = parseInt(cpklima.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpklima2 = document.getElementById("CPKlima2") as HTMLInputElement;
  cpklima2.addEventListener("change", () => {
    cpAr.klima = parseInt(cpklima2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpradio = document.getElementById("CPRadio") as HTMLInputElement;
  cpradio.addEventListener("change", () => {
    cpAr.radio = parseInt(cpradio.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpradio2 = document.getElementById("CPRadio2") as HTMLInputElement;
  cpradio2.addEventListener("change", () => {
    cpAr.radio = parseInt(cpradio2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cptcam = document.getElementById("CPTCam") as HTMLInputElement;
  cptcam.addEventListener("change", () => {
    cpAr.tCam = parseInt(cptcam.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cptcam2 = document.getElementById("CPTCam2") as HTMLInputElement;
  cptcam2.addEventListener("change", () => {
    cpAr.tCam = parseInt(cptcam2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpmhajtas = document.getElementById("CPMHajtas") as HTMLInputElement;
  cpmhajtas.addEventListener("change", () => {
    cpAr.mHajtas = parseInt(cpmhajtas.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpmhajtas2 = document.getElementById("CPMHajtas2") as HTMLInputElement;
  cpmhajtas2.addEventListener("change", () => {
    cpAr.mHajtas = parseInt(cpmhajtas2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpfutheto = document.getElementById("CPFutheto") as HTMLInputElement;
  cpfutheto.addEventListener("change", () => {
    cpAr.futheto = parseInt(cpfutheto.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });

  var cpfutheto2 = document.getElementById("CPFutheto2") as HTMLInputElement;
  cpfutheto2.addEventListener("change", () => {
    cpAr.futheto = parseInt(cpfutheto2.value);
    cpar.textContent = OsszAr(cpAr) + " Ft";
  });
});


function ChangeImage(id:string,utvonal:string) {
  const imageElement = document.getElementById(id) as HTMLImageElement;
  imageElement.src = utvonal;
}

function OsszAr(ar: Ar) : string{
  var sum = 0;
  sum += ar.alapAr;
  sum += ar.gumiAr;
  sum += ar.motorAr;
  sum += ar.szinAr;
  sum += ar.valtoAr;
  sum += ar.klima;
  sum += ar.radio;
  sum += ar.tCam;
  sum += ar.mHajtas;
  sum += ar.futheto;
  var res = "";
  var x = 0;
  for(var i = sum.toString().length - 1; i >= 0 ; i--){
    if(i % 3 == 0){
      res += sum.toString()[x]+" ";
    }else{
      res += sum.toString()[x];
    }
    x++;
  }
  return res;
}