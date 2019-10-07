import{Component} from '@angular/core';

@Component({
    selector:'miHeader',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent {

    submitMessage = '';

    dataUser( user ) {
        console .log( user );
        this .submitMessage = user;
    }

}