export function task_6() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let birthYear = document.getElementById('birthYear').value;
        let email = document.getElementById('email').value;

        let profile = {
            _name: name,
            _surname: surname,
            _birthYear: birthYear,
            _email: email,
            get name() {
                return this._name;
            },
            set name(value) {
                this._name = value;
            },
            get surname() {
                return this._surname;
            },
            set surname(value) {
                this._surname = value;
            },
            get birthYear() {
                return this._birthYear;
            },
            set birthYear(value) {
                this._birthYear = value;
            },
            get email() {
                return this._email;
            },
            set email(value) {
                this._email = value;
            },

        };

        let textarea = document.createElement('textarea');
        textarea.value =  `Name: ${profile.name}\nSurname: ${profile.surname}\nBirth Year: ${profile.birthYear}\nEmail: ${profile.email}`;
        document.body.appendChild(textarea);
        textarea.style.width = '100%';

        console.log(textarea.value);
    });
}