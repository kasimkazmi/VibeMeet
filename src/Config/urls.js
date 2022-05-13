export const API_BASE_URL = 'http://appgrowthcompany.com:3304/api/v1/user';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl('/login');
export const SIGNUP = getApiUrl('/signup');
