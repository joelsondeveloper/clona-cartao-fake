function modifyCardListener(inputsArr, displayArr) {
  inputsArr.forEach((input, index) => {
    input.addEventListener("input", () => {
      modifyCard(input, displayArr[index]);
    });
  });
}

function modifyCard(input, display) {
  if (input === document.getElementById("card-number")) {
    if (display.textContent.length >= 19 && display.textContent !== "•••• •••• •••• ••••" && input.value.length >= 17) {
        return
    }
    display.innerHTML = limparNumeroCartao(input.value);
  } else if (input === document.getElementById("card-name")) {
    if (input.value.length > 0) {
      const nome = limparNomeTitular(input.value);
      console.log(typeof limparNomeTitular);
      display.textContent = nome;
    }
  } else if (input === document.getElementById("expiry")) {
    display.innerHTML = formatarValidade(input.value);
  } else if (input === document.getElementById("cvv")) {
    display.innerHTML = formatarCvv(input.value);
  }
  if (input.value.length === 0) {
    display.textContent = display.getAttribute("data-default");
  }
}

function limparNumeroCartao(value) {
  return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
}

function limparNomeTitular(value) {
  const nome = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim().toUpperCase();

  return nome;
}

function formatarValidade(value) {
  return value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1/$2").slice(0, 5);
}

function formatarCvv(value) {
  return value.replace(/\D/g, "").slice(0, 4);
}