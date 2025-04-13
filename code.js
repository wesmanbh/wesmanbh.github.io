async function LookUpProduct() {
    const input = document.getElementById("productInput").value.trim();
    const result = document.getElementById("result");
    const name = document.getElementById("name");
    const score = document.getElementById("score");
    const tags = document.getElementById("tags");
    const alt = document.getElementById("alternatives");
    try {
        const response = await fetch('https://world.openfoodfacts.net/api/v2/product/{encodeURIcom}'); 
        const data = await response.json();
        if (data.products && data.products.length > 0) {
            const product = data.products[0];
            name.textContent = product_name;
            
            const nutriScore = (product.nutriscore_grade) || "what is this product";
            const ecoScore = (product.ecoscore_grade)

        }
    }
    catch {
        console.log("Error loading products");
    }
}