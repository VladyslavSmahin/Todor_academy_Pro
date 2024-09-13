export function task_5() {
    let product = {
        _name: '',
        _price: '',
        set name(value) {
            this._name  = value;
        },
        set price(value) {
            this._price  = value;
        },
        applyDiscount(discount) {
            return this._price -  this._price*discount/100;
        },
    }
    product.name = 'Кавунчик';
    product.price = '200'
    console.log(product.applyDiscount(50));
}