import { Component, OnInit } from '@angular/core';
import { EmployesService} from '../../services/employes.service';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LatestCollection = [{
    name: "Laptop Collection",
    imgSrc:'../../../assets/product01.png'
  },{
    name: "Accessories Collection",
    imgSrc:'../../../assets/product05.png'
  },
  {
    name: "Camera Collection",
    imgSrc:'../../../assets/product09.png'
  }]

  newProducts = [
    {
      category:"Laptop",
      name:"HP I7 16GB",
      price:"$980",
      rating:"3"
    },
    {
      category:"Headphone",
      name:"Mi",
      price:"30$",
      rating:"5"
    },
    {
      category:"Tablet",
      name:"Soni",
      price:"300$",
      rating:"5"
    }
  ]

  countryList:any = [];

  capsule = [{
    name:"sdsdsd",
    dose: 1,
    description:"sfdfdfd"
  }];
  constructor(private employeeservice: EmployesService,
               private storeservice : StoreService
    ) { }

  ngOnInit(): void {
    // this.getCountryList();
    this.getCategory()
    this.getProductList();
  }

  addData(){
    this.capsule.push({
      name:"",
      dose: 0,
      description:""
    })
  }

  removeData(index:any){
console.log(index)
      this.capsule.splice(index,1);
  }
  submit(){
   console.log(this.capsule);
  }


  getProductList(){
    this.employeeservice.getData('https://asos2.p.rapidapi.com/products/v2/list',{
      store: 'US',
      offset: '0',
      categoryId: '4209',
      limit: '48',
      country: 'US',
      sort: 'freshness',
      currency: 'USD',
      sizeSchema: 'US',
      lang: 'en-US'
    }).subscribe((resultMap)=>{
      console.log(resultMap)
    })
  }

  async getCategory(){
    this.employeeservice.getData('https://asos2.p.rapidapi.com/categories/list',{country: this.storeservice.contryList[this.storeservice.activeCountry].country, lang: this.storeservice.contryList[this.storeservice.activeCountry].languages.language}).subscribe((resultMap)=>{
      console.log(resultMap)
    })

  }

  getCountryList(){
    this.employeeservice.getData('https://asos2.p.rapidapi.com/countries/list',{lang: 'en-US'}).subscribe((resultMap)=>{
      console.log(resultMap)
    })
  }

  // fetchPostalApi(){
  //   // return this.httpclient.get('https://api.postalpincode.in/pincode/221108',{});
  // }


}
