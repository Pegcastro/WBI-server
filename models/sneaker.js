class Sneaker {
    constructor(id, name, brand, model, price, date, store, image_url) {
        this.id = id;
        this.name = name;
        this.brand =  brand;
        this.model = model;
        this.price = price;
        this.date = date;
        this.store = store;
        this.image_url = image_url;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            brand: this.brand,
            model: this.model,
            price: this.price,
            date: this.date,
            store: this.store,
            image_url: this.image_url
        }
    }
    
}

module.exports = Sneaker;