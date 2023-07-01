import { Component } from '@angular/core';
import { AboutMeDialogComponent } from '../about-me-dialog/about-me-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AboutMeDialogComponent);
  }
}
