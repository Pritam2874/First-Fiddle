import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyrightdata;
  footerData;

  contact_usfulldata;
  contact_usData;



  constructor(private footer:ApiServiceService) { }

  ngOnInit(): void {

    this.footer.get_copyright_data()
          .subscribe
          (
            data=>
            {
              // console.log(data);
              this.footerData=data;
              this.copyrightdata=this.footerData.user;
              console.log(this.copyrightdata);
            }
          )

    this.footer.get_contact_us_data()
          .subscribe
          (
            data=>
            {
              // console.log(data);
              this.contact_usData=data;
              this.contact_usfulldata=this.contact_usData.user;
              console.log(this.contact_usfulldata);
            }
          )
  }

}
