import {Component} from '@angular/core';
import {Account} from '../account';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
    private _selected: Array<boolean> = [false, false];

    private removeAcc(index: number): void {
        this._accounts.splice(index, 1);
        this._selected.splice(index, 1);
    }

    private select(index: number): void {
        this._selected[index] = !this._selected[index];
    }
}
