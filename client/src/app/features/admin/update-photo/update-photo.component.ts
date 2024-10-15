import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-update-photo',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    CommonModule,
  ],
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.scss'],
})
export class UpdatePhotoComponent {
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  data = inject(MAT_DIALOG_DATA);
  pictureUrl = this.data.pictureUrl;
  private dialogRef = inject(MatDialogRef<UpdatePhotoComponent>);
  private http = inject(HttpClient); // Inject HttpClient

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];

      // Create a FileReader to read the image file
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string; // Set the preview URL
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadPhoto() {
    if (this.selectedFile) {
      this.dialogRef.close({
        selectedFile: this.selectedFile,
        pictureUrl: this.pictureUrl,
      });
    }
  }
}
