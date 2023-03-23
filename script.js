let sectionElement=document.getElementById('info');
let h2Element=sectionElement.getElementsByTagName('h2')[1];
h2Element.onclick =showHide;

function showHide(){
if (this.nextElementSibling.hasAttribute('class') && this.nextElementSibling.getAttribute('class')=='hide') {
this.nextElementSibling.removeAttribute('class');
this.innerHTML='Show Less...'
}else{
    this.nextElementSibling.setAttribute('class','hide');
    this.innerHTML='Show More...'
}
}
