export function task_4() {
    let car = {
        _brand: null,
        _model: null,
        description() {
            return `${this._brand} ${this._model}`
        },
        set brand(value) {
            this._brand  = value;
        },
        set model(value) {
            this._model  = value;
        }
    }
    console.log(car.description());
    car.brand = 'audi';
    car.model = 'tt';
    console.log(car.description());
}