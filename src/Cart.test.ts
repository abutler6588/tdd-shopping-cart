import Cart from './Cart';
import Item from './Item';

describe('Cart', () => {
    test('should initialize as empty', () => {
        const cart = new Cart();

        expect(cart.list).toEqual([]);

        expect(cart.totalPrice).toEqual(0);
    })})
