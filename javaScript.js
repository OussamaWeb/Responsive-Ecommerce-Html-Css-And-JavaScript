let tabButton = document.querySelectorAll(".tab-button");
let stars = document.querySelectorAll(".product-rating img");
let tabItem = document.querySelectorAll(".tab-item");
tabButton.forEach((e) => {
    e.addEventListener("click", () => {
        // Get Id of button
        let btnId = e.getAttribute("id");
        tabItem.forEach((tab) => {
            // Get Id of Tab
            let tabId = tab.getAttribute("id");
            tab.classList.remove("tab-active");
            btnId === tabId ? tab.classList.add("tab-active") : tab.classList.remove("tab-active");
        });
        // remove Class active-tab of all tab-button
        removeActiveTab();
        // add class active-tab to e
        e.classList.add("active-tab");
    });
});

function removeActiveTab() {
    tabButton.forEach((e) => {
        e.classList.remove("active-tab");
    });
};

let pagination = document.querySelectorAll(".pagination .pagination-link");
pagination.forEach((e) => {
    e.addEventListener("click", () => {
        // Remove class active from all pagination
        removePagination();
        e.classList.toggle("link-active");
    });
});

function removePagination() {
    pagination.forEach((pag) => {
        pag.classList.remove("link-active");
    });
};
// Function get src from image
function getSrc() {
    let detailsImg = document.querySelector(".details-img");
    let image = document.querySelectorAll(".details-small-img");
    image.forEach((e) => {
        e.addEventListener("click", () => {
            let srcImg = e.getAttribute("src");
            detailsImg.src = srcImg;
        });
    });
};
getSrc();
let detailTab = document.querySelectorAll(".detail-tab"),
    detailsTabContent = document.querySelectorAll(".details-tab-content");
detailTab.forEach((e) => {
    e.addEventListener("click", () => {
        let detailTabId = e.getAttribute("id");
        removeActive();
        e.classList.add("active");
        detailsTabContent.forEach((tab) => {
            // Get Id of Tab
            let detailsTabContentId = tab.getAttribute("id");
            // tab.classList.remove("tab-active");
            detailTabId === detailsTabContentId ? tab.classList.add("tab-active") : tab.classList.remove("tab-active");
        });
    });
});
// remove class active from detailsTab
function removeActive() {
    detailTab.forEach((e) => {
        e.classList.remove("active");
    });
};

function clearAll() {
    let textarea = document.querySelectorAll("textarea");
    textarea.forEach((text) => {
        text.innerHTML = "";
    });
};
clearAll();

let size = document.querySelectorAll(".size-link"),
    color = document.querySelectorAll(".color-link");
size.forEach((s) => {
    s.addEventListener("click", () => {
        removeClassFromSize();
        s.classList.add("active");
    });
});
color.forEach((c) => {
    c.addEventListener("click", () => {
        removeClassFromColor();
        c.classList.add("active");
    });
});

function removeClassFromSize() {
    size.forEach((s) => {
        s.classList.remove("active");
    });
};

function removeClassFromColor() {
    color.forEach((c) => {
        c.classList.remove("active");
    });
};
// loop in Account tag
let accountTab = document.querySelectorAll(".account-tab"),
    accountImg = document.querySelectorAll(".account-tab .icons"),
    tabContent = document.querySelectorAll(".tab-content");
accountTab.forEach((e) => {
    e.addEventListener("click", () => {
        removeActiveAccount();
        e.classList.add("active");
        let accountId = e.getAttribute("id");
        accountImg.forEach((e) => {
            e.parentElement.classList.contains("active") ? e.classList.add("active") :
                e.classList.remove("active");
        });
        tabContent.forEach((e) => {
            let contentId = e.getAttribute("id");
            contentId === accountId ? e.classList.add("tab-active") : e.classList.remove("tab-active");
        });
    });
});

function removeActiveAccount() {
    accountTab.forEach((e) => {
        e.classList.remove("active");
    });
};

let starAll = document.querySelectorAll(".review-rating .stars");
starAll.forEach((star, index) => {
    star.addEventListener("click", () => {
        starAll.forEach((e) => e.src = "star-line.svg")
        for (let i = 0; i <= index; i++) {
            starAll[i].src = "star-fill.svg";
        };
    });
});

let btnMenu = document.querySelectorAll(".btn-menu"),
    navResponsive = document.querySelector(".nav-responsive");
btnMenu.forEach((e) => {
    e.addEventListener("click", () => {
        navResponsive.classList.add("active");
    });
});

let btnMenuTwo = document.querySelectorAll(".btn-menu-two");
btnMenuTwo.forEach((e) => {
    e.addEventListener('click', () => {
        navResponsive.classList.remove("active");
    });
});

let quickView = document.querySelectorAll('.quick-view');
quickView.forEach((e) => {
    e.addEventListener('click', () => {
        let parentOne = e.parentElement.parentElement.children[0].children[0].children[0]
            .getAttribute('src');
        let parentTwo = e.parentElement.parentElement.children[0].children[0].children[1]
            .getAttribute('src');
        localStorage.setItem('srcOne', parentOne);
        localStorage.setItem('srcTwo', parentTwo);
        return;
    })
});
let cardShopping = document.querySelectorAll('.card-shopping');
cardShopping.forEach((e) => {
    e.addEventListener('click', () => {
        let srcTableCart = e.parentElement.parentElement.children[0].children[0].children[0].children[0].getAttribute('src');
        let priceTableCart = e.parentElement.children[3].children[0].firstChild.nodeValue;
        localStorage.setItem('srcTable', srcTableCart);
        localStorage.setItem('priceTable', priceTableCart);
    });
});
let addToWishlist = document.querySelectorAll('.add-to-wishlist');
addToWishlist.forEach((e) => {
    e.addEventListener('click', () => {
        let srcTableCartWishlist = e.parentElement.parentElement.children[0].children[0].children[0].getAttribute('src');
        let priceTableCartWishlist = e.parentElement.parentElement.parentElement.children[1].children[3].children[0].firstChild.nodeValue;
        console.log(srcTableCartWishlist,priceTableCartWishlist);
        localStorage.setItem('srcTableWishlist', srcTableCartWishlist);
        localStorage.setItem('priceTableWishlist', priceTableCartWishlist);
    });
});

let countDown = new Date("Dec 31, 2023, 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNew = new Date().getTime();
    let dateDiff = countDown - dateNew;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    let daysPage = document.querySelectorAll('#days'),
        hoursPage = document.querySelectorAll('#hours'),
        minutesPage = document.querySelectorAll('#minute'),
        secondsPage = document.querySelectorAll('#second');
    daysPage.forEach((d) => {
        d.innerHTML = days < 10 ? `0${days}` : days;
    });
    hoursPage.forEach((h) => {
        h.innerHTML = hours < 10 ? `0${hours}` : hours;
    });
    minutesPage.forEach((m) => {
        m.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    });
    secondsPage.forEach((s) => {
        s.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    });
}, 1000)
let countWishlist = document.getElementById('count-wishlist'),
    countCart = document.getElementById('count-cart');
countCart.innerHTML = +localStorage.getItem('numberItemTable') + 1;

function searchDataFromArray(value) {
    let productsItem = document.querySelectorAll('.product-item');
    let productsItemSpan = document.querySelectorAll('.product-item .product-content .product-category');
    productsItemSpan.forEach((element, index) => {
        if (element.innerHTML.includes(value.toLowerCase())) {
            productsItem[index].style.display = 'block';
        } else {
            productsItem[index].style.display = 'none';
        }
    })
};
let btnUp = document.querySelectorAll('.btn-up');
btnUp.forEach((e) => {
    e.addEventListener('click' ,() => {
        scroll({
            top: 0,
            behavior: 'smooth'
        });
    })
})