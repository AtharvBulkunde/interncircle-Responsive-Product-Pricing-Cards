```javascript
const billingToggle = document.getElementById("billingToggle");

const monthlyLabel = document.getElementById("monthlyLabel");
const yearlyLabel = document.getElementById("yearlyLabel");

const prices = document.querySelectorAll(".amount");
const billingTexts = document.querySelectorAll(".billing-text");


function updatePricing() {

    const yearly = billingToggle.checked;

    prices.forEach((price) => {

        price.style.opacity = "0";

        setTimeout(() => {

            if (yearly) {
                price.textContent = price.dataset.yearly;
            } else {
                price.textContent = price.dataset.monthly;
            }

            price.style.opacity = "1";

        }, 150);
    });


    billingTexts.forEach((text) => {

        if (yearly) {
            text.textContent = "Billed annually";
        } else {
            text.textContent = "Billed monthly";
        }

    });


    if (yearly) {

        monthlyLabel.classList.remove("active-label");
        yearlyLabel.classList.add("active-label");

    } else {

        yearlyLabel.classList.remove("active-label");
        monthlyLabel.classList.add("active-label");

    }
}


billingToggle.addEventListener("change", updatePricing);


// Button interaction
const buttons = document.querySelectorAll(".choose-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const originalText = button.textContent;

        button.textContent = "✓ Selected";

        setTimeout(() => {
            button.textContent = originalText;
        }, 1500);

    });

});
```
