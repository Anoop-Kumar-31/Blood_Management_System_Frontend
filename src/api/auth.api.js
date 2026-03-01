import { post } from './api-client';

export function sendOtp(email) {
    return post('/api/auth/send-otp', { email });
}

export function verifyOtp(email, otp) {
    return post('/api/auth/verify-otp', { email, otp });
}
