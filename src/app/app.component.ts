import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private currentUser: User = {username: 'Test', email: 'test@test.com'};
    private hideEmail: boolean = false;
    private disabledInput: boolean = false;

    private isDisabled(): boolean {
        return this.disabledInput;
    }

    private isBlueBg: boolean = true;
    private bgColor: string = 'grey';
}

interface User {
    username: string;
    email: string;
}
