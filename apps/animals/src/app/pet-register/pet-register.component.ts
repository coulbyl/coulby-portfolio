import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coulbyl-pet-register',
  templateUrl: './pet-register.component.html',
  styleUrls: ['./pet-register.component.scss'],
})
export class PetRegisterComponent {
  uploadedFiles: File[] = [];

  loading = [false, false, false, false];

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }

  onUpload(event: { files: File[] }) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  uploadHandler(event: { files: File[] }) {
    console.log(event, ' even');
  }
}
