import { post, get } from './api-client';

/**
 * Encode blood type for URL query params.
 * "A+" -> "A1", "O-" -> "O0", "AB+" -> "AB1"
 */
export function encodeBloodType(bloodGroup) {
    if (bloodGroup.length > 2) {
        return bloodGroup.charAt(0) + bloodGroup.charAt(1) + (bloodGroup.charAt(2) === '+' ? '1' : '0');
    }
    return bloodGroup.charAt(0) + (bloodGroup.charAt(1) === '+' ? '1' : '0');
}

export function registerDonor(data) {
    return post('/api/donors/register', data);
}

export function fetchDonors(pin, bloodtype, state) {
    const encoded = encodeBloodType(bloodtype);
    return get(`/api/donors/fetch?pin=${pin}&bloodtype=${encoded}&state=${state}`);
}
