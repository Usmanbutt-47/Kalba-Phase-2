import axios from 'axios';
import { toast } from 'react-toastify';
import { clearToken, setAuthState, setQueueUrl, setRole } from '../../reducers/AuthSlice';
import { setUser } from '../../reducers/UserSlice';
import { requests } from '../requests/requests';
import { clearFirebaseToken, clearUserSession } from '../../reducers/FirebaseSlice';

// const notify = () => toast.success("Success Notification !", {
//     position: toast.POSITION.TOP_RIGHT
// });

const apiCall = async (url: string, params: any, method: string, displayMessage: boolean, dispatch: any|null): Promise<any> => {

    const data: {[x: string]: any} = {}

    let token;

    if(url && (url.indexOf('/user/profile') !== -1 || url.indexOf('/teacher/personal') !== -1 || url.indexOf('/teacher/teaching-details') !== -1 || url.indexOf('/education') !== -1 || url.indexOf('/student') !== -1 || url.indexOf('/experience') !== -1 || url.indexOf('/subject-category') !== -1 || url.indexOf('/attachment') !== -1 || url.indexOf('/certificate') !== -1 || url.indexOf('/subject/add') !== -1 || url.indexOf('/teacher/profile-completion') !== -1 || url.indexOf('/availability') !== -1 || url.indexOf('/subject/my-subjects') !== -1 || url.indexOf('/chat') !== -1 || url.indexOf('/chat/my-threads') !== -1 || url.indexOf('/lecture') !== -1 || url.indexOf('/lecture/my-lectures') !== -1 || url.indexOf('/lecture/update-status') !== -1 || url.indexOf('/teacher/my-seekers') !== -1 || url.indexOf('/student/my-skillers') !== -1 || url.indexOf('/seeker-request') !== -1 || url.indexOf('/seeker-request/my-requests') !== -1 || url.indexOf('/seeker-request/all-requests') !== -1 || url.indexOf('/find-thread') !== -1 || url.indexOf('/review') !== -1) || url.indexOf('/payment/connect-account') !== -1 || url.indexOf('/teacher/findById') !== -1 || url.indexOf('/payment/payment-intent') !== -1 || url.indexOf('/payment/payment-intent/confirm') !== -1 || url.indexOf('/payment/refund') !== -1 || url.indexOf('/user/forgot-password') !== -1 || url.indexOf("/static-values") !== -1 || url.indexOf('/payment/transactions') !== -1 || url.indexOf('/payment/connect-account/balance') !== -1 || url.indexOf('/payment/payout') !== -1 || url.indexOf('/notification') !== -1 || url.indexOf('/notification/mark-as-read') !== -1 || url.indexOf('/notification/mark-all-as-read') !== -1 || url.indexOf('/withdraw') !== -1 || url.indexOf('/payment/identity-card/upload') !== -1 || url.indexOf('/payment/identity-card/get-presigned-url') !== -1 || url.indexOf('/user-session') !== -1 || url.indexOf('/payment/identity-card') !== -1 || url.indexOf('/lecture/upcoming-lectures') !== -1 || url.indexOf('/sqs-messages/remove') !== -1 || url.indexOf('/user/update-password') !== -1 || url.indexOf('/payment/dashboard-link') !== -1 || url.indexOf('/auth/login-social') !== -1 
    // || url.indexOf('/course') !== -1 
    || url.indexOf('/course/add') !== -1 || url.indexOf('/course-lecture') !== -1 || url.indexOf('/course-lecture/add') !== -1 || url.indexOf('/myCourses') !== -1 || url.indexOf('/enroll') !== -1 || url.indexOf('/course-rating') !== -1 || url.indexOf('/course-rating/add') !== -1 || url.indexOf('/course/teacher') !== -1 || url.indexOf('/course-payment/payment-intent') !== -1 || url.indexOf('/course-payment/payment-intent/confirm') !== -1 || url.indexOf('/course/student') !== -1 || url.indexOf('/paypal-payment/pay') !== -1 || url.indexOf('/paypal-payment/success') !== -1 || url.indexOf('/payment/store') !== -1 || url.indexOf('/paypal-payment/schedule-lecture') !== -1 || url.indexOf('/paypal-payment/refund') !== -1){
        token = localStorage.getItem('authorization');
    }

    const client = axios.create({
        baseURL: "",
        headers: {
            ...(token && {'Authorization' : `Bearer ` + token})
        },
        data: params
    });


    if (method === 'post') {
        await client.post(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'patch') {
        await client.patch(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'put') {
        await client.put(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    }
    else if (method === 'get') {
        // displayMessage && notify()
        await client.get(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }
    else if (method === 'delete') {
        // displayMessage && notify()
        await client.delete(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }
                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }

    async function logout(){
        await deleteUserSession()
        localStorage.clear()
        dispatch(clearToken())
        dispatch(clearFirebaseToken(null))
        dispatch(clearUserSession(null))
        dispatch(setAuthState(false))
        dispatch(setUser(null))
        dispatch(setRole(null))
        dispatch(setQueueUrl(null))
    }

    return data
}


/**
 * 
 * @param url 
 * @param params 
 * @param method 
 * @param token 
 * @returns 
 */

export const apiRequestWithToken = async (url: string, params: any, method: string, token: any, dispatch:any): Promise<any> => {

    const data: {[x: string]: any} = {}


    const client = axios.create({
        baseURL: "",
        headers: {
            ...(token && {'Authorization' : `Bearer ` + token})
        },
        data: params
    });


    if (method === 'post') {
        await client.post(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'patch') {
        await client.patch(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'put') {
        await client.put(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    }
    else if (method === 'get') {
        await client.get(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }
    else if (method === 'delete') {
        await client.delete(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }

    async function logout(){
        await deleteUserSession()
        localStorage.clear()
        dispatch(clearToken())
        dispatch(clearFirebaseToken(null))
        dispatch(clearUserSession(null))
        dispatch(setAuthState(false))
        dispatch(setUser(null))
        dispatch(setRole(null))
        dispatch(setQueueUrl(null))
    }

    return data
}

export const apiRequestWithOutToken = async (url: string, params: any, method: string, token: null, dispatch:any): Promise<any> => {

    const data: {[x: string]: any} = {}


    const client = axios.create({
        baseURL: "",
        headers: {
        },
        data: params
    });


    if (method === 'post') {
        await client.post(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'patch') {
        await client.patch(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    } else if (method === 'put') {
        await client.put(url, params).then((res) => {
            data.data = res.data

        }).catch((error) => {

            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })

            }
            else if (error.request) {
                data.error = { message: error.message }
            }
            else {
                data.error = { message: error.message }
            }
        })
    }
    else if (method === 'get') {
        await client.get(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }
    else if (method === 'delete') {
        await client.delete(url, {
            params: {
                ...(Object.keys(params).length && { ...params })
            }
        }).then((res) => {
            data.data = res.data
        }).catch((error) => {
            if (error.response) {
                data.error = { message: error.response.data.message }

                error.response.status === 401 && logout()
                // error.response.status === 400 && toast.error(error.response.data.message, {
                //     position: toast.POSITION.TOP_RIGHT
                // })
            }
            else if (error.request) {
                data.error = { message: "Please check your internet connection or consult technical team" }//error.message
            }
            else {
                data.error = { message: "Please check your internet connection or consult technical team" } //error.message
            }
        })
    }

    async function logout(){
        await deleteUserSession()
        localStorage.clear()
        dispatch(clearToken())
        dispatch(clearFirebaseToken(null))
        dispatch(clearUserSession(null))
        dispatch(setAuthState(false))
        dispatch(setUser(null))
        dispatch(setRole(null))
        dispatch(setQueueUrl(null))
    }

    return data
}

export const deleteUserSession = async () => {
    const token = localStorage?.getItem('authorization');

    // token ? await axios.post(`${requests.userSession}/logout`, {
    //     headers: {
    //       Authorization: `Bearer ` + token
    //     },
    //     data: {
    //     }
    // }) : null;

    token ? apiRequestWithToken(`${requests.userSession}/logout`, {}, 'post', token, null) : null
};

export default apiCall;

