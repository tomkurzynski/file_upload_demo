import { Component, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-food-upload',
  templateUrl: './food-upload.component.html',
  styleUrls: ['./food-upload.component.css']
})
export class FoodUploadComponent {

  @Input() progress;
  
  file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }
}
