import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css']
})
export class ResumeEditComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private dbService: NgxIndexedDBService,
              private route: ActivatedRoute,
              private dataService : DataService,
              private message: NzMessageService) { }

  get skills() {
    return this.resumeForm.get('skills') as FormArray;
  }

  get education() {
    return this.resumeForm.get('education') as FormArray;
  }

  get employment() {
    return this.resumeForm.get('employment') as FormArray;
  }

  dataForDb: any;
  id: number;
  loading: boolean;


  resumeForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    lastName: [''],
    jobTitle: [''],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: [''],
    phone: this.fb.group({
      code: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    }),
    website: [''],
    location: ['', Validators.required],
    careerObjective: ['', [Validators.minLength(15), Validators.maxLength(1000)]],
    skills: this.fb.array([
      this.userSkills()
    ]),
    education: this.fb.array([
      this.userEducation()
    ]),
    employment: this.fb.array([
      this.userEmployment()
    ])
  });
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDataBYId();
  }

  getDataBYId(): void {
    this.loading = true;
    this.dbService.getByKey('documents', this.id).then(
      resume => {
        console.log(resume);
        this.dataForDb = resume;
        this.dataService.resumesendMessage(this.dataForDb);
        this.updateDataToFields();
        this.message.success('Data Retreived');
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.message.error('Error Occured');
        console.log(error);
      }
    );
  }

  updateDataToFields(): void {
    if (this.dataForDb.resumeData) {
      this.resumeForm.patchValue({
        firstName: this.dataForDb.resumeData.firstName,
        lastName: this.dataForDb.resumeData.lastName,
        jobTitle: this.dataForDb.resumeData.jobTitle,
        email: this.dataForDb.resumeData.email,
        dateOfBirth: this.dataForDb.resumeData.dateOfBirth,
        phone: this.dataForDb.resumeData.phone,
        website: this.dataForDb.resumeData.website,
        location: this.dataForDb.resumeData.location,
        careerObjective: this.dataForDb.resumeData.careerObjective
      });
      this.resumeForm.setControl('skills', this.setExistingSkill(this.dataForDb.resumeData.skills));
      this.resumeForm.setControl('education', this.setExistingEducation(this.dataForDb.resumeData.education));
      this.resumeForm.setControl('employment', this.setExistingEmployment(this.dataForDb.resumeData.employment));
    }
  }

  setExistingSkill(skills): FormArray {
    const formArray = new FormArray([]);
    skills.forEach(s => {
      formArray.push(this.fb.group({
        skillName: s.skillName,
        skillRating: s.skillRating
      }));
    });
    return formArray;
  }


  setExistingEmployment(employment): FormArray {
    const formArray = new FormArray([]);
    employment.forEach(s => {
      formArray.push(this.fb.group({
        jobTitle: s.jobTitle,
        employer: s.employer,
        startDate: s.startDate,
        endDate: s.endDate,
        description: s.description,
        isCurrent: s.isCurrent
      }));
    });
    return formArray;
  }


  setExistingEducation(education): FormArray {
    const formArray = new FormArray([]);
    education.forEach(s => {
      formArray.push(this.fb.group({
        degree: s.degree,
        college: s.college,
        startDate: s.startDate,
        endDate: s.endDate,
        description: s.description
      }));
    });
    return formArray;
  }

  updateById(): void {
    this.loading = true;
    this.dbService.update('documents', this.dataForDb).then(
      () => {
        this.dataService.resumesendMessage(this.dataForDb);
        this.message.success('Data Updated');
        this.loading = false;
      },
      error => {
        this.message.success('Error Updating Data');
        this.loading = false;
        console.log(error);
      }
    );
  }


  onResumeSubmit(): void {
    console.log(JSON.stringify(this.resumeForm.value));
    this.dataForDb.resumeData = this.resumeForm.value;
    this.updateById();
  }

  userSkills() {
    return this.fb.group({
      skillName: ['', Validators.required],
      skillRating: ['', Validators.required]
    });
  }

  userEducation() {
    return this.fb.group({
      degree: ['', Validators.required],
      college: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['']
    });
  }

  userEmployment() {
    return this.fb.group({
      jobTitle: ['', Validators.required],
      employer: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isCurrent: [false],
      description: ['']
    });
  }

  addNewSkill(): void {
    this.skills.push(this.userSkills());
  }

  addNewEducation(): void {
    this.education.push(this.userEducation());
  }

  addNewEmployment(): void {
    this.employment.push(this.userEmployment());
  }

  removeSkill(index): void {
    this.skills.removeAt(index);
  }

  removeEducation(index): void {
    this.education.removeAt(index);
  }

  removeEmployment(index): void {
    this.employment.removeAt(index);
  }
}
