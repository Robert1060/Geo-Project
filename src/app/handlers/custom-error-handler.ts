import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackbar: MatSnackBar, private ngZone: NgZone){}

  handleError(error: unknown): void {
    this.ngZone.run(() => {
      this.snackbar.open(error as string, 'Close', {duration: 3000})
      console.warn('Handler get', error)
    })
  }

}