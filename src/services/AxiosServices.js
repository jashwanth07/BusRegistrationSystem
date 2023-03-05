import axios from "axios";

const BASE_BUSES_URL = "http://localhost:3001/buses"
const BASE_USERS_URL = "http://localhost:3001/users"
class PmsServices {

    //Products Service Methods
    getAllBuses() {
        return axios.get(BASE_BUSES_URL);
    }
    getBusById(id) {
        return axios.get(BASE_BUSES_URL + "/" + id)
    }
    updateBus(id, bus) {
        return axios.put(BASE_BUSES_URL + "/" + id, bus)
    }

    deleteBus(id) {
        return axios.delete(BASE_BUSES_URL + "/" + id)
    }
    addBus(bus) {
        return axios.post(BASE_BUSES_URL, bus)
    }



    //Users Service Methods

    getAllUsers() {
        return axios.get(BASE_USERS_URL);
    }
}

export default new PmsServices();