import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume-wrapper',
  templateUrl: './resume-wrapper.component.html',
  styleUrls: ['./resume-wrapper.component.css']
})
export class ResumeWrapperComponent implements OnInit {
  ResumeData: any = {};
  loading = true;
  constructor(private dataService: DataService) { 
    this.dataService.resumelisten().subscribe((response) => {
      console.log(response);
      this.loading = true;
      this.ResumeData = response.resumeData;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
