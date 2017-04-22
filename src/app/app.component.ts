import {Component} from '@angular/core';
import {Account} from './account/account';
import {AccountListComponent} from './account/account-list/account-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    accounts: Array<Account> = [
        {
            id: 1,
            title: 'Bank Xyz',
            description: 'This is my main bank account.',
            balance: 501.2
        },
        {
            id: 2,
            title: 'yyy Bank',
            description: null,
            balance: 322
        }
    ];

    private _nextId = 3;

    private createAcc(titleEl: any, descEl: any, balEl: any): void {
        // this.accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value));
        // this._selected.push(false);
        // this._nextId++;

        titleEl.value = '';
        descEl.value = '';
        balEl.value = 0;
    }

    private removeAcc(index: number): void {
        this.accounts.splice(index, 1);
    }
}
