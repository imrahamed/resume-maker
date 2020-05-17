import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';
import { ResumeWrapperComponent } from './resume-wrapper/resume-wrapper.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { QuillModule } from 'ngx-quill';

registerLocaleData(en);


const dbConfig: DBConfig = {
  name: 'Resume-Maker',
  version: 1,
  objectStoresMeta: [{
    store: 'documents',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'descriptions', keypath: 'descriptions', options: { unique: false } },
      { name: 'resumeData', keypath: 'resumeData', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeLayoutComponent,
    ResumeWrapperComponent,
    ResumeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{ list: 'ordered'}, { list: 'bullet' }],
        ]
      }
    })

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
