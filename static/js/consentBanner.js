window.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }

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

    gtag('js', new Date());
    gtag('config', 'G-FTBPVB8Z65');

    const consentBanner = document.createElement('div');
    consentBanner.id = 'analytics-banner';
    consentBanner.classList.add('analytics-banner', 'hidden');
    consentBanner.innerHTML = `
    <div class="analytics-banner__disclaimer">
        <h3>Site Analytics Consent</h3>
        <p>We are an open-source project under the Eclipse Foundation. This means that without your consent
            we don't track anything at all and even with consent we don't track any personal information, we
            only look at the website usage statistics. For more details, check out the <a
                href="https://www.eclipse.org/legal/privacy.php">Eclipse Foundation Privacy Policy.</a></p>
        <p>You can change your preference later at the <b>Manage Consent</b> link in the settings menu.</p>
    </div>
    <form action="#" class="analytics-banner__interactions">
        <button type="button" class="btn btn-primary btn-outline" id="decline-analytics-btn">Decline</button>
        <button type="button" class="btn btn-primary" id="accept-analytics-btn">Allow</button>
    </form>`;

    document.body.appendChild(consentBanner);


    const analyticsAcceptBtn = document.getElementById("accept-analytics-btn")
    const analyticsDeclineBtn = document.getElementById("decline-analytics-btn")
    const analyticsBanner = document.getElementById("analytics-banner")

    // Polling mechanism for the manage consent link
    const checkConsentLink = setInterval(function () {
        const manageAnalyticsLink = document.getElementById("consent-link");

        if (manageAnalyticsLink) {
            manageAnalyticsLink.addEventListener("click", () => {
                analyticsBanner.classList.remove("hidden");
            });
            clearInterval(checkConsentLink);  // Stop polling once the element is found
        }
    }, 500); // Check every 500ms


    // Show banner if the user has not set any preference
    if (localStorage.getItem('consentMode') === null) {
        analyticsBanner.classList.remove("hidden")
    }

    //If analytics are rejected, close the banner and update the new user preference
    analyticsDeclineBtn.addEventListener("click", () => {
        analyticsBanner.classList.add("hidden")

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
        analyticsBanner.classList.add("hidden")

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

    /**
     * Update the user preferences to grant or decline google analytics tracking
     * @param { Object } preferences 
     */
    function updateConsentMode(preferences) {
        gtag('consent', 'update', preferences)
        localStorage.setItem('consentMode', JSON.stringify(preferences))
    }
}