import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private Toast: HotToastService) { }

  sendReminder() {
    this.Toast.success("Reminder Sent!!",
      {
        position: 'top-center'
      }
    )
  }

  statusChanged() {
    this.Toast.success("Status Changed!!",
      {
        position: 'top-center'
      }
    )
  }

  updateSuccessfully() {
    this.Toast.success("Data Update Successfully!!",
      {
        position: 'top-center'
      }
    )
  }
}
