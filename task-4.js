console.log("\n");
console.log("Задача 4. Доставка товару");

// 1) Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// 2) Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// 3)Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// 3) Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// 4) Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// -------------------------------------------------------

function getShippingCost(country) {
    let price = 0;
    switch (country) {
        case "China":
            price = 100;
            return `Shipping to ${country} will cost ${price} credits`;
        // в даному випадку break не потрібен, бо return вже і так видає результат і припиняє дію. Однак return потрібен, коли б в коді не було return. Тому, залишаю надлишковий код break тут для власної наглядності закоментованим.
            // break;
        case "Chile": 
            price = 250;
             return`Shipping to ${country} will cost ${price} credits`;
            // break;
        case "Australia":
            price = 170;
             return`Shipping to ${country} will cost ${price} credits`;
            // break;
        case "Jamaica": 
            price = 120;
             return`Shipping to ${country} will cost ${price} credits`;
            // break;
        default:  return "Sorry, there is no delivery to your country";
}
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"