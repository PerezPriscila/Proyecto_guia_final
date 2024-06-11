document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const customerName = document.getElementById('customerName').value;
    const purchaseValue = parseFloat(document.getElementById('purchaseValue').value);
    let finalAmount = purchaseValue;

    if (purchaseValue > 150) {
        finalAmount = purchaseValue * 0.90;
    } else if (purchaseValue > 75) {
        finalAmount = purchaseValue * 0.95;
    }

    document.getElementById('displayName').textContent = customerName;
    document.getElementById('displayPurchaseValue').textContent = purchaseValue.toFixed(2);
    document.getElementById('displayFinalAmount').textContent = finalAmount.toFixed(2);
});
