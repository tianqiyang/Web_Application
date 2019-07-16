class Item{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.des = '';
        this.state = '';
        this.pic = null;
        this.review = [];
        this.ID = null;//unique
    }

    addDescription(des){ this.des = des; }

    addReview(review){ this.review.append(review); }


}

class Review{
    constructor(reviewerID, itemID, text, rate = -1){
        this.reviewerID = reviewerID;
        this.itemID = itemID;
        this.text = text;
        this.rate = rate;
        this.reviewID = null; // unique
    }


}

class Cart{
    constructor(userID){
        this.userID = userID;
        this.items = [];
    }

    addItem(item){
        //do somthing
    }

    // CRUD


}

class User{
    constructor(userName){
        this.userName = userName;
        this.userID = null;//unique
        this.password = '';
        this.address = '';
        this.cart = new Cart(userID);
        this.log = [];
    }
}