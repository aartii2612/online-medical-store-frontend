        // Cart data
        const cart = [];
        let total = 0;

        // Function to add an item to the cart
        function addToCart(productName, price) {
            cart.push({ productName, price });
            total += price;

            // Update the cart display
            updateCartDisplay();
        }

        // Function to remove an item from the cart
        function removeFromCart(index) {
            const removedItem = cart.splice(index, 1)[0];
            total -= removedItem.price;

            // Update the cart display
            updateCartDisplay();
        }

        // Function to update the cart display
        function updateCartDisplay() {
            const cartItemsElement = document.getElementById('cartItems');
            const cartTotalElement = document.getElementById('cartTotal');

            // Clear the current cart display
            cartItemsElement.innerHTML = '';

            // Populate the cart display with the current items
            cart.forEach((item, index) => {
                const listItem = document.createElement('li');
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeFromCart(index);
                listItem.className = 'cart-item';
                listItem.textContent = `${item.productName} - Rs.${item.price.toFixed(2)}`;
                listItem.appendChild(removeButton);
                cartItemsElement.appendChild(listItem);
            });

            // Update the total
            cartTotalElement.textContent = total.toFixed(2);
        }

        // Function to toggle the cart content visibility
        function toggleCart() {
            const cartContent = document.getElementById('cartContent');
            cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
        }