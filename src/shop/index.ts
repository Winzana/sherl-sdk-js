import * as discount from './actions/discount';
import * as product from './actions/product';
import * as order from './actions/order';

export const shop = { ...discount, ...product, ...order };
