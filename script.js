alert("Mohon maaf web kami akan lebih optimal jika dalam tampilan mobile");

const imgElements = document.querySelectorAll("img[data-url]");

imgElements.forEach(function (imgElement) {
  imgElement.addEventListener("click", () => {
    const url = imgElement.getAttribute("data-url");
    window.location.href = url;
  });
  imgElement.style.cursor = "pointer";
});

const pElements = document.querySelectorAll("p[data-url]");

pElements.forEach(function (pElement) {
  pElement.addEventListener("click", () => {
    const url = pElement.getAttribute("data-url");
    window.location.href = url;
  });
  pElement.style.cursor = "pointer";
});

const submit = document.getElementById("btnSubmit");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let inputNumber = document.getElementById("noTelp").value;
  let inputEmail = document.getElementById("email").value;
  let inputName = document.getElementById("name").value;
  let inputPesan = document.getElementById("pesan").value

  if (inputName === "") {
    alert("Mohon maaf silahkan masukan Namamu");
  } else if (inputEmail === "") {
    alert("Mohon maaf silahkan masukan email dengan benar");
  } else if (isNaN(Number(inputNumber)) || inputNumber === "") {
    alert("Mohon maaf silahkan masukan No Telpon dengan benar");
  }else if (inputPesan === ""){
    alert("Mohon maaf silahkan masukan pesan yang ingin disampaikan")
  }else {
    alert("terimakasih telah menghubungi kami");
    window.location.reload();
  }
});
