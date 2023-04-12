import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

interface AuthResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localid: string,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCo24EenKtbw6UJ9hOllV1IOR_dd3fC6FM',
            {
                email: email,
                password: password,
                returnSecureToken: true,
            }).pipe(catchError(errorResponse => {
                let errorMessage = 'An unknown error ocurred!'
                if (!errorResponse.error || !errorResponse.error.error) {
                    return throwError(errorMessage);
                }
                switch (errorResponse.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = 'This email aready exists!'
                }
                return throwError(errorMessage);
            }))
    }
}