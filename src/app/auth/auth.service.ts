import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localid: string,
    registered?: boolean,
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new Subject<User>();
    token: string = null;

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCo24EenKtbw6UJ9hOllV1IOR_dd3fC6FM',
            {
                email: email,
                password: password,
                returnSecureToken: true,
            }
        )
            .pipe(
                catchError(this.handleError),
                tap(responseData => {
                    this.handleAuthentication(
                        responseData.email,
                        responseData.localid,
                        responseData.idToken,
                        +responseData.expiresIn,
                    );
                })
            );

    }

    logIn(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCo24EenKtbw6UJ9hOllV1IOR_dd3fC6FM',
            {
                email: email,
                password: password,
                returnSecureToken: true,
            }
        )
            .pipe(
                catchError(this.handleError),
                tap(responseData => {
                    this.handleAuthentication(
                        responseData.email,
                        responseData.localid,
                        responseData.idToken,
                        +responseData.expiresIn,
                    );
                }))
    }

    private handleError(errorResponse: HttpErrorResponse) {

        let errorMessage = 'An unknown error ocurred!'
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'The password is invalid or the user does not have a password.'
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator.'
                break;
            case 'EMAIL_EXISTS':
                errorMessage = 'This email aready exists!'
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'Password sign-in is disabled for this project.'
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.'
                break;
        }
        return throwError(errorMessage);

    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(
            email,
            userId,
            token,
            expirationDate,
        )
        this.user.next(user);
        this.token = user.token;
    }
}