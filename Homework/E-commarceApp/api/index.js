data = JSON.parse(localStorage.getItem("data")) || [];
const apiUrl = "http://localhost:5050/v1/product/product-list";

fetch(apiUrl)
.then((response) => response.json())
.then((apiData) => {
    localStorage.setItem("data", JSON.stringify(apiData.data));
    console.log(apiData.data);
    tableData();
})
.catch((error) => console.log(error));

function tableData() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = `
              <div class="cart-container">
              <table class="cart">
              <tr>
              <th>product image</th>
              <th>product name</th>
              <th>product desc</th>
              <th>brand</th>
              <th>offers</th>
              <th>category name</th>
              <th>subcategory name</th>
              <th>subchaildcategory name</th>
              <th>price</th>
              </tr>
              ${data.map(
                (item) => `
                <tr>
                <td><img src="${item.product_image}" width=120px height=100px></td>
                <td>${item.product_name}</td>
                <td>${item.product_desc}</td>
                <td>${item.product_brand}</td>
                <td>${item.product_offers}</td>
                <td>${item.category.category_name}</td>
                <td>${item.subCategory.subCategory_name}</td>
                <td>${item.subChildCategory.subChildCategory_name}</td>
                <td>${item.price}</td>
                </tr>`
                ).join("")}
                </table>
                </div>
                `;
}

