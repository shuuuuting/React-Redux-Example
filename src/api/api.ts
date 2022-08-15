import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from '../types/responseType';
import { User } from '../types/userType';

const QUERY_API_URL = "your-api-url"

const fakeUser = [{
    name: 'user1'
},{
    name: 'user2'
},{
    name: 'user3'
}]

export const fetchUsers = async () => {
    return new Promise<{ data: Array<User> }>((resolve) =>
        setTimeout(() => resolve({ data: fakeUser }), 500)
    );
}

export const fetchCountries = async (countryId: string): Promise<ApiResponse> => {
    try {
        const res = await axios.get(QUERY_API_URL, {params: {countryId}})
        if (res.data.success) return { data: res.data.data }
        else return { error: res.data.msg }
    } catch (e) {
        console.log(e)
        return { error: "Fail: internal service error happened while fetching country data"}
    }
}
