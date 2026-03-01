
const BASE_URL = import.meta.env.BACKEND_URL;  // Empty string means use Vite proxy (relative paths)

async function request(endpoint, options = {}) {
    const url = `${BASE_URL}${endpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw { status: response.status, data };
        }

        return data;
    } catch (error) {
        if (error.status) throw error;
        console.error('Network error:', error);
        throw { status: 0, data: { error: 'Network error. Please check your connection.' } };
    }
}

export function get(endpoint) {
    return request(endpoint, { method: 'GET' });
}

export function post(endpoint, body) {
    return request(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
    });
}
