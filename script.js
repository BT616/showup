let sectionElement=document.getElementById('info');
let h2Element=sectionElement.getElementsByTagName('h2')[1];


var review= document.getElementById('review');


var submitBtn=document.getElementById('btn');
submitBtn.addEventListener('click',(event)=> { 
event.preventDefault()
var createP= document.createElement('p');
createP.append(review.value)
document.getElementById('reviews').appendChild(createP)
})




function showHide(){
if (this.nextElementSibling.hasAttribute('class') && this.nextElementSibling.getAttribute('class')=='hide') {
this.nextElementSibling.removeAttribute('class');
this.innerHTML='Show Less...'
}else{
    this.nextElementSibling.setAttribute('class','hide');
    this.innerHTML='Show More...'
}
}

h2Element.onclick =showHide;