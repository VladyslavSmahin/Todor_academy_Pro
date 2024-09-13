export function task_3() {
    class Shape {
        calculateArea() {
            return 'Area calculating';
        }
    }

    class Circle extends Shape {
        constructor(radius) {
            super()
            this.radius = radius;
        }

        calculateArea() {
            return Math.PI * this.radius * this.radius;
        }
    }

    const circle1 = new Circle(5);
    const circle2 = new Circle(10);
    console.log(circle1.calculateArea());
    console.log(circle2.calculateArea());
}