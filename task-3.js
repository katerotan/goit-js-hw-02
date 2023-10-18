console.log("\n");
console.log("Задача 3. Перевірка спаму");

// 1) Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.

// 1.1) Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// 3) Доповни код функції таким чином, що:

// - Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// - Якщо в рядку відсутні заборонені слова, функція повертає буль false

// 4)Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// -------------------------------------------------------


function checkForSpam(message) {
 
    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
        //зрозуміла підвох, що тут потрібно spam і sale одразу написати у тому регістрі, до якого приводиш рядок, тому у мене маленькими і .toLowerCase(); якщо шукаємл SPAM і SALE, тоді to UpperCase() ставимо.
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
