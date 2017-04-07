import {Component} from '@angular/core';
import {Account} from '../account';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
    private _selected: Array<boolean> = [false, false];
    private _accounts: Array<Account> = [
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

    private removeAcc(index: number): void {
        this._accounts.splice(index, 1);
        this._selected.splice(index, 1);
    }

    private select(index: number): void {
        this._selected[index] = !this._selected[index];
    }
}
