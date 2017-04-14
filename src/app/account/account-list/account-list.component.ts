import {Component, Input} from '@angular/core';
import {Account} from '../account';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

    @Input('accounts') _accounts: Array<Account>;

    private removeAcc(index: number): void {
        this._accounts.splice(index, 1);
    }
}
