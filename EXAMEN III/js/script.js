const cart = [];
let total = 0; // Variable para mantener el total del pedido

function addToCart(item, price) {
  const priceWithoutTax = price;
  const priceWithTax = price * 1.16;

  cart.push({ item, priceWithoutTax, priceWithTax });
  document.getElementById(
    "cart-items"
  ).innerHTML += `<li>${item} - $${priceWithoutTax.toFixed(
    2
  )} (Sin IVA) - $${priceWithTax.toFixed(2)} (Con IVA)</li>`;

  // No necesitamos agregar el precio con IVA al total aquí, lo haremos en submitOrder
}

function submitOrder() {
  const name = document.getElementById("customer-name").value;
  const address = document.getElementById("customer-address").value;
  if (name && address && cart.length > 0) {
    total = 0; // Reiniciamos el total antes de recalcularlo

    // Calculamos el total sumando el precio con IVA de cada elemento en el carrito
    cart.forEach((item) => {
      total += item.priceWithTax;
    });

    document.getElementById("order-name").textContent = "Nombre: " + name;
    document.getElementById("order-address").textContent =
      "Dirección: " + address;
    document.getElementById("order-summary").innerHTML = cart
      .map(
        (item) =>
          `<li>${item.item} - $${item.priceWithoutTax.toFixed(
            2
          )} (Sin IVA) - $${item.priceWithTax.toFixed(2)} (Con IVA)</li>`
      )
      .join("");
    document.getElementById("order-total").textContent = total.toFixed(2);
    document.getElementById("order-details").style.display = "block";
  } else {
    alert(
      "Por favor, completa todos los campos y añade al menos un artículo al carrito."
    );
  }
}
      