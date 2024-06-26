const person = {
    name: "Corwin",
    universe: "Amber",
    occupation: "prince",
    skills: {
        1: 'Shadow Walking',
        2: 'Immortality and regeneration',
        3: 'Using Trump Cards',
        4: 'Strength and Agility',
        5: 'Magic',
        6: 'Memory and mental stability'
    }
};
console.log(
    person.name,
    person.universe,
    person.occupation,
    'skills: ' +
    JSON.stringify(person.skills)
);

person.introduce = () => {
    console.log(`Hello, my name is  ${person.name}`);
}
person.introduce();

const stringPerson = JSON.stringify(person);
console.log(stringPerson);

const parsePerson = JSON.parse(stringPerson);

console.log(parsePerson);

delete person.name;
console.log(person);
console.log('skills' in person);
console.log('universe' in person);
console.log('2' in person.skills);
console.log('7' in person.skills);