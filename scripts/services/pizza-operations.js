import makeNetworkCall from "./api-client.js";
import {URL} from '../utils/config.js';
import Pizza from '../models/pizza-model.js';

export async function getPizzas(){
    //Api Client(objects(Pizza))
    const data = await makeNetworkCall(URL);
    console.log(data);
    const pizzaJSON = data['Vegetarian'];
    console.log(data);

    const pizzas = pizzaJSON.map(singlePizza=>{
        const pizzaObject = new Pizza(singlePizza.id, singlePizza.name,
             singlePizza.price, singlePizza.assets.product_details_page[0].url,
             singlePizza.menu_description);
        return pizzaObject;
            })
    return pizzas;
    //Data Map to Model(Conversion)
    //return Model
}