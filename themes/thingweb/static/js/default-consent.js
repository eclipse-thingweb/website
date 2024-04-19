window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

if (localStorage.getItem('consentMode') === null) {
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'denied',
    });
} 
else {
    gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')))
}