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
            title: 'xxx Bank',
            description: 'Main bank account.',
            balance: 567
        },
        {
            id: 2,
            title: 'yyy Bank',
            description: null,
            balance: 322
        }
    ];

    private nextId = 3;

    private storeAccount(account: Account): void {
        account.id = this.nextId++;
        this.accounts.push(account);
    }

    private destroyAccount(index: number): void {
        this.accounts.splice(index, 1);
    }
}
