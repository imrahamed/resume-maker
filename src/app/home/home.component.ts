import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  docs: any[];

  constructor(private dbService: NgxIndexedDBService,  private dataService: DataService, private router: Router) {}

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
  openDoc(id) {
    console.log(id);
    this.router.navigateByUrl(`/resume/${id}`)
  }

}
