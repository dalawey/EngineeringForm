import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'ng-grid',
  template: `
  
      <table >
      <thead>
          <tr>
              <th *ngFor="let header of headers">{{header}}</th>
          </tr>
      </thead>
      </table>
      <ul style="list-style-type:none;">
          <ng-container *ngFor="let entry of data ; template : rowTemplate || noTemplate"></ng-container>
      </ul>
      
      
      <ng-template #noTemplate>
          <tr >No Row Template.</tr>
      </ng-template>            

  `,
  styles: []
})
export class GridComponent {
  @ContentChild(TemplateRef) rowTemplate;
  @Input() headers: string[];
  @Input() data: any[];

  constructor() { }

}
