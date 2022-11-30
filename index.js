// TODO: Listen for page loading (window)
//onload requires one main parameter which is a function
const print = (tag ,value)=>{
    console.log(tag,value);

}
window.onload = () =>{
    console.log("window",'loaded')
}
// TODO: Listen for page loading (document)
document.addEventListener('DOMContentLoaded',(e) => {
    //console.log('events:',e)

    // TODO: Access the h1 in HTML page
    const h1 =document.getElementById('app_title')
    print ('h1',h1)
    // TODO: Change color of app_title
     h1.classList.add('title')
     // TODO: Change color of app_paragraph
    const p = document.getElementById('app_paragraph')
     p.classList.add('paragraph')
     // TODO: Change color of main page
    const body = document.querySelector('body')
    body.classList.add('main')
    // TODO: Add a new element to the container
    const div =document.getElementById('container')
    const header = document.createElement('h2')
    header.innerText = 'Newly added'
    body.appendChild(header)
    div.appendChild(header)
    // TODO: Remove the h1 from the page
    const b1=document.getElementById('btn-title') 
    b1.addEventListener('click',() => {
        h1.remove()
    })
    const b2=document.getElementById('btn-paragraph') 
    b2.addEventListener('click',() => {})
    const b3=document.getElementById('btn-main')
    b3.addEventListener('click',() => {
        div.remove()
    })
    // TODO: Listen for three mouse events(hover, mouse down, mouse enter)
     document.addEventListener('mousedown',() =>{
        //mousedown listens to the primary button eg our primary is left-click
        print('mousedown','hello')
     })
})