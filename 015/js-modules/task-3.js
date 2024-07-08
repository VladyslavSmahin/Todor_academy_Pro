export function task_3() {
    let circle = {
        _radius: 2,
        get square() {
            return Math.PI * this._radius * this._radius
        },
        get radius() {
            return this._radius
        },
        set radius(value) {
            this._radius = value;
        }
    }
    console.log(circle.square);
    console.log(circle.radius);
    circle.radius = 3;
    console.log(circle.radius);
    console.log(circle.square);
}
