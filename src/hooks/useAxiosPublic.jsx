import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://matrimony-server-lilac.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;