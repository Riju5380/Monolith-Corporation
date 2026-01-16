// --- Dark Mode Logic ---
// Check if user has a preference saved
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// --- Shopkeeper Language Logic ---
const translations = {
    en: {
        title: "Active Orders",
        scan: "Scan to order",
        share: "Share Shop"
    },
    hi: {
        title: "सक्रिय आदेश (Orders)",
        scan: "ऑर्डर करने के लिए स्कैन करें",
        share: "दुकान साझा करें"
    },
    bn: {
        title: "সক্রিয় অর্ডার",
        scan: "অর্ডার করতে স্ক্যান করুন",
        share: "দোকান শেয়ার করুন"
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    
    // Update text based on selection
    if(translations[lang]) {
        document.getElementById('ordersTitle').innerText = translations[lang].title;
        document.getElementById('scanText').innerText = translations[lang].scan;
        document.getElementById('shareBtn').innerText = translations[lang].share;
    }
}