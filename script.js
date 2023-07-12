const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
var currentDate = new Date();

// to show sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

// to close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

// to change theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    // themeToggler.querySelector("span").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === "Declined"
            ? "danger"
            : order.shipping === "Pending"
                ? "warning"
                : "success"
        }">${order.shipping}</td>
                        <td class="primary details" >Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});

// Get the current date
var currentDate = new Date();

// Format the date as "YYYY-MM-DD"
var formattedDate = currentDate.toISOString().split("T")[0];

// Set the formatted date as the default value for the date input field
document.getElementById("dateInput").value = formattedDate;