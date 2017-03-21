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

    private changeMail(newMail: string) {
        this.currentUser.email = newMail;
    }

    private keyPress(event: KeyboardEvent) {
        if (event.keyCode == 13) {
            var inputElement = <HTMLInputElement>event.target;
            this.changeMail(inputElement.value);
        }
    }
}

interface User {
    username: string;
    email: string;
}
