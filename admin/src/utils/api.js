import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

// Create axios instance with cookie credentials
const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const postData = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            return errorData;
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const uploadImage = async (url, updatedData) => {
    try {
        const response = await api.put(url, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const uploadImages = async (url, formData) => {
    try {
        const response = await api.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const editData = async (url, updatedData) => {
    try {
        const response = await api.put(url, updatedData);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteImages = async (url, image) => {
    try {
        const { data } = await api.delete(url);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteData = async (url) => {
    try {
        const { data } = await api.delete(url);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteMultipleData = async (url, data) => {
    try {
        const response = await api.delete(url, { data });
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}