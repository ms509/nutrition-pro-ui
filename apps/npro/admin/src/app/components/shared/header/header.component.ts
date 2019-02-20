import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'npro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role = 'USER';
  constructor() { }

  ngOnInit() {

  let user = localStorage.getItem('currentUser');
  this.role = JSON.parse(user).role;
  console.log("user value here is");
  console.log(user);
  console.log(this.role);
  let isChef = true;
  }

}
