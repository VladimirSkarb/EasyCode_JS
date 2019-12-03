const table = document.querySelector('.table')
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const addBtn = document.querySelector('.add_btn');
const saveBtn = document.querySelector('.save_btn');
const numberInput = document.querySelector("[name=number]");
const invoiceDate = document.querySelector('[name=invoice_date]');
const supplyDate = document.querySelector('[name=supply_date]');
const comment = document.querySelector('[name=comment]');


class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHttp();

http.get('http://localhost:4000/invoices', (res) => {
    const parsedInvoices = JSON.parse(res);
    const invoiceForRendering = new Invoices();
    const html = `<tr class="heading"><th>Create</th><th>No</th><th>Supply</th><th>Comment</th></tr>`;
    table.insertAdjacentHTML('beforeend', html)
    parsedInvoices.forEach((post) => {
        invoiceForRendering.render(post);
    })
});

class Invoices {
    constructor() {
        this.wraper = document.querySelector('.table');
    }
    render(invoice) {
        const html = `<tr>
                        <td>${invoice.date_created}</td>
                        <td>${invoice.number}</td>
                        <td>${invoice.date_supplied}</td>
                        <td>${invoice.comment}</td>
                    </tr>`
        this.wraper.insertAdjacentHTML('beforeend', html)
    }
}

const handleForm = (event) => {
    event.preventDefault();

    if (!numberInput.value || !invoiceDate.value || !supplyDate.value) {
        alert('Enter the correct values!');
        return;
    }


    renderInvoice(numberInput.value, invoiceDate.value, supplyDate.value, comment.value);
    numberInput.value = '';
    invoiceDate.value = '';
    supplyDate.value = '';
    comment.value = '';
    closeModal();
};


function renderInvoice(numberInput, invoiceDate, supplyDate, comment) {

    const html = `<tr>
                        <td>${invoiceDate}</td>
                        <td>${numberInput}</td>
                        <td>${supplyDate}</td>
                        <td>${comment}</td>
                    </tr>`

    table.insertAdjacentHTML('beforeend', html);



}

function closeModal() {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
}

function addInvoice() {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'auto';
}
close.addEventListener('click', closeModal);
addBtn.addEventListener('click', addInvoice);
saveBtn.addEventListener('click', handleForm)
