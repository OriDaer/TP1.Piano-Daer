const synth = new Tone.Synth().toDestination();
const elem = document.getElementById("miBoton");
elem.addEventListener("click",function() {console.log('ahdjsgdh')});

  let bot1,bot2;//var botones selectivos
  let slider;
  let volumeSlider;
  let button;//var boton visualiz
  let mySound,mySound1,mySound2,mySound3,mySound4,mySound5,mySound6;//var sonidos
  let Sound,Sound1,Sound3,Sound4,Sound5;//sonido para teclas negras
  let fft;//variab para filtro de sonido teclas negr
  let filtr, filterFreq, filterRes;
  let val;
  let x=49;
  let r=70;
  let xn=86.8;
  let xnn=239.8;
   //const synth = new Tone.Synth().toDestination();
   function setup() {
    createCanvas(500, 450);
    background(249, 231, 159);
    teclas();
    textTeclas();
    botSelectivos();
    botSlider();
    botVisualiz();
    filtroGyA();
  }
  
function draw() { 
    val = slider.value();
    teclasSong();
    volumen();
    filtroMap();
  }

  function teclas(){
    // Teclas blancas
  for(let a=0; a<7;a++){
      fill(255)
  rect(x, 160, 50, 155);
    x=x+51;
  }
  // Teclas negras
    for(let a=0; a<2 ;a++){  //tn 2 seguidas
      fill(0)
  rect(xn, 160, 25, 80);
    xn=xn+51;       
  }
      for(let b=0; b<3 ;b++){  //tn 3 seguidas
      fill(0)
  rect(xnn, 160, 25, 80);
    xnn=xnn+51;
  }
}

function textTeclas(){
    //teclas blancas
     textSize(10);
    fill(0);
    text('C', 70, 300);
  
    textSize(10);
    fill(0);
    text('D', 120, 300);
   
    textSize(10);
    fill(0);
    text('E', 170, 300);
   
    textSize(10);
    fill(0);
    text('F', 220, 300);
    
    textSize(10);
    fill(0);
    text('G', 270, 300);
  
    textSize(10);
    fill(0);
    text('A', 320, 300);
    
    textSize(10);
    fill(0);
    text('B', 370, 300);
    
    //teclas negras
      fill(255);
    textSize(10);
    text('C#', 92, 200);
    
    fill(255);
    textSize(10);
    text('D#', 143, 200);
   
    fill(255);
    textSize(10);
    text('F#', 245, 200);
    
    fill(255);
    textSize(10);
    text('G#', 296, 200);
   
    fill(255);
    textSize(10);
    text('A#', 348, 200);
  }

  function teclasSong() {//func sonidos de teclas hacer q entre una cordena y otra se precione y tenga sonido
    //console.log("x:", mouseX);
    //console.log("y:", mouseY);
    // mouse is pressed xq no t lo toma cm 1 funcion
    if (mouseIsPressed && mouseX > 49 && mouseX < 100 && mouseY > 160 && mouseY < 315) { //160+ 155
      console.log('do');
      synth.triggerAttackRelease("C4", "8n");//do
    }
    if(mouseIsPressed && mouseX > 100 && mouseX < 151 && mouseY > 160 && mouseY < 315){
      console.log('re');
      synth.triggerAttackRelease("D4", "8n");//re
    }
    if(mouseIsPressed && mouseX > 151 && mouseX < 202 && mouseY > 160 && mouseY < 315){
      console.log('mi');
          synth.triggerAttackRelease("E4", "8n");//mi
    }
    if(mouseIsPressed && mouseX > 202 && mouseX < 253 && mouseY > 160 && mouseY < 315){
      console.log('fa');
    synth.triggerAttackRelease("F4", "8n");//fa
    }
    if(mouseIsPressed && mouseX > 253 && mouseX < 304 && mouseY > 160 && mouseY < 315){
      console.log('sol');
      synth.triggerAttackRelease("G4", "8n");//sol
    }
    if(mouseIsPressed && mouseX > 304 && mouseX < 355 && mouseY > 160 && mouseY < 315){
      console.log('la');
      synth.triggerAttackRelease("A4", "8n");//la 
    }
    if(mouseIsPressed && mouseX > 355 && mouseX < 406 && mouseY > 160 && mouseY < 315){
      console.log('si');
      synth.triggerAttackRelease("B4", "8n");//si
    }
    //do,re,fa,sol,la
        if (mouseIsPressed && mouseX > 86.8 && mouseX < 111.8 && mouseY > 160 && mouseY < 240) { 
      console.log('do#');
      synth.triggerAttackRelease("C#", "8n");//do
    }
          if (mouseIsPressed && mouseX > 162.8 && mouseX < 187.8 && mouseY > 160 && mouseY < 240) { 
      console.log('re#');
      synth.triggerAttackRelease("D#", "8n");//re
    }
          if (mouseIsPressed && mouseX > 314.8 && mouseX < 339.8 && mouseY > 160 && mouseY < 240) { 
      console.log('fa#');
      synth.triggerAttackRelease("F#", "8n");//fa
    }
         if (mouseIsPressed && mouseX > 390.8 && mouseX < 415.8 && mouseY > 160 && mouseY < 240) { 
      console.log('sol#');
      synth.triggerAttackRelease("G#", "8n");//sol
    }
         if (mouseIsPressed && mouseX > 466.8 && mouseX < 491.8 && mouseY > 160 && mouseY < 240) { 
      console.log('la#');
      synth.triggerAttackRelease("A#", "8n");//la
    }
  }

  function botSlider(){
   slider = createSlider(0, 255, 100);
   slider.position(60, 10);
   slider.style('width', '80px');
 }

 function botSelectivos(){
    //botones selectivos
  textAlign(CENTER);   //bot1
  bot1 = createSelect();
  bot1.position(10, 10);                       //bot1.selected('Elige tecla');
  bot1.option('do');
  bot1.option('re');
  bot1.option('mi');
  bot1.option('fa');
  bot1.option('sol');
  bot1.option('la');
  bot1.option('si');
  bot1.changed(mySelect);//cuando se elija q se ejecutelo q hay en esa funcion
  
    textAlign(CENTER);   //bot2
  bot2 = createSelect();
  bot2.position(10, 30);                   //bot2.selected('Elige escala');
  bot2.option('Mayor');
  bot2.option('Menor');
  bot2.changed(mySelect);
}

function botVisualiz(){
    button = createButton('visualizar');
    button.position(10, 50);
   button.mousePressed(mySelect);
  }

  function volumen(){
    let volume = map(val, 0, width, 0, 1);//establezco volumen en un rango de 0 and 1.0  
    volume = constrain(volume, 0, 1);//contengo el valor de volumn entre 0 y 1
    mySound.amp(volume);//q mi sonido se amplie de acuerdo al valor de volumen
    mySound.amp(volume);
    mySound1.amp(volume);
    mySound2.amp(volume);
    mySound3.amp(volume);
    mySound4.amp(volume);
    mySound5.amp(volume);
    mySound6.amp(volume);
  
    Sound.amp(volume);
    Sound1.amp(volume);
    Sound3.amp(volume);
    Sound4.amp(volume);
    Sound5.amp(volume);
     console.log('Volumen: ' + val);
  }
  
  function filtroGyA(){
    //filtro para mas grave o agudo en teclas negras
  //do
  filtr = new p5.LowPass();//aplicamos un filtro q trae p5js pa filtrar el sonido
    fft = new p5.FFT();//le aplico un clase de filtro de bandas sonoras
  Sound.disconnect();// desconecta el sonido/archivo de audio de la salida maestra.
  Sound.connect(filtr);// a mi sonido lo conecto al filtro, para que solo escuchemos el sonido filtrado
  Sound1.disconnect(); //re
  Sound1.connect(filtr);
  
  Sound3.disconnect(); //fa
  Sound3.connect(filtr); 
  
  Sound4.disconnect(); //sol
  Sound4.connect(filtr); 
  
  Sound5.disconnect(); //la
  Sound5.connect(filtr); 
}

function filtroMap(){////FILTRO DE FRECUENCIAS
// Mapea la posición horizontal del ratón (mouseX) a la frecuencia de corte desde
// la frecuencia más grave (10Hz) a la más aguda (22050Hz) que los humanos escuchan
  filterFreq = map(mouseX, 0, width, 10, 22050);
  // Mapea la posición vertical del ratón (mouseY) a la resonancia (aumento de volumen) en la frecuencia de corte
 // filterRes = map(mouseY, 0, height, 15, 5);
  filtr.set(filterFreq, filterRes); // define los parámetros del filtro
}

function mySelect() { //funcion para cuando apretes los botones selectores
    let sel1= bot1.value();//saca el valor del bot1 select
  let sel2= bot2.value();
  console.log("sel1 ", sel1);
  console.log("sel2 ", sel2);  
  escalas();
  
}

//valores de teclas
//1c,2ch,3d 4dh 5e 6f 7fh 8g 9gh 10a 11ah 12b
function escalas(sel1,sel2){
    //defino teclas y las escalas musicales de las teclas
    const c=1;
    const ch=2;
    const d=3;
    const dh=4;
    const e=5;
    const f=6;
    const fh=7;
    const g=8;
    const gh=9;
    const a=10;
    const ah=11;
    const b=12;
    let escMayor,escMenor;
    //escala mayorrr
      if(sel1==='do' && sel2==='mayor'){ // si el selector 1 esta en do  y el select 2 esta en mayor q entre
       console.log('do mayor');  
     let Dm=[1,3,5,6,8,10,12];// teclas a usar :1c 3d 5e 6f 8g 10a 12b
        
       for(let indice=0;indice < Dm.length;indice++){//recorro arreglo
         if(c===Dm[indice]){//se pinte la tecla q esta en esa posicion solo si se cumple el valor
       //  si en la lo q tiene es =al valor de mi constante c# y asi q estre y suene si fue precionada la tecla suena y luego sigue y pinta el otro hasta q se preciona suena y se pinta el siguiente y asi 
         fill(233,4,33);
         rect(49, 160, 50, 155);//do
          if (mouseIsPressed && mouseX > 49 && mouseX < 100 && mouseY > 160 && mouseY < 315) {//si esa tecla es precionada q suene
      console.log('do0');
    mySound.play();// Reproduce el sonido
            }
         }
         //se termina y pasa a la siguiente verificando si los valores son iguales y entra 
         }
       }
    //re
    let Rm=[]; //teclas a usar :3d 5e 7fh 8g 10a 12b , c# 
    
    //mi 
      let Mm=[]; // teclas a usar :5e 7fh 9gh 10a 12b,c# y d#
    
    //fa 
      let Fm=[]; // teclas a usar :6f 8g 10a ,Bb,(12bNO VA), c,d,e
    
    //sol  
      let Slm=[]; // teclas a usar :8g 10a 12b c ,d, e,f#
    
    //la  
      let Lm=[]; //teclas a usar :10a 12b,c#,d,e,f#,g#
    
    //si
      let Sm=[]; //teclas a usar :12b,c#,d#,e,f#,g#,a#
    
  //escala menor natural!!!
    
    //do 
    let Dmn=[];//teclas a usar :1c 3d eb 6f 8g ab bb
    
    //re 
    let Rmn=[];//teclas a usar :3d 5e 6f 8g 10a bb ,c 
    
    //mi 
    let Mmn=[];//teclas a usar :5e 6f 7fh 8g 10a 12b,c,d
    
    //fa 
    let Fmn=[];//teclas a usar :1c,2ch,3d 4dh 5e 6f 7fh 8g 9gh 10a 11ah 12b
    
    //sol 
    let Slmn=[];// teclas a usar :6f 8g ab bb , c,db,eb
    
    //la 
    let Lmn=[];// teclas a usar :10a 12b,c,d,e,f,g
    
    //si 
    let Smn=[];//teclas a usar :12b,c#,d,e,f#,g,a
  }
  