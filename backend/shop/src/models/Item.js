
class Item {
    constructor(
        id,
        orderId,
        productId,
        unitPrice,
        quantity,
        subtotal
    ) {
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.subtotal = subtotal;

    }

    
};

// User.comparePassword = async(password, receivedPassword) => {
//     return await bcrypt.compare(password, receivedPassword)
// }



module.exports = Item;