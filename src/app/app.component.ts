import {Component} from '@angular/core';
import {Account} from './account/account';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private _accounts: Array<Account> = [
        {
            id: 1,
            title: 'Bank Xyz',
            description: 'This is my main bank account.',
            balance: 501.2
        },
        new Account(2, 'Bank Asd', 'My secret account.', 1024.10)
    ];

    private _nextId = 3;

    private createAcc(titleEl: any, descEl: any, balEl: any): void {
        this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value));
        this._nextId++;

        titleEl.value = '';
        descEl.value = '';
        balEl.value = 0;
    }

    private removeAcc(index: number): void {
        this._accounts.splice(index, 1);
    }
}