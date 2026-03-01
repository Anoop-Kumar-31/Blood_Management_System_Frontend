import { get } from './api-client';

export function searchBloodBanks(state) {
    const params = new URLSearchParams();
    if (state) params.set('state', state);
    console.log(params.toString());
    return get(`/api/blood-banks/search?${params.toString()}`);
}
