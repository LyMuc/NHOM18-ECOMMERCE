import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL

export const postData = async (url, formData) => {
    try {
        
        const response = await axios.post(apiUrl + url, 
            formData, 
        {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Quan trọng: Gửi cookie cùng request
        });


        return response.data;

    } catch (error) {
        if(error.response){
            return error.response.data;
        }
        
        console.error('Error:', error);
    }

}

export const getData = async (url) => {
    try {
        const response = await axios.get(apiUrl + url, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Quan trọng: Gửi cookie cùng request
        });

        return response.data;

    } catch (error) {
        if(error.response){
            return error.response.data;
        }
        
        console.error('Error:', error);
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Gửi cookie cùng request
        } 

        const { data } = await axios.get(apiUrl + url, params)
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}


export const uploadImage = async (url, updatedData ) => {
    const params = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        withCredentials: true, // Gửi cookie cùng request
    } 

    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res)=>{
        response=res;
        
    })
    return response;
   
}




export const editData = async (url, updatedData ) => {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true, // Gửi cookie cùng request
    } 

    var response;
    await axios.put(apiUrl + url, updatedData, params).then((res)=>{
        response=res;
        
    })
    return response;
   
}


export const deleteData = async (url ) => {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true, // Gửi cookie cùng request
    } 
    const { res } = await axios.delete(apiUrl + url, params)
    return res;
}