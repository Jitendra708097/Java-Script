const image = document.querySelector('#image');

const img = document.querySelector('img');

image.addEventListener('change',(event)=>{
    const fileurl = event.target.files[0];
    const ur = URL.createObjectURL(fileurl);
    img.src = ur;

})