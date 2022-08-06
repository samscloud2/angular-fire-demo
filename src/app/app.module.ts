import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';

const firebaseConfig = {
  apiKey: "AIzaSyDwAwamvPmPTXvaCoIJt6bKlGCHxShlkYU",
  authDomain: "test3-b3c73.firebaseapp.com",
  projectId: "test3-b3c73",
  storageBucket: "test3-b3c73.appspot.com",
  messagingSenderId: "1087253929703",
  appId: "1:1087253929703:web:b9280b6f77f6fb7af00c42"
};

@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
