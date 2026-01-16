1. Updated File Structure
Please ensure these endpoints correspond to the following pages:

index.html -> Landing Page

login.html -> Universal Login

shop_register.html (NEW) -> First-time setup for Shopkeepers.

customer.html -> Main Shopping Feed.

cart.html (NEW) -> Customer Cart Review.

payment.html (NEW) -> Payment Gateway Simulation.

shopkeeper.html -> Partner Dashboard (Now supports Grouped Orders & Product Adding).

admin.html -> Admin Stats.

2. API Endpoints & Data Requirements
A. Authentication & Onboarding
1. Shop Registration

Page: shop_register.html

Endpoint: POST /api/shop/register

Frontend sends JSON:

JSON

{
  "owner_id": 123,           // From Login Session
  "shop_name": "Raju Store",
  "category": "Grocery",
  "description": "Fresh veg...",
  "location": { "lat": 22.57, "lng": 88.36 }
}
Backend Action: Create shop entry, generate QR string, redirect to shopkeeper.html.

B. Customer Experience
2. Cart Management

Page: cart.html

Endpoint: GET /api/cart

Expected Data Structure:

JSON

{
  "items": [
    {
      "product_id": 55,
      "name": "Fresh Potato",
      "shop_name": "Green Valley Veggies",
      "price": 2.00,
      "qty": 2,
      "total": 4.00
    }
  ],
  "grand_total": 9.50
}
3. Payment Processing

Page: payment.html

Endpoint: POST /api/payment/process

Frontend sends JSON:

JSON

{
  "user_id": 456,
  "amount": 9.50,
  "method": "upi" // or 'card', 'cod'
}
Backend Action: Create Order records, Clear Cart, Return "Success".

C. Shopkeeper Dashboard (Major Updates)
4. Add New Product

Page: shopkeeper.html (Modal Window)

Endpoint: POST /api/product/add

Frontend sends FormData:

shop_id: 101

name: "Basmati Rice"

price: 10.00

image: [Binary File]

5. Get Active Orders (Grouped)

Page: shopkeeper.html

Endpoint: GET /api/shop/orders

Requirement: The frontend expects orders to be grouped by Order ID (one order containing multiple items).

Expected Data Structure:

JSON

[
  {
    "order_id": 1024,
    "customer_name": "Rahul",
    "total_amount": 12.00,
    "payment_status": "PAID",
    "items": [
      { "name": "Potato", "qty": "2kg", "price": 2.00 },
      { "name": "Rice", "qty": "5kg", "price": 10.00 }
    ],
    "actions": ["accept", "reject"]
  },
  {
    "order_id": 1025,
    "customer_name": "Priya",
    "total_amount": 5.00,
    "payment_status": "COD", // Frontend will color this Orange
    "items": [
      { "name": "Headphone", "qty": "1", "price": 5.00 }
    ],
    "actions": ["mark_delivered"]
  }
]
3. Logic Notes for Backend Developer
QR Code Logic: The frontend uses https://api.qrserver.com/v1/create-qr-code/?data=[YOUR_STRING] to display QRs.

Backend Task: When sending shop details, just send the unique string (e.g., shop_id_101). The frontend will handle the image generation.

Order Status Colors:

If payment_status == "PAID" -> Text is Green.

If payment_status == "COD" or "PENDING" -> Text is Orange.

Cart Persistence: Decide if the Cart is stored in the Database (Users table) or if the Frontend should use localStorage. (Database recommended for cross-device sync).