import { API } from "./utils"

export const newRegitration = async (formData) => {
    try {
        const res = await API.post("/appointment/new-reg", formData, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        return {
            error: null,
            data: res.data
        }
    } catch (error) {
        return {
            error: `Some Error Occured in posting data. API Error: ${error}`,
            data: null
        }
    }
}