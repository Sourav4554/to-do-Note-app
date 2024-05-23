 const container=document.querySelector('.notes-container');
 const button=document.querySelector('.btn');
 let notes=document.querySelectorAll('.inputbox');
 //fetch from local storage
 function shownotes(){
 container.innerHTML=localStorage.getItem("Notes");
 }
 shownotes()
 //store to local storage
 function updateStorage(){
 localStorage.setItem("Notes",container.innerHTML)
 }
 // create paragraph 
  button.addEventListener("click",()=>{
  let inputbox=document.createElement('p');
 
  let image=document.createElement('img');
  inputbox.className='inputbox';
  inputbox.style.animationName='slideIn';
  inputbox.setAttribute('contenteditable','true');
  image.src='./notes-app-img/images/delete.png';
  container.appendChild(inputbox).appendChild(image);
  });

  container.addEventListener("click",(e)=>{
 if(e.target.tagName==='IMG'){
let k=e.target.parentElement;
k.classList.add('slideout');
document.addEventListener('transitionend',()=>{
 e.target.parentElement.remove();
 updateStorage();
});
 
 }
 else if(e.target.tagName==='P'){
 notes=document.querySelectorAll('.inputbox');
 notes.forEach(nt =>{
 nt.addEventListener('keyup',()=>{
 updateStorage();
 console.log(nt);
 })
 })
 }
 })
  document.addEventListener('keydown',(e)=>{
  if(e.keyCode===13){
      document.execCommand('insertLineBreak')
  e.preventDefault();
  }
  });
  
