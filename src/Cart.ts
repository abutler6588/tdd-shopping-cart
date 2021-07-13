import Item from './Item';



export default class Cart {
    
    item: Item = new Item("item", 4.99, false);

    list: Array<Item> = [];
    totalPrice: number = 0;
    //first define var name then type with capital
    addItem(item: Item){
        this.list.push(item)
    }
}


