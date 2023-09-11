
data = JSON.parse(localStorage.getItem("data")) || [];

const apiUrl = "http://localhost:5050/v1/product/product-list";
fetch(apiUrl)
.then((response) => response.json())
.then((apiData) => {

    localStorage.setItem("data", JSON.stringify(apiData.data));
    console.log(apiData.data);
    renderTable();

})
.catch((error) => console.log(error));

function renderTable() {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = `
              <div class="table-container">
              <table class="tbl">
              <tr>
              <th>product_name</th>
              <th>product_desc</th>
              <th>product_brand</th>
              <th>product_offers</th>
              <th>price</th>
              </tr>
              ${data.map(
                (item) => `
                <tr>
                <td>${item.product_name}</td>
                <td>${item.product_desc}</td>
                <td>${item.product_brand}</td>
                <td>${item.product_offers}</td>
                <td>${item.price}</td>
                </tr>`
                ).join("")}
                </table>
                </div>
                `;
  }