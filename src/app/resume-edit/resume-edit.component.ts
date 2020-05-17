import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css']
})
export class ResumeEditComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  get skills() {
    return this.resumeForm.get('skills') as FormArray;
  }

  get education() {
    return this.resumeForm.get('education') as FormArray;
  }

  get employment() {
    return this.resumeForm.get('employment') as FormArray;
  }


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
  }

  onResumeSubmit(): void {
    console.log(JSON.stringify(this.resumeForm.value))
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
    })
  }

  userEmployment() {
    return this.fb.group({
      jobTitle: ['', Validators.required],
      employer: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['']
    })
  }

  addNewSkill(): void {
    this.skills.push(this.userSkills())
  }

  addNewEducation(): void {
    this.education.push(this.userEducation())
  }

  addNewEmployment(): void {
    this.employment.push(this.userEmployment())
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
