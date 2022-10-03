//--- Méthodes pour envoyer des requêtes HTTP à l'Api pour "restaurant" ---//

import http from "../http-common";

class RestaurantDataService {
    getAllRestaurants() {
        return http.get("/restaurants");
    }
    getOneRestaurant(id) {
        return http.get(`/restaurants/${id}`);
    }
    createRestaurant(data) {
        return http.post("/restaurants", data);
    }
    updateRestaurant(id, data) {
        return http.put(`/restaurants/${id}`, data);
    }
    delete(id) {
        return http.delete(`/restaurants/${id}`);
    }
    getMenus(id, data) {
        return http.get(`/restaurants/${id}/all`, data)
    }

}
export default new RestaurantDataService();