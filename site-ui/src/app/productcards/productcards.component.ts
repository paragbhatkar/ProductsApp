import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.css']
})
export class ProductcardsComponent implements OnInit {
  _products: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
