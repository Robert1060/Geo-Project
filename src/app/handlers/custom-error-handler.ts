import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackbar: MatSnackBar){}

  handleError(error: unknown): void {
      this.snackbar.open(error as string, 'Close', {duration: 3000})
      console.warn('Handler get', error)
  }

}