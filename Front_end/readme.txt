================================================================================
                            DIGISHOP | MONOLITH CORPORATION
                             Frontend Documentation v3.0
================================================================================

PROJECT REPOSITORY: https://github.com/Riju5380/Monolith-Corporation.git
PROJECT TYPE:       "Phygital" E-Commerce Platform (Physical + Digital)
FRONTEND STACK:     HTML5, CSS3 (Glassmorphism), Vanilla JavaScript
VERSION:            3.0 (Includes Delivery Portal, Multilingual & Dark Mode)

================================================================================
                                1. FOLDER STRUCTURE
================================================================================
Ensure your project folder matches this tree exactly for links to work.

DigiSHOP/
├── index.html                # [Landing] The "Who are you?" Gateway
├── login.html                # [Auth] Universal Login (Customer/Shopkeeper/Admin)
├── signup.html               # [Auth] Animated Split-Screen (Buy vs Sell)
│
├── css/
│   └── style.css             # [Core] The Design Engine (Glassmorphism & Themes)
│
├── js/
│   ├── script.js             # [Core] Global Logic (Dark Mode, Tab Switching)
│   ├── shopkeeper.js         # [Logic] Shopkeeper Modals & Language Translation
│   └── delivery.js           # [Logic] Delivery Dashboard Simulation
│
├── pages/ (Recommended to keep in root for now, but logical separation below)
│   ├── customer.html         # [User] Main Shopping Feed
│   ├── customer_register.html# [User] Signup with GPS Location
│   ├── cart.html             # [User] Shopping Cart
│   ├── payment.html          # [User] Payment Gateway Mockup
│   │
│   ├── shopkeeper.html       # [Partner] Main Dashboard (Orders, Products)
│   ├── shop_register.html    # [Partner] First-time Shop Setup
│   │
│   ├── delivery_login.html   # [Logistics] Delivery Partner Login/Signup
│   ├── delivery_dashboard.html # [Logistics] Live Order Tracking
│   │
│   └── admin.html            # [Admin] Global Statistics
│
└── README.md                 # This File

================================================================================
                                2. COLOR SYSTEM
================================================================================
The CSS uses CSS Variables (`var(--primary)`) to switch themes dynamically.

| ROLE          | PRIMARY COLOR       | HEX CODE  | ACCENT COLOR |
|---------------|---------------------|-----------|--------------|
| CUSTOMER      | Electric Violet     | #6366f1   | Cyan (#06b6d4) |
| SHOPKEEPER    | Sunset Orange       | #f97316   | Amber (#f59e0b) |
| ADMIN         | Emerald Green       | #10b981   | Blue (#3b82f6) |
| DELIVERY BOY  | Crimson Red         | #ef4444   | Dark Red (#991b1b) |
| DARK MODE     | Deep Black          | #050505   | (Default Bg) |
| LIGHT MODE    | Off-White           | #f4f4f5   | (Override)   |

================================================================================
                            3. BACKEND API REQUIREMENTS
================================================================================
Your backend developer must create these Endpoints to make the frontend functional.

--------------------------------------------------------------------------------
A. AUTHENTICATION
--------------------------------------------------------------------------------
[POST] /api/login
       Input:  { email, password, role }
       Output: { success: true, token: "xyz", redirect: "/dashboard" }

[POST] /api/register/customer
       Input:  { name, mobile, password, lat, lng }

[POST] /api/register/shop
       Input:  { owner_id, shop_name, category, description, location }
       Output: { shop_id: 101, qr_string: "DigiShop-101" }

--------------------------------------------------------------------------------
B. SHOPKEEPER DASHBOARD (`shopkeeper.js`)
--------------------------------------------------------------------------------
[GET]  /api/shop/orders
       Returns list of active orders grouped by ID.
       JSON Structure:
       [
         {
           "order_id": 1024,
           "status": "PAID",
           "items": [{"name": "Potato", "price": 2.00}],
           "actions": ["accept", "reject"]
         }
       ]

[POST] /api/product/add
       Input: { name, price, shop_id }

[POST] /api/shop/update-description
       Input: { shop_id, new_description }

--------------------------------------------------------------------------------
C. DELIVERY PORTAL (`delivery_dashboard.html`)
--------------------------------------------------------------------------------
[POST] /api/delivery/connect
       Input:  { delivery_user_id, shop_id, access_password }
       Output: { success: true, shop_name: "Raju Store" }

[GET]  /api/delivery/live-feed
       Polling endpoint to check for "Ready for Delivery" orders.
       Returns:
       {
         "order_id": 1025,
         "customer_address": "12/B Lake View",
         "payment_mode": "COD",
         "amount": 15.00
       }

================================================================================
                            4. SPECIAL FEATURES LOGIC
================================================================================

1. MULTILINGUAL SUPPORT (Shopkeeper Page)
   - Logic File: `shopkeeper.js`
   - Languages: English (en), Hindi (hi), Bengali (bn).
   - Implementation: The frontend stores a JSON dictionary `translations`. 
     When the dropdown changes, it swaps the `innerText` of IDs like `txt_scan`.

2. DARK / LIGHT MODE
   - Logic: Toggles the class `.light-mode` on the `<body>` tag.
   - Default: Dark Mode (for premium aesthetic).
   - Delivery Page: Has separate override styles in `delivery_dashboard.html`.

3. GPS LOCATION (Customer Signup)
   - Uses: `navigator.geolocation.getCurrentPosition()`.
   - Note: This works on `localhost` and `https`. It may be blocked on `http` 
     unless you are testing locally.

================================================================================
                                5. QUICK START
================================================================================
1. Clone the repo:
   git clone https://github.com/Riju5380/Monolith-Corporation.git

2. Open the folder.

3. Launch:
   Double-click `index.html`.

4. Test Flow:
   - Click "Partner" -> Login -> See Orange Theme.
   - Click "Delivery" (in URL type delivery_login.html) -> See Red Theme.
   - Test Language Switcher on Shopkeeper Page.

================================================================================
                            DIGISHOP | MONOLITH CORPORATION
                             Frontend Documentation v3.0
================================================================================

PROJECT REPOSITORY: https://github.com/Riju5380/Monolith-Corporation.git
PROJECT TYPE:       "Phygital" E-Commerce Platform (Physical + Digital)
FRONTEND STACK:     HTML5, CSS3 (Glassmorphism), Vanilla JavaScript
VERSION:            3.0 (Includes Delivery Portal, Multilingual & Dark Mode)

================================================================================
                                1. FOLDER STRUCTURE
================================================================================
Ensure your project folder matches this tree exactly for links to work.

DigiSHOP/
├── index.html                # [Landing] The "Who are you?" Gateway
├── login.html                # [Auth] Universal Login (Customer/Shopkeeper/Admin)
├── signup.html               # [Auth] Animated Split-Screen (Buy vs Sell)
│
├── css/
│   └── style.css             # [Core] The Design Engine (Glassmorphism & Themes)
│
├── js/
│   ├── script.js             # [Core] Global Logic (Dark Mode, Tab Switching)
│   ├── shopkeeper.js         # [Logic] Shopkeeper Modals & Language Translation
│   └── delivery.js           # [Logic] Delivery Dashboard Simulation
│
├── pages/ (Recommended to keep in root for now, but logical separation below)
│   ├── customer.html         # [User] Main Shopping Feed
│   ├── customer_register.html# [User] Signup with GPS Location
│   ├── cart.html             # [User] Shopping Cart
│   ├── payment.html          # [User] Payment Gateway Mockup
│   │
│   ├── shopkeeper.html       # [Partner] Main Dashboard (Orders, Products)
│   ├── shop_register.html    # [Partner] First-time Shop Setup
│   │
│   ├── delivery_login.html   # [Logistics] Delivery Partner Login/Signup
│   ├── delivery_dashboard.html # [Logistics] Live Order Tracking
│   │
│   └── admin.html            # [Admin] Global Statistics
│
└── README.md                 # This File

================================================================================
                                2. COLOR SYSTEM
================================================================================
The CSS uses CSS Variables (`var(--primary)`) to switch themes dynamically.

| ROLE          | PRIMARY COLOR       | HEX CODE  | ACCENT COLOR |
|---------------|---------------------|-----------|--------------|
| CUSTOMER      | Electric Violet     | #6366f1   | Cyan (#06b6d4) |
| SHOPKEEPER    | Sunset Orange       | #f97316   | Amber (#f59e0b) |
| ADMIN         | Emerald Green       | #10b981   | Blue (#3b82f6) |
| DELIVERY BOY  | Crimson Red         | #ef4444   | Dark Red (#991b1b) |
| DARK MODE     | Deep Black          | #050505   | (Default Bg) |
| LIGHT MODE    | Off-White           | #f4f4f5   | (Override)   |

================================================================================
                            3. BACKEND API REQUIREMENTS
================================================================================
Your backend developer must create these Endpoints to make the frontend functional.

--------------------------------------------------------------------------------
A. AUTHENTICATION
--------------------------------------------------------------------------------
[POST] /api/login
       Input:  { email, password, role }
       Output: { success: true, token: "xyz", redirect: "/dashboard" }

[POST] /api/register/customer
       Input:  { name, mobile, password, lat, lng }

[POST] /api/register/shop
       Input:  { owner_id, shop_name, category, description, location }
       Output: { shop_id: 101, qr_string: "DigiShop-101" }

--------------------------------------------------------------------------------
B. SHOPKEEPER DASHBOARD (`shopkeeper.js`)
--------------------------------------------------------------------------------
[GET]  /api/shop/orders
       Returns list of active orders grouped by ID.
       JSON Structure:
       [
         {
           "order_id": 1024,
           "status": "PAID",
           "items": [{"name": "Potato", "price": 2.00}],
           "actions": ["accept", "reject"]
         }
       ]

[POST] /api/product/add
       Input: { name, price, shop_id }

[POST] /api/shop/update-description
       Input: { shop_id, new_description }

--------------------------------------------------------------------------------
C. DELIVERY PORTAL (`delivery_dashboard.html`)
--------------------------------------------------------------------------------
[POST] /api/delivery/connect
       Input:  { delivery_user_id, shop_id, access_password }
       Output: { success: true, shop_name: "Raju Store" }

[GET]  /api/delivery/live-feed
       Polling endpoint to check for "Ready for Delivery" orders.
       Returns:
       {
         "order_id": 1025,
         "customer_address": "12/B Lake View",
         "payment_mode": "COD",
         "amount": 15.00
       }

================================================================================
                            4. SPECIAL FEATURES LOGIC
================================================================================

1. MULTILINGUAL SUPPORT (Shopkeeper Page)
   - Logic File: `shopkeeper.js`
   - Languages: English (en), Hindi (hi), Bengali (bn).
   - Implementation: The frontend stores a JSON dictionary `translations`. 
     When the dropdown changes, it swaps the `innerText` of IDs like `txt_scan`.

2. DARK / LIGHT MODE
   - Logic: Toggles the class `.light-mode` on the `<body>` tag.
   - Default: Dark Mode (for premium aesthetic).
   - Delivery Page: Has separate override styles in `delivery_dashboard.html`.

3. GPS LOCATION (Customer Signup)
   - Uses: `navigator.geolocation.getCurrentPosition()`.
   - Note: This works on `localhost` and `https`. It may be blocked on `http` 
     unless you are testing locally.

================================================================================
                                5. QUICK START
================================================================================
1. Clone the repo:
   git clone https://github.com/Riju5380/Monolith-Corporation.git

2. Open the folder.

3. Launch:
   Double-click `index.html`.

4. Test Flow:
   - Click "Partner" -> Login -> See Orange Theme.
   - Click "Delivery" (in URL type delivery_login.html) -> See Red Theme.
   - Test Language Switcher on Shopkeeper Page.
