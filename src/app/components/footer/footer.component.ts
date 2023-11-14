import { Component } from '@angular/core';
import { AboutMeDialogComponent } from '../about-me-dialog/about-me-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatDialogModule, MatButtonModule],
})
export class FooterComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AboutMeDialogComponent);
  }
}
