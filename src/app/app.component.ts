import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h1>{{title}}</h1>             

              <ng-grid [data]="data" [headers]="headers">
              <ng-template let-data="$implicit">              
             
                <li>sname : {{data.sname}}</li>
                <li>coordinates [0] : {{data.entity.appX.base.position.coordinates[0]}}</li>
                <li>coordinates [1] : {{data.entity.appX.base.position.coordinates[1]}}</li>
                <li>coordinates [2] : {{data.entity.appX.base.position.coordinates[2]}}</li>
             
              </ng-template>
              </ng-grid>
  `

})
export class AppComponent {
  title = 'json-eng';
  
  

  headers = ['key', 'value'];
  data: any[] = [
    {
      "sname": "PoliceAndCriminalApp.entity.policeman",
      "entity": {
        "score": 1,
        "qualificationGrade": 95,
        "qualificationTag": 4,
        "isBlink": false,
        "appX": {
          "base": {
            "dispName": "",
            "position": {
              "shape": "Point",
              "coordinates": [
                34.863453,
                32.281249,
                38.49
              ]
            }
          }
        },
        "age": 25,
        "sname": "PoliceAndCriminalApp.entity.policeman"
      },
      "options": {
        "reqId": 46
      }
    }
  ];
}
/*
export class Data {
  id: number;
  title: string;
}*/


