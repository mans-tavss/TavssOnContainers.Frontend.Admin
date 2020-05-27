import { Injectable } from '@angular/core';
import {} from '@fortawesome/fontawesome-svg-core';
import {faHome, faUser , faMailBulk ,  faImage , faKey ,faCog , faSearch  } from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})

export class ICONSService {

  StudentIcons =[ faHome,faUser , faMailBulk , faImage , faKey , faCog  , faSearch ];

  constructor() { }
}
