console.log("Задача 1. Замовлення дроїдів");

// 1) Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// 2) Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// 3) Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
//
// 4) Доповни функцію таким чином:

// 4.1) Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// 4.2) Додай перевірку, чи зможе клієнт оплатити замовлення:
// - якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// - в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.
// 5) Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// --------------------Через (if...else) розгалуження-----------------------------------
console.log("Через (if...else) розгалуження");

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return "Insufficient funds!"
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`
    }

}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


// --------------------Через тернаний оператор (додала T в кожну змінну)-----------------------------------
console.log("\n");
console.log("Через тернаний оператор (додала T в кожну змінну)");

function makeTransactionT(quantityT, pricePerDroidT, customerCreditsT) {
    
    const totalPriceT = quantityT * pricePerDroidT;

    return totalPriceT > customerCreditsT ? "Insufficient funds!":`You ordered ${quantityT} droids worth ${totalPriceT} credits!`
    
}
console.log(makeTransactionT(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransactionT(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransactionT(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransactionT(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransactionT(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

