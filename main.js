document.addEventListener('click', function(e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        console.log(src);
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})