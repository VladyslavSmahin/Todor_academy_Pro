const introduce = (name, age, city) => `Привіт, мене звати ${name}. Мені ${age} років і я живу в ${city}`;
console.log(introduce('Vlad', 29, 'Kyiv'));

const shoppingList = (items) => items.map(item => `- [${item}]`).join('\n');
console.log(shoppingList(['banana', 'apple', 'strawberry', 'chery']));

const highlight = (strings, ...values) => strings.reduce((res, str, i) =>
    res + str + (values[i] ? `<strong>${values[i]}</strong>` : ''), '');
const name = 'John';
const age = 30;
const message = highlight`hi, my name is ${name} i'm ${age} years old.`;
console.log(message)

function createCard(title, description) {
    return `<div class="card">
  <h2>${title}</h2>
  <p>${description}</p>
</div>`
}

console.log(createCard('Cola Zero', '2l'));

const generateURL = (protocol, domain, path) => `${protocol}://${domain}/${path}`;
console.log(generateURL('https', 'google.com', 'search'));

const emphasize = (strings, ...values) => {
    return strings.reduce((res, str, i) => {
        res = res + str;
        if (strings[i] === 'важливо') {
            res +=  `<strong>${values[i]}</strong>`
        } else if (values[i]) {
            res +=  `<em>${values[i]}</em>`
        } return res;
    }, '')

}
const newStr = emphasize`Що важливо, цей рік був останній для ${name}`;
console.log(newStr);