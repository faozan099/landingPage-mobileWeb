// alert('Mohon maaf web kami akan lebih optimal jika dalam tampilan mobile')

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
