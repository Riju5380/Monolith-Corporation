/* =========================================
   FILE: shopkeeper.js
   PURPOSE: Handle Modals, Language, and Dark Mode
   ========================================= */

console.log("Shopkeeper Logic Loaded Successfully");

// --- 1. LANGUAGE DATA ---
const translations = {
    en: {
        addProd: "+ Add Product",
        editDesc: "Edit Description",
        scan: "Scan to order",
        share: "Share Shop Link",
        activeOrders: "Active Orders",
        download: "⬇ Download QR Code"
    },
    hi: {
        addProd: "+ उत्पाद जोड़ें",
        editDesc: "विवरण संपादित करें",
        scan: "ऑर्डर करने के लिए स्कैन करें",
        share: "दुकान साझा करें",
        activeOrders: "सक्रिय आदेश",
        download: "⬇ क्यूआर कोड डाउनलोड करें"
    },
    bn: {
        addProd: "+ পণ্য যোগ করুন",
        editDesc: "বিবরণ এডিট করুন",
        scan: "অর্ডার করতে স্ক্যান করুন",
        share: "দোকান শেয়ার করুন",
        activeOrders: "সক্রিয় অর্ডার",
        download: "⬇ QR কোড ডাউনলোড করুন"
    }
};

// --- 2. LANGUAGE FUNCTION ---
function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];

    if (t) {
        if(document.getElementById('txt_add_prod')) 
            document.getElementById('txt_add_prod').innerText = t.addProd;

        if(document.getElementById('txt_edit_desc')) 
            document.getElementById('txt_edit_desc').innerText = t.editDesc;

        if(document.getElementById('txt_scan')) 
            document.getElementById('txt_scan').innerText = t.scan;

        if(document.getElementById('txt_share')) 
            document.getElementById('txt_share').innerText = t.share;

        if(document.getElementById('txt_active_orders')) 
            document.getElementById('txt_active_orders').innerText = t.activeOrders;
        
        const dlBtn = document.querySelector('.sm-btn');
        if(dlBtn) dlBtn.innerText = t.download;
    }
}

// --- 3. DARK MODE FUNCTION ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// --- 4. MODAL FUNCTIONS (POPUPS) ---

function openProductModal() {
    document.getElementById('modal-product').style.display = 'flex';
}

function openEditModal() {
    const currentText = document.getElementById('displayDesc').innerText;
    document.getElementById('descInput').value = currentText;
    document.getElementById('modal-edit').style.display = 'flex';
}

function closeAllModals() {
    document.getElementById('modal-product').style.display = 'none';
    document.getElementById('modal-edit').style.display = 'none';
}

// --- 5. SAVE ACTIONS ---

function saveDescAction() {
    const newText = document.getElementById('descInput').value;
    if (newText) {
        document.getElementById('displayDesc').innerText = newText;
    }
    closeAllModals();
}

function saveProductAction() {
    alert("Product 'Saved' locally (Simulated)");
    closeAllModals();
}

// --- 6. UTILITIES ---

function downloadQR() {
    const qrSrc = document.getElementById('qrImage').src;
    window.open(qrSrc, '_blank');
}

function markDelivered(btn) {
    btn.innerHTML = "Completed ✅";
    btn.style.background = "#10b981"; // Green
    setTimeout(() => {
        btn.closest('.order-card').style.opacity = "0.5";
    }, 1000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('custom-modal')) {
        closeAllModals();
    }
};