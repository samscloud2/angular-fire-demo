import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event) {
    this.isHovering = event;
  }
  ngOnInit(): void {
    
  }

  onDrop(files) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
