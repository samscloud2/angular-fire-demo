import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  @Output() dropped = new EventEmitter<FileList>(); 
  @Output() hovered = new EventEmitter<boolean>();
  
  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
  constructor() { }

}
