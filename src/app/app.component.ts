import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My First Angular 2 App';

    private username: string = 'Test';
    private currentUser: User = {username: 'Test', email: 'test@test.com'};

    private getUsername(): string {
        return this.currentUser.username;
    }
}

interface User {
    username: string;
    email: string;
}
