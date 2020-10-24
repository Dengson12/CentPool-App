import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'tab-bar',
    templateUrl: 'tab-bar.component.html',
    styleUrls: ['tab-bar.component.css']
})
export class TabBarComponent {
    @Output() toggleSideNav = new EventEmitter()

    toggle() {
        this.toggleSideNav.emit()
    }
}


