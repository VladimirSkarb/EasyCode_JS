
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHttp();

http.get('http://localhost:3000/invoices', (res) => {
    const parsedInvoices = JSON.parse(res);
    const invoiceForRendering = new Invoices();
    const table = document.querySelector('.table')
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