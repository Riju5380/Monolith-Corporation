/* =========================================
   FILE: delivery.js
   PURPOSE: Logic for Delivery Boy Portal
   ========================================= */

function connectToShop() {
    const id = document.getElementById('shopID').value;
    const pass = document.getElementById('shopPass').value;

    if(id && pass) {
        // UI: Hide Connect Panel, Show Dashboard
        document.getElementById('step-connect').classList.add('hidden');
        document.getElementById('step-dashboard').classList.remove('hidden');

        // SIMULATION: Simulate shopkeeper sending an order after 3 seconds
        setTimeout(() => {
            simulateIncomingOrder();
        }, 3000);
    } else {
        alert("Please enter Shop ID and Password");
    }
}

function simulateIncomingOrder() {
    // 1. Remove "No orders" text
    const noOrders = document.getElementById('no-orders-msg');
    if(noOrders) noOrders.style.display = 'none';

    // 2. Create the Order Card HTML
    const orderHTML = `
    <div class="glass-panel slide-in" style="border-left: 5px solid #ef4444; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
            <div>
                <h2 style="color: white;">Order #1025</h2>
                <p style="color: #aaa;">From: Raju's General Store</p>
            </div>
            <div style="text-align: right;">
                <h3 style="color: #ef4444;">COD: $15.00</h3>
                <small>2.5 km away</small>
            </div>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 15px;">
            <p style="color: #ddd;"><strong>Customer:</strong> Priya Singh</p>
            <p style="color: #aaa;">📍 12/B, Lake View Road, Sector 5 (Opposite City Mall)</p>
            <br>
            <p style="color: #ddd;"><strong>Items:</strong></p>
            <ul style="padding-left: 20px; color: #aaa; margin-top: 5px;">
                <li>1x Bluetooth Headset</li>
            </ul>
        </div>

        <div style="display: flex; gap: 10px;">
            <button class="btn" style="flex: 1; border: 1px solid #fff;">Navigate 🗺️</button>
            <button class="btn btn-primary" style="flex: 1; background: #ef4444;" onclick="completeDelivery(this)">Mark Delivered</button>
        </div>
    </div>
    `;

    // 3. Inject into container
    document.getElementById('orders-container').innerHTML += orderHTML;

    // 4. Play a sound (Optional browser permission needed, using alert for now)
    // alert("New Delivery Request Received!");
}

function completeDelivery(btn) {
    // Change button state
    btn.innerHTML = "Completed ✅";
    btn.style.background = "#10b981"; // Green
    
    // Fade out effect
    setTimeout(() => {
        const card = btn.closest('.glass-panel');
        card.style.opacity = '0.5';
        card.style.pointerEvents = 'none'; // Disable clicking
    }, 1000);
}