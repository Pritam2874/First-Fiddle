import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url="http://127.0.0.1:8000/api/contactForm";

  ngOnInit(): void {
  }

  // onSubmit(userForm) { //this function for form-submission
  //   console.warn(userForm);
  // }

  onSubmit(userForm) {

    this.http.post(this.url, userForm)
      .subscribe((result) => {     //subscribe call back function return

        console.warn(result);
        //this.alert=true

    })
  }
}
