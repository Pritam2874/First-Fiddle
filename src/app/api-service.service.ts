import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = "http://127.0.0.1:8000/api/allData"; //for welcome and api data
  media_url = "http://127.0.0.1:8000/api/mediaData"; //for media table and api data
  brand_url = "http://127.0.0.1:8000/api/brandData"; //for brand table and api data
  outlet_url = "http://127.0.0.1:8000/api/outletData" //for outlet table and api data
  copyright_url = "http://127.0.0.1:8000/api/copyrightData"; //for copyright table and api data
  contactUs_url = "http://127.0.0.1:8000/api/contact_usData"; //For Contact Us table and api data
  
  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.url)
  }

  get_media_data(){
    return this.http.get(this.media_url)
  }

  get_brand_data(){
    return this.http.get(this.brand_url)
  }

  get_outlet_data(){
    return this.http.get(this.outlet_url)
  }

  get_copyright_data(){
    return this.http.get(this.copyright_url)
  }

  get_contact_us_data(){
    return this.http.get(this.contactUs_url)
  }
}
