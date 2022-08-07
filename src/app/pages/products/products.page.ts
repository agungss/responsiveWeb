import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Observable<any>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.products = this.http.get('https://picsum.photos/200/300.jpg');
  }

}
