import axios from "axios";

const BASE_PRODUCTS_URL = "http://localhost:3001/products"
const BASE_USERS_URL = "http://localhost:3001/users"
class PmsServices {

    //Products Service Methods
    getAllProducts() {
        return axios.get(BASE_PRODUCTS_URL);
    }
    getProductById(id) {
        return axios.get(BASE_PRODUCTS_URL + "/" + id)
    }
    updateProduct(id, product) {
        return axios.put(BASE_PRODUCTS_URL + "/" + id, product)
    }

    deleteProduct(id) {
        return axios.delete(BASE_PRODUCTS_URL + "/" + id)
    }
    addProduct(product) {
        return axios.post(BASE_PRODUCTS_URL, product)
    }



    //Users Service Methods

    getAllUsers() {
        return axios.get(BASE_USERS_URL);
    }
}

export default new PmsServices();