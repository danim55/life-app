import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponse {
    idToken: string,
    refreshToken: string,
    expiresIn: string,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCo24EenKtbw6UJ9hOllV1IOR_dd3fC6FM',
        {
            email: email,
            password: password,
            returnSecureToken: true,
        })
    }
}