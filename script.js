let i = 0, n1 = "", n2 = "";

const days = [
 {t:"Rose Day 🌹",q:"Will you accept this rose? 🌹",e:"🌹",b:"rose",o:["Yes ❤️","No"],c:0},
 {t:"Propose Day 💍",q:"Will you be mine forever?",e:"💖",b:"propose",o:["I do 💍","No"],c:0},
 {t:"Chocolate Day 🍫",q:"I am sweeter than chocolate 😘",e:"🍫",b:"chocolate",o:["Yes 😘","Yes 😍"],c:0},
 {t:"Promise Day 🤝",q:"",e:"🤝",b:"promise",o:[],c:0},
 {t:"Hug Day 🤗",q:"",e:"🤗",b:"hug",o:[],c:0},
 {t:"Kiss Day 💋",q:"Can I steal a kiss?",e:"💋",b:"kiss",o:["Of course 💋","No"],c:0},
 {t:"Surprise Plan! ✈️",q:"Aa vakhte aapde kya farva jaisu? Chuno ek option! 😍",e:"✈️",b:"travel",o:["Option 1 🎁","Option 2 🎁","Option 3 🎁"],c:null},
 {t:"7 Beautiful Years 🥂",q:"",e:"✨",b:"anniversary",o:[],c:0}
];

const travelOptions = {
 "Option 1 🎁": "Somnath ✨🙏",
 "Option 2 🎁": "Dwarka ✨🌊",
 "Option 3 🎁": "Vrindavan ✨🌸"
};

/* START */
function start(){
 n1 = document.getElementById("name1").value.trim();
 n2 = document.getElementById("name2").value.trim();

 if(!n1 || !n2){
  showPopup("Enter both names ❤️");
  return;
 }

 document.getElementById("welcome").classList.add("hidden");
 document.getElementById("introPage").classList.remove("hidden");
 document.body.className = "intro";

 document.getElementById("introTitle").innerHTML =
  `Joile mein aapdu new couple name aapyu mein 😎 
   <span class="forever">Forever</span> <span class="emoji">💞</span>`;

 typeWriter("#𝓝𝓮𝓲𝓷𝓪", "#introHash", 90);
 animate("💞");

 setTimeout(()=>{
  document.getElementById("introPage").classList.add("hidden");
  document.getElementById("day").classList.remove("hidden");
  i = 0;
  load();
 },12000);
}

/* LOAD DAY */
function load(){

 let d = days[i];

 document.body.className = d.b;
 document.getElementById("title").innerText = d.t;
 document.getElementById("progress").style.width = ((i+1)/days.length*100) + "%";
 document.getElementById("options").innerHTML = "";
 document.getElementById("question").innerHTML = "";


/* ROSE */
 if(d.b === "rose"){
  typeWriter("Sorry for the late wish, original flower to nathi pn atyare aana thi kaam chalavi lais please?? 🌹","#question",55);
  animate("🌹");
  setTimeout(()=>{
    document.getElementById("question").innerText = d.q;
    createOptions(d);
  },10000);
  return;
 }

/* PROPOSE */
 if(d.b === "propose"){
  typeWriter("Mein aaj sudhi propose pn nathi karyu… pn aa just mari jaan mate 💖","#question",55);
  animate("💖");
  setTimeout(()=>{
    document.getElementById("question").innerText = d.q;
    createOptions(d);
  },8000);
  return;
 }

/* CHOCOLATE */
 if(d.b === "chocolate"){
  document.getElementById("question").innerText = d.q;
  d.o.forEach(()=>{
    let b = document.createElement("button");
    b.className = "btn";
    b.innerText = "Yes 😘";
    b.onclick = ()=>{
      document.getElementById("options").innerHTML="";
      typeWriter("AAma Tare Naa Padva Mate Mein Koi Option j Nato Rakhyo 😄🍫","#question",55);
      animate("🍫");
      setTimeout(()=>{ i++; load(); },12000);
    };
    document.getElementById("options").appendChild(b);
  });
  animate("🍫");
  return;
 }

/* PROMISE */
 if(d.b === "promise"){
  document.getElementById("question").innerHTML = `
Aaje koi kasam nathi khato,<br>
Bs ek vaat kau chu…<br><br>
Jya sudhi saans che,<br>
Tya sudhi tu maara saath che 💫<br><br>
Promise che ke gusso aavse,<br>
Jhagda pn thase,<br>
Pn end ma hug ane smile jarur hase 🤗💖<br><br>
Forever 🤝`;
  animate("🤝");
  setTimeout(()=>{ i++; load(); },15000);
  return;
 }

/* HUG */
 if(d.b === "hug"){
  typeWriter(
`Aapda Mate 365 days Hug Day che 🤗

Aa hug ma badhu samai jase…
Maro gusso,
Tari galti,
Ane duniya no stress pan 💫

Jya shabd ochha padse,
Tya aa hug bolse ❤️

Bas ek tight hug…
Ane badhu theek thai jase 🤍🤗

Always Yours 💞`,
  "#question",
  45
  );
  animate("🤗");
  setTimeout(()=>{ i++; load(); },15000);
  return;
 }

/* KISS */
 if(d.b === "kiss"){
  document.getElementById("question").innerText = d.q;
  createOptions(d);
  animate("💋");
  return;
 }

/* TRAVEL */
 if(d.b === "travel"){
  document.getElementById("question").innerText = d.q;
  d.o.forEach((opt)=>{
    let b = document.createElement("button");
    b.className = "btn";
    b.innerText = opt;
    b.onclick = ()=>{
      document.getElementById("options").innerHTML="";
      typeWriter(`Surprise!!! 😍\nAa vakhte aapde jaisu: ${travelOptions[opt]}\n\nTaiyar thai jaje mari jaan!\n\n  Sceen shot padi ne mokl mne 😄😄 🚗💨`,"#question",55);
      animate("🚗");
      setTimeout(()=>{ i++; load(); },14000);
    };
    document.getElementById("options").appendChild(b);
  });
  return;
 }

/* ANNIVERSARY */
if(d.b === "anniversary"){

  typeWriter(
`7 varsh no samay kyare vityo khabar j na padi... Hasya, masti, jhaghdya, ane pyaar pn bauj karyo & aagad pn krishu aapde hji aapdi family ne pn baujj happy feel karavana che k haa loko ne aemni rite relation ma rakhya pn ae loko ae aemnu best kryu che and aagad on krse kyare ae loko ne k aapdne afsos nai thay hu bauu khush chu k papa pn mne joine gya and i hope aemne pn tari chinta nahi hoy hu tne kyare pn aemni kami feel nai thava dau jaaan promise . 7 varsh, 84 mahina, 2555 divas... Ane har divase taro prem vadhto j gayo che. Thank you for being my everything. Here is to our forever! 🥂✨ I love you jaan ❤️`,
  "#question",
  45
  );

  animate("✨");

  // 40 sec baad extra message
  setTimeout(()=>{
    let msg = document.createElement("p");
    msg.innerHTML = `
    <br><br>
    Thank you a lot for coming in my life 💖<br>
    You made my world brighter, happier and full of love ✨<br>
    I am truly blessed to have you forever ❤️
    `;
    document.getElementById("question").appendChild(msg);
    animate("💖");
  },40000);

  // 40 sec baad final page
  setTimeout(()=>{
    end();
  },40000);

  return;
}
}


/* OPTIONS */
function createOptions(d){
 d.o.forEach((x,j)=>{
  let b=document.createElement("button");
  b.className="btn";
  b.innerText=x;
  b.onclick=()=>check(j===d.c);
  document.getElementById("options").appendChild(b);
 });
}

/* CHECK */
function check(ok){
 if(ok){
  i++;
  if(i<days.length) load();
  else end();
 }else{
  showPopup("Try again my love 💕");
 }
}

/* FINAL */
function end(){
 document.getElementById("day").classList.add("hidden");
 document.getElementById("final").classList.remove("hidden");
 document.getElementById("finalText").innerHTML =
 `${n1} ❤️ ${n2}, our 7 years of love story is just the beginning of Forever ✨
 <br><br>
 Thank you for visit 💖`;
 animate("❤️");
}

/* POPUP */
function showPopup(t){
 const p=document.getElementById("popup");
 p.innerText=t;
 p.classList.add("show");
 setTimeout(()=>p.classList.remove("show"),2000);
}

/* EMOJI CONTINUOUS BACKGROUND */
let emojiInterval = null;

function animate(e){
 const bg = document.getElementById("bg");
 if(!bg) return;

 // Purana interval band karo (warna speed double hoti jayegi)
 if(emojiInterval) clearInterval(emojiInterval);

 // Background clear ek hi baar kare
 bg.innerHTML = "";

 // Continuous emoji create honge
 emojiInterval = setInterval(()=>{

   let s = document.createElement("div");
   s.className = "float";
   s.innerText = e;

   s.style.left = Math.random()*100 + "vw";
   s.style.animationDuration = (Math.random()*3+3) + "s";

   bg.appendChild(s);

   // 6 sec baad remove ho jaye
   setTimeout(()=>{
     s.remove();
   },6000);

 },500); // har 0.5 sec me naya emoji
}

/* TYPEWRITER */
function typeWriter(text,selector,speed){
 let el=document.querySelector(selector);
 if(!el) return;
 el.innerHTML="";
 let idx=0;
 let timer=setInterval(()=>{
  el.innerHTML+=text.charAt(idx);
  idx++;
  if(idx>=text.length) clearInterval(timer);
 },speed);
}