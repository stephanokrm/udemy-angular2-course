import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from '../account';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
    @Input() accounts: Array<Account>;

    @Output() delete = new EventEmitter<Number>();

    constructor() {
        console.log(this.accounts);
    }

    private _remove(index: number): void {
        this.delete.emit(index);
    }

}
