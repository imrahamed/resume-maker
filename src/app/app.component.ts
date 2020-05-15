import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume-Maker';
  isVisible = false;
  isConfirmLoading = false;
  model: any = {};

  constructor(private dbService: NgxIndexedDBService, private dataService: DataService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    this.dbService.add('documents', this.model).then((res) =>{
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.model = {};
      this.dataService.sendMessage(null);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(){
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
