function updatePrice() {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=shapeshift-fox-token&vs_currencies=usd")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const badgeBackgroundColor = [255, 0, 0, 255];
            const badgeText = data['shapeshift-fox-token'].usd.toString();
            // In Manifest V3, use `chrome.action` instead of `chrome.browserAction`
            chrome.action.setBadgeBackgroundColor({ color: badgeBackgroundColor });
            chrome.action.setBadgeText({ text: badgeText });
        })
        .catch(error => {
            console.error(`There has been a problem with your fetch operation: ${error.message}`);
        });
}

updatePrice();
setInterval(updatePrice, 60000);

