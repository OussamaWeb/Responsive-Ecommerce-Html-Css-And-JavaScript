let wishlistTable = document.querySelector('.wishlist-table');
window.addEventListener('load', () => {
    let arrayTableWishlist = [];
    let newOrderWishlist = "";
    let objectTaleWishlist = {
        srcImgWishlist: localStorage.getItem('srcTableWishlist'),
        priceTableWishlist: localStorage.getItem('priceTableWishlist'),
    };
    arrayTableWishlist.push(objectTaleWishlist);
    localStorage.setItem('arrayTableLocalWishlist', JSON.stringify(arrayTableWishlist));
    for (let i = 0; i < arrayTableWishlist.length; i++) {
        newOrderWishlist = `
        <tr class="item-tr-wishlist item-wishlist">
        <td class="item-td">
            <img src="${arrayTableWishlist[i].srcImgWishlist}" class="image-table">
        </td>
        <td class="item-td">
            <div class="name-person">
                <span>J.Crew Mercantile Women's Short-Sleeve</span><br>
                <p>Maboriosam in a tanto nesciung eget <br> distingy magndapibus.</p>
            </div>
        </td>
        <td class="item-td">
            ${arrayTableWishlist[i].priceTableWishlist}
        </td>
        <td class="item-td quantity">
            In Stock
        </td>
        <td class="item-td">
            <a href="#" class="btn">
                Add cart
            </a>
        </td>
        <td class="item-td">
            <img src="trash-can.svg" class="icons">
        </td>
    </tr>`
    };
    wishlistTable.innerHTML += newOrderWishlist;
});