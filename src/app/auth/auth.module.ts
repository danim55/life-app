import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,   
        FormsModule,
        SharedModule,
        RouterModule.forChild(
            [
                { path: 'auth', component: AuthComponent },
            ]
        )
    ]
})
export class AuthModule { }