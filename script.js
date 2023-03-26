let sectionElement=document.getElementById('info');
let h2Element=sectionElement.getElementsByTagName('h2')[1];

var review= document.getElementById('review');
var submitBtn=document.getElementById('btn');

//add event listener to button, then creates p tag, grabs value from input field and appends to reviews id tag
submitBtn.addEventListener('click',(event)=> { 
event.preventDefault()
var createP= document.createElement('p');
createP.append(review.value)
document.getElementById('reviews').appendChild(createP)
})


//finds attribute class and determines if its 'hide',
//if it is itll show more of the paragraph that is originally hidden. 
//will then remove the class(hide) to show the text.
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