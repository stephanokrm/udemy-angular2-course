import {Component} from '@angular/core';
import {Account} from './account/account';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private _nextId = 3;

    private createAcc(titleEl: any, descEl: any, balEl: any): void {
        alert('Not implemented for now...');
        // this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value));
        // this._selected.push(false);
        // this._nextId++;

        titleEl.value = '';
        descEl.value = '';
        balEl.value = 0;
    }
}
