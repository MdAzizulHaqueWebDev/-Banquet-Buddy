/** @format */

import axios from "axios";

const instance = axios.create({
	baseURL: "https://assignment-11-server-side-psi.vercel.app",
	withCredentials: true,
});
const useAxiosInstance = () => {
	return instance;
};
export default useAxiosInstance;
