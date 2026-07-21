const searchProducts = require("./productSearch");

async function getAIRecommendation(requirement) {

    const products = await searchProducts(requirement);

    if (products.length === 0) {
        return "❌ Sorry, no products found.";
    }

    // Create a list of products with best platform
    const recommendations = products.map(product => {

        const bestPlatform = product.platforms.reduce((best, current) => {

            const bestScore =
                (best.rating || 0) * 100 - (best.price || 0) / 1000;

            const currentScore =
                (current.rating || 0) * 100 - (current.price || 0) / 1000;

            return currentScore > bestScore ? current : best;

        });

        return {
            name: product.name,
            price: bestPlatform.price,
            rating: bestPlatform.rating,
            store: bestPlatform.name,
            link: bestPlatform.link,
            score:
                (bestPlatform.rating || 0) * 100 -
                (bestPlatform.price || 0) / 1000
        };

    });

    recommendations.sort((a, b) => b.score - a.score);

    const top = recommendations.slice(0, 3);

    let message = "🏆 SmartPick AI Recommendations\n\n";

    top.forEach((item, index) => {

        const medal =
            index === 0 ? "🥇" :
            index === 1 ? "🥈" : "🥉";

        message += `${medal} ${item.name}\n`;
        message += `💰 Price: ₹${item.price}\n`;
        message += `⭐ Rating: ${item.rating || "N/A"}\n`;
        message += `🏬 Store: ${item.store}\n`;

        if (index === 0) {
            message +=
`✅ Why this is the Best Choice:
• Excellent value for money
• High customer rating
• Matches your budget
• Recommended by SmartPick\n`;
        }

        message += "\n";
    });

    return message;
}

module.exports = getAIRecommendation;