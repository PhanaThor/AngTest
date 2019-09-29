import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      this.snackbar.open('Update available', 'Reload', {duration: 6000}).onAction().subscribe(() => {
        window.location.reload();
      });

      // const snack = this.snackbar.open('Update Available', 'Reload');

      // snack
      //   .onAction()
      //   .subscribe(() => {
      //     window.location.reload();
      //   });

      // snack._dismissAfter(6000);

      // snack.setTimeout(() => {
      //   snack.dismiss();
      // }, 6000);
    });
  }
}
