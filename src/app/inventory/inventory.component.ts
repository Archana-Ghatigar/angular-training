import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  
})
export class InventoryComponent implements OnInit {
  products:Array<Product>;
    constructor() {

   }

  ngOnInit(): void {
    
  }  
}
