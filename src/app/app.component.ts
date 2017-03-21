import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private currentUser: User = {username: 'Test', email: 'test@test.com'};
    private hideEmail: boolean = false;

    private toggle() {
        this.hideEmail = !this.hideEmail;
    }
}

interface User {
    username: string;
    email: string;
}
