import axios from "axios";


export const instance = axios.create({
    baseURL: "https://api.thecatapi.com/v1/",
    headers: {
        "Content-Type" : "application/json",
        "x-api-key": "1d699d26-47ca-44aa-9dd0-4614428d375f",
    }
});

export const petsAPI = {
    getList(limit = 30, page = 1) {
        return instance.get(`breeds?page=${page}&limit=${limit}`).then(response => response).catch(error => error);
    },

    getPet(name: string) {
        return instance.get(`breeds/search?q=${name}`).then(response => response).catch(error => error);
    }
}

export const favouritesAPI = {
    getAll() {
        return instance.get("favourites").then(response => response).catch(error => error);
    },

    addOne(image_id: string) {
        return instance.post("favourites/", {image_id}).then(response => response).catch(error => error);
    }
}


export type FavouritesType = {
    id: number
    user_id: string,
    image_id: string,
    sub_id: string,
    created_at: Date,
    image: {
        id: string,
        url: string
    }
}

export type PetType = {
    name: string
    description: string
    image: {
        height: number
        id: string
        url: string
        width: number
    },
}

export type PetsListType = Array<PetType>