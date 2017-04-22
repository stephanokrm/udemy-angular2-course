import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountFormComponent } from './account/account-form/account-form.component';

@NgModule({
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
