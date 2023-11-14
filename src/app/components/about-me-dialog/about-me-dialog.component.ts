import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-about-me-dialog',
  templateUrl: './about-me-dialog.component.html',
  styleUrls: ['./about-me-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule]
})
export class AboutMeDialogComponent {

}
