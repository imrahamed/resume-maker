import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  docs: any[];

  constructor(private dbService: NgxIndexedDBService,  private dataService: DataService) {}

  ngOnInit() {
    this.getAll();
    this.dataService.listen().subscribe(() =>{
      this.getAll();
    });
  }
  getAll() {
    this.dbService.getAll('documents').then((res) => {
      console.log(res);
      this.docs = res;
    });
  }
  openDoc(doc) {
    
  }

}
