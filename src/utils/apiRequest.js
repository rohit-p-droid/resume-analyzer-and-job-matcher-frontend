import { useDispatch } from "react-redux";
import config from "../config/config";
import { logout } from "../reducers";
import { useNavigate } from "react-router-dom";

export async function apiRequest({
    url,
    method = "GET",
    data = null,
    headers = {}
}) {
    try {
        const isFormData = data instanceof FormData;
        const options = {
            method: method,
            credentials: "include",
            headers: {
                ...(isFormData ? {} : { "Content-Type": "application/json" }),
                ...headers,
            },
        };

        if (data) {
            options.body = isFormData ? data : JSON.stringify(data);
        }

        const response = await fetch(`${config.API_URL}${url}`, options);

        // if the token is expired refresh the token and send response
        if (response.status == 401) {
            console.log("Token expired getting new token");
            const tokenResponse = await fetch(`${config.API_URL}/auth/refresh-token`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
            });

            if(tokenResponse.status == 200) {
                const response = await fetch(`${config.API_URL}${url}`, options);
                return response.json();
            }
        }

        return response.json();
    } catch (error) {
        throw error;
    }
}