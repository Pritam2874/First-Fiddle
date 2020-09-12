import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsdata;
  resData;

  mediadata;
  mData;

  branddata;
  bData;

  outletdata;
  oData;

  copyrightdata;
  footerData;


  constructor(private home:ApiServiceService) { }

  ngOnInit(): void {

    this.home.getdata()
      .subscribe
      (
         data=>
         {
          //  console.log(data);
           this.resData=data;
           this.newsdata=this.resData.user;
           console.log(this.newsdata);
         }
      )
    
      this.home.get_media_data()
         .subscribe
         (
           data=>
           {
             console.log(data);
            this.mData=data;
            this.mediadata=this.mData.user;
            console.log(this.mediadata);
           }
         )

      this.home.get_brand_data()
           .subscribe
           (
             data=>
             {
              //  console.log(data);
               this.bData=data;
               this.branddata=this.bData.user;
               console.log(this.branddata);
             }
           )

      this.home.get_outlet_data()
          .subscribe
          (
            data=>
            {
              // console.log(data);
              this.oData=data;
              this.outletdata=this.oData.user;
              console.log(this.outletdata);
            }
          )
      
      this.home.get_copyright_data()
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

  }

}
