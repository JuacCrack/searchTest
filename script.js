document.addEventListener("DOMContentLoaded", function() {

    window.location.href = "#";

    const array = [
        { image: "img4.jpg", name: "Café" },
        { image: "img1.jpg", name: "Hamburguesa" },
        { image: "img3.jpg", name: "Sandwich" },
        { image: "img2.jpg", name: "Pizza" },
        { image: "img5.jpg", name: "Cookie" },
    ];

    const productNames = array.map(item => item.name).join(", ");

    alert("Productos que puedes buscar: " + productNames);

    const searchInput = document.getElementById("search");
    const searchBox = document.querySelector(".search-box");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredArray = array.filter(item => item.name.toLowerCase().includes(searchTerm));

        searchBox.innerHTML = "";

        filteredArray.forEach(item => {
            const searchItem = document.createElement("div");
            searchItem.classList.add("search-item");
            
            searchItem.setAttribute("data-img", item.image);
            searchItem.setAttribute("data-name", item.name);

            const searchImg = document.createElement("div");
            searchImg.classList.add("search-img");
            searchImg.style.backgroundImage = `url(${item.image})`;
            searchImg.style.backgroundSize = "cover";
            searchImg.style.backgroundPosition = "center";
            searchImg.style.backgroundRepeat = "no-repeat";

            const searchDetails = document.createElement("div");
            searchDetails.classList.add("search-details");
            searchDetails.classList.add("center");
            searchDetails.textContent = item.name;

            searchItem.addEventListener("click", function() {
                const imgData = searchItem.getAttribute("data-img");
                const nameData = searchItem.getAttribute("data-name");
                
                const popupImg = document.querySelector(".popup-img");
                const popupName = document.querySelector(".popup-name");
                
                popupImg.style.backgroundImage = `url(${imgData})`;
                popupImg.style.backgroundSize = "cover";
                popupImg.style.backgroundPosition = "center";
                popupImg.style.backgroundRepeat = "no-repeat";
                popupName.textContent = nameData;
            
                window.location.href = "#popup";
            });
            

            searchItem.appendChild(searchImg);
            searchItem.appendChild(searchDetails);
            searchBox.appendChild(searchItem);
        });
    });

    searchInput.addEventListener("focus", function() {
        searchBox.style.display = "block";
    });

    searchInput.addEventListener("blur", function() {
        setTimeout(function() {
            searchBox.style.display = "none";
        }, 200);
    });
});
