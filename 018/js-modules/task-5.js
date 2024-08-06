export function task_5() {
    class Character {
        constructor(
            name = '',
            race = '',
            skills = [],
        ) {
            this.name = name;
            this.race = race;
            this.skills = skills;
        }
        stepRight(){
            return 'step right';
        }
        stepLeft(){
            return 'step left';
        }
        jump(){
            return 'jump'
        }
        displayInfo() {
            return `Name: ${this.name}, Race: ${this.race}, Skills: ${this.skills.join(', ')}`;
        }

    }
    class Elf extends Character {
        constructor(name, skills, bowSkill) {
            super(name, 'elf', skills);
            this.bowSkill = bowSkill;
        }

        jump() {
            return 'silent jump';
        }

        shootArrow() {
            return `arrow with ${this.bowSkill} power`;
        }
        displayInfo() {
            return `${super.displayInfo()}, Bow Skill: ${this.bowSkill}`;
        }
    }

    class Human extends Character {
        constructor(name, skills, magicPower) {
            super(name, 'human', skills);
            this.magicPower = magicPower;
        }

        jump() {
            return 'high jump';
        }

        castSpell() {
            return `spell with ${this.magicPower} power`;
        }
        displayInfo() {
            return `${super.displayInfo()},  Magic Power: ${this.magicPower}`;
        }
    }
    const hero1 = new Elf('Legolas',['Endless Arrows', 'Charm', 'Immortality'], 'high' );
    const hero2 = new Human('Harry Potter', ['magic', 'Dumbledore`s protection'], 'high');
    console.log(hero1.displayInfo());
    console.log(hero2.displayInfo());
    console.log(hero1.shootArrow());
    console.log(hero2.castSpell());
}