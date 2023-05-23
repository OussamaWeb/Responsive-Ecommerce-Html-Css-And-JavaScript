let Table = document.querySelector('.table-cart-shopping');
window.addEventListener('load', () => {
    let arrayTable = [];
    let newOrder = "";
    let objectTale = {
        srcImg: localStorage.getItem('srcTable'),
        priceTable: localStorage.getItem('priceTable'),
    };
    arrayTable.push(objectTale);
    localStorage.setItem('arrayTableLocal', JSON.stringify(arrayTable));
    for (let i = 0; i < arrayTable.length; i++) {
        newOrder = `
            <tr class="item-tr">
                <td class="item-td">
                    <img src="${arrayTable[i].srcImg}" class="image-table">
                </td>
                <td class="item-td">
                    <div class="name-person">
                        <span>J.Crew Mercantile Women's Short-Sleeve</span><br>
                        <p>Maboriosam in a tanto nesciung eget <br> distingy magndapibus.</p>
                    </div>
                </td>
                <td class="item-td">
                    $120
                </td>
                <td class="item-td quantity">
                    <div class="number-plus-mains">
                        <span class="plus" id="plus" onclick="">+</span>
                        <span class="number">1</span>
                        <span class="mains" id="mains">-</span>
                    </div>
                </td>
                <td class="item-td">
                    ${arrayTable[i].priceTable}
                </td>
                <td class="item-td">
                    <img src="trash-can.svg" class="icons">
                </td>
            </tr>`
    };
    Table.innerHTML += newOrder;
});
let itemTableTr = document.querySelectorAll('.table-cart-shopping item-tr');
localStorage.setItem('numberItemTable', itemTableTr.length);