import { Injectable } from '@angular/core';
import { EmployesService } from './employes.service'
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  contryList = [
    {
        "country": "US",
        "store": "US",
        "name": "United States",
        "imageUrl": "https://assets.asosservices.com/storesa/images/flags/us.png",
        "siteUrl": "www.asos.com/us",
        "siteId": 2,
        "majorCountry": null,
        "isDefaultCountry": null,
        "region": null,
        "legalEntity": null,
        "languages": 
            {
                "language": "en-US",
                "name": "American English",
                "text": "American English",
                "languageShort": "en",
                "isPrimary": true
            },
        "currencies": [
            {
                "currency": "USD",
                "symbol": "$",
                "text": "$ USD",
                "isPrimary": true,
                "currencyId": 2
            }
        ],
        "sizeSchemas": [
            {
                "sizeSchema": "UK",
                "text": "UK",
                "isPrimary": false
            },
            {
                "sizeSchema": "EU",
                "text": "EU",
                "isPrimary": false
            },
            {
                "sizeSchema": "US",
                "text": "US",
                "isPrimary": true
            }
        ]
    }, 
  {
      "country": "IN",
      "store": "ROW",
      "name": "India",
      "imageUrl": "https://assets.asosservices.com/storesa/images/flags/in.png",
      "siteUrl": "www.asos.com",
      "siteId": 24,
      "majorCountry": null,
      "isDefaultCountry": null,
      "region": null,
      "legalEntity": null,
      "languages":
          {
              "language": "en-GB",
              "name": "British English",
              "text": "British English",
              "languageShort": "en",
              "isPrimary": true
          }
      ,
      "currencies": [
          {
              "currency": "GBP",
              "symbol": "£",
              "text": "£ GBP",
              "isPrimary": true,
              "currencyId": 1
          },
          {
              "currency": "USD",
              "symbol": "$",
              "text": "$ USD",
              "isPrimary": false,
              "currencyId": 2
          }
      ],
      "sizeSchemas": [
          {
              "sizeSchema": "US",
              "text": "US",
              "isPrimary": false
          },
          {
              "sizeSchema": "EU",
              "text": "EU",
              "isPrimary": false
          },
          {
              "sizeSchema": "UK",
              "text": "UK",
              "isPrimary": true
          }
      ]
  }
];

activeCountry = 0;

  constructor(private storeservice: EmployesService) { }
}
