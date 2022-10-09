import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public productList: Products[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getListProducts().subscribe((products) => {
      this.productList = products;
      console.log(this.productList);
    })
  }

}
