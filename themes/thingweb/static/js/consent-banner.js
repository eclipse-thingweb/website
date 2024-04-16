const analyticsAcceptBtn = document.getElementById("accept-analytics-btn")
const analyticsDeclineBtn = document.getElementById("decline-analytics-btn")
const cookieBanner = document.querySelector(".analytics-banner")
const manageCookiesLink = document.querySelector(".manage-cookies-link")

// Show banner if the user has not set any preference
if(localStorage.getItem('consentMode') === null){
    cookieBanner.classList.remove("hidden")
}

//If analytics are rejected, close the banner and update the new user preference
analyticsDeclineBtn.addEventListener("click", () => {
    cookieBanner.classList.add("hidden")

    const consentPreferences = {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'denied',
    }

    updateConsentMode(consentPreferences)
})

//If analytics are accepted, close the banner and update the new user preference
analyticsAcceptBtn.addEventListener("click", () => {
    cookieBanner.classList.add("hidden")

    const consentPreferences = {
        'ad_storage': 'denied',
        'analytics_storage': 'granted',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'denied',
    }

    updateConsentMode(consentPreferences)
})

// Open analytics banner when clicking on the cookie manager link
manageCookiesLink.addEventListener("click", () => {
    cookieBanner.classList.remove("hidden")
})

/**
 * Update the user preferences to grant or decline google analytics tracking
 * @param { Object } preferences 
 */
function updateConsentMode(preferences) {
    gtag('consent', 'update', preferences)
    localStorage.setItem('consentMode', JSON.stringify(preferences))
}