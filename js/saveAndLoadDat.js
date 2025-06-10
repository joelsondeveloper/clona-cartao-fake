function saveData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (form.checkValidity()) {
            const arrData = [];
            const data = {
                cardNumber: form.querySelector('#card-number').value,
                cardName: form.querySelector('#card-name').value,
                cardExpiry: form.querySelector('#expiry').value,
                cardCvv: form.querySelector('#cvv').value,
                cpf: form.querySelector('#cpf').value,
                email: form.querySelector('#email').value,
                cep: form.querySelector('#cep').value,
            };
            arrData.push(data);
            localStorage.setItem('data', JSON.stringify(arrData));

            window.open('output.html', '_self');
        }
    });
}