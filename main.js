var ubmrellaImg = document.getElementById("umb-img");
var blueSwitch = document.getElementById('blue-switch');
var pinkSwitch = document.getElementById('pink-switch');
var yellowSwitch = document.getElementById('yellow-switch');
var uploadLogo = document.getElementById("logo-upload");
var body = document.getElementById('body');
var logoInput = document.getElementById("logo-input");
var switchButtons = document.querySelectorAll(".switch-btn");
var logoImg = document.getElementById('logo-img');
var logoText = document.getElementById('logo-text');
var uploadIcon = document.getElementById('upload-icon');
var loaderIcon = document.getElementById('loader-img');
var removeLogo = document.getElementById('remove-logo');
var rotation = 0;
var timeoutId;

uploadLogo.style.backgroundColor= "#1e90ff";
// rotate loader
function spin() {
  rotation += 10;
  uploadIcon.style.transform = "rotate(" + rotation + "deg)";
  ubmrellaImg.style.display = "none";
  let svg = `<svg class="loader-svg" fill='${uploadLogo.style.backgroundColor}' aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 28.3 31.2" width="28.3" height="31.2" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M25.1 23.6c-.3.1-.6.2-1 .2-.6.1-1.3 0-2.1.1s-1.7.3-2.6.8c-.8.5-1.4 1.1-1.9 1.6-.7.9-1.1 1.7-1.5 2.2-.2.3-.4.4-.7.6-.2.1-.4.2-.8.2v-13L26 22.9c-.3.3-.6.5-.9.7m-11.3 5.9c-.5-.1-.8-.2-1-.4-.2-.2-.5-.4-.7-.7-.3-.5-.7-1.1-1.2-1.7-.5-.7-1.1-1.3-2.1-1.9-.8-.5-1.6-.7-2.3-.8-1.1-.2-2-.1-2.7-.2l-.9-.3c-.2-.1-.4-.3-.6-.6l11.4-6.6v13.2zM1.7 21.3c0-.3.1-.6.2-1 .2-.5.6-1.1.9-1.9.3-.8.6-1.7.6-2.8v-.1c0-1.5-.6-2.6-1-3.5l-.6-1.2c-.1-.4-.2-.7-.2-1 0-.3.1-.6.2-1l11.4 6.6-11.3 6.8c-.1-.4-.2-.7-.2-.9M3.2 7.6c.3-.1.6-.2 1-.2.6-.1 1.3 0 2.1-.1.7-.2 1.6-.4 2.5-.9.8-.5 1.4-1.1 1.9-1.6.7-.9 1.1-1.7 1.5-2.2.2-.3.4-.4.7-.6.2-.1.5-.2.8-.2V15L2.3 8.3c.3-.4.6-.6.9-.7m11.3-5.9c.5 0 .8.2 1 .4.2.2.5.4.7.7.3.5.7 1.1 1.2 1.7.5.7 1.1 1.3 2.1 1.9.8.5 1.6.7 2.4.8 1.1.1 2 .1 2.7.2l.9.3c.2.1.4.3.6.6l-11.4 6.6V1.7zm12.1 8.2c0 .3-.1.6-.2 1-.2.5-.6 1.1-.9 1.9-.3.8-.6 1.7-.6 2.8v.2c0 1.5.5 2.6 1 3.5l.6 1.2c.1.4.2.7.2 1 0 .3-.1.6-.2.9l-11.4-6.6L26.3 9c.2.4.3.7.3.9m.4 7.8c-.3-.6-.5-1.3-.5-2v-.1c0-1 .4-1.8.8-2.7.2-.4.5-.8.6-1.3.2-.5.3-1 .3-1.6 0-.7-.2-1.4-.6-2.1-.5-.8-1.1-1.4-1.8-1.7-.5-.2-1-.3-1.5-.4-.7-.1-1.4-.1-2.1-.1-.7-.1-1.3-.2-1.9-.6-.6-.3-1-.7-1.4-1.2-.5-.9-.9-1.7-1.6-2.5-.3-.4-.7-.8-1.3-1-.5-.3-1.1-.4-1.9-.4-1 0-1.8.2-2.4.7-.5.3-.8.7-1.1 1.1-.4.6-.7 1.2-1.1 1.7-.4.5-.8 1-1.5 1.4-.6.4-1.2.5-1.8.6-.9.1-1.8 0-2.8.2-.5.1-1 .3-1.5.7-.5.3-.9.8-1.3 1.4C.2 8.5 0 9.3 0 10c0 .6.1 1.1.3 1.6.3.7.7 1.3 1 2 .3.6.5 1.3.5 2.1v.1c0 1.1-.4 1.8-.8 2.7-.2.4-.5.8-.6 1.3-.2.5-.3 1-.3 1.6 0 .7.2 1.4.6 2.1.5.8 1.1 1.4 1.8 1.7.5.2 1 .3 1.5.4.7.1 1.4.1 2.1.1.7.1 1.3.2 2 .6.6.3 1 .7 1.4 1.2.5.7.9 1.5 1.6 2.3.3.4.7.7 1.3 1 .5.3 1.2.4 1.9.4 1 0 1.8-.3 2.4-.7.5-.3.8-.7 1.1-1.1.4-.6.8-1.2 1.2-1.7.4-.5.8-1 1.5-1.4.6-.3 1.1-.5 1.7-.6.9-.1 1.8 0 2.8-.2.5-.1 1-.3 1.5-.6s.9-.8 1.3-1.4c.4-.7.6-1.5.6-2.1 0-.6-.1-1.1-.3-1.6-.5-.9-.8-1.5-1.1-2.1"></path></svg>`;
  let blob = new Blob([svg], { type: "image/svg+xml" });
  let url = URL.createObjectURL(blob);
  loaderIcon.src = url;
  loaderIcon.style.display = "block";
  loaderIcon.style.transform = "rotate(" + rotation + "deg)";
  timeoutId = setTimeout(spin, 50);
}

// set time out for loader
function loader(){
    spin()
    uploadIcon.src = "assets/loader_icon.svg";
    logoImg.style.display = "none";
    setTimeout(() => {
      clearTimeout(timeoutId);
      uploadIcon.style.transform = "none";
      loaderIcon.style.display = "none";
      ubmrellaImg.style.display = "block";
      if(logoImg.src){
        logoImg.style.display = "block";
      }
      uploadIcon.src = "assets/upload_icon.svg";
    }, 1000);
}

// blue button click
blueSwitch.addEventListener('click',function(){
    loader();
    ubmrellaImg.src = "assets/Blue umbrella.png";
    body.style.backgroundColor='rgb(230 247 252)';
    uploadLogo.style.backgroundColor = "#1e90ff";
});

// pink button click
pinkSwitch.addEventListener("click", function() {
  loader();  
  ubmrellaImg.src = "assets/Pink umbrella.png";
  body.style.backgroundColor = "rgb(238 209 219)";
  uploadLogo.style.backgroundColor = "#ff69b4";
});

// yellow button click
yellowSwitch.addEventListener("click", function() {
  loader();  
  ubmrellaImg.src = "assets/Yello umbrella.png";
  body.style.backgroundColor = "rgb(255 251 239)";
  uploadLogo.style.backgroundColor = "#ffd700";
});

// set active button
switchButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    switchButtons.forEach(function(otherButton) {
      otherButton.style.border=''
    });
    if(button.id==='blue-switch'){
        button.style.border= '5px solid rgb(98, 191, 241)';
    }else if(button.id==='pink-switch'){
        button.style.border = "5px solid rgb(232 167 202)";
    }else if(button.id==='yellow-switch'){
        button.style.border = "5px solid rgb(233 227 167)";
    }
  });
});

// upload logo image 
logoInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  const allowedExtensions = /(\.jpg|\.png)$/i;
  const maxSize = 5 * 1024 * 1024;

  if (!allowedExtensions.exec(file.name)) {
    alert("Please select a PNG or JPG file.");
    return;
  }

  if (file.size > maxSize) {
    alert("File size exceeds 5MB.");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(event) {
    loader();
    logoImg.src = event.target.result;
    logoText.innerHTML = `${file.name.toUpperCase()}`;
    removeLogo.style.display = 'block'
  };
  reader.readAsDataURL(file);
});

// remove logo image
function handleRemoveLogo(){
    logoImg.removeAttribute('src');
    removeLogo.style.display = "none";
    loader()
    logoText.innerHTML = "UPLOAD LOGO";
}
