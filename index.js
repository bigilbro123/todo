const mydiv=document.createElement('div');
mydiv.classList.add('container');
document.body.appendChild(mydiv);

const mydiv1=document.createElement('div');
mydiv1.classList.add('todoapp');
mydiv.appendChild(mydiv1)

const head=document.createElement('h2');
head.textContent="TO DO LIST";
mydiv1.appendChild(head)

const image=document.createElement('img');
image.src='img/images/icon.png';
head.appendChild(image);

const inputs=document.createElement('input')
inputs.classList.add('search')
inputs.setAttribute('id','searchs')
mydiv1.appendChild(inputs)

const button=document.createElement('button')
inputs.classList.add('button')
mydiv1.appendChild(button)
button.setAttribute('id','buttonid')

const text="ADD";
button.innerText=text

const ul=document.createElement('ul');
   mydiv1.appendChild(ul);

const butoon1 =document.getElementById('buttonid');
const arry=['myre','kunne','pura','fuck','bitch','fucker']
function alerts(){
   const textco= document.getElementById('searchs').value;
   const tLc=textco.toLowerCase();
   console.log(tLc)
   if(arry.includes(tLc)){
    alert('Thats a bad word')
    const textcos= document.getElementById('searchs').value="";
   }else if(textco){
   console.log(textco);
   const tri=textco.slice(0,1);
   const tris=textco.slice(1);
   const join=tri.toUpperCase()+tris;
   const ol=document.createElement('ol')
   ul.appendChild(ol);
   ol.innerText=join;
  const textcos= document.getElementById('searchs').value="";
}
else{
    alert("Enter a word")
}
}


butoon1.addEventListener('click',alerts);







console.log("hi")