export function task_2() {
    const PizzaOrder = {
        status: 'preparing',
        constructor: function (orderId, customerEmail, products) {
            this.orderId = orderId;
            this.customerEmail = customerEmail;
            this.products = products;
            return this
        },
        total: function () {
            return this.products.reduce((total, product) => total + product.price, 0)
        },
        checkStatusOfDelivery: function () {
            return this.status;
        }
    }
    const pizzaOrder1 = Object.create(PizzaOrder).constructor(
        1,
        'vlad@gmail.com',
        [
            {
                productId: '1',
                name: 'meat',
                price: 20,
                options: '100g',
            },
            {
                productId: '2',
                name: 'cheese',
                price: 10,
                options: '100g',
            },
            {
                productId: '3',
                name: 'ananas',
                price: 5,
                options: '50g',
            },
        ]
    );
    const pizzaOrder2 = Object.create(PizzaOrder).constructor(
        2,
        'nikita@gmail.com',
        [
            {
                productId: '1',
                name: 'meat',
                price: 40,
                options: '200g',
            },
            {
                productId: '2',
                name: 'cheese',
                price: 20,
                options: '200g',
            },
            {
                productId: '3',
                name: 'ananas',
                price: 15,
                options: '150g',
            },
        ]
    )
    pizzaOrder1.status = 'ready'
    console.log(pizzaOrder1);
    console.log(pizzaOrder1.total());
    console.log(pizzaOrder1.checkStatusOfDelivery());
    console.log(pizzaOrder2);
    console.log(pizzaOrder2.total());
    console.log(pizzaOrder2.checkStatusOfDelivery());
}