let fileImg = document.querySelector('.file-img');
let fileSrc = document.querySelector('.label-src');
fileImg.addEventListener('change', () => {
    let file = new FileReader();
    file.readAsDataURL(fileImg.files[0]);
    file.onload = () => {
        fileSrc.setAttribute('src', file.result);
    };
});

function CheckedSrcImage() {
    if (fileSrc.src == '') {
        fileSrc.classList.add('label-src-active');
    } else {
        fileSrc.classList.remove('label-src-active');
    }
}
CheckedSrcImage();