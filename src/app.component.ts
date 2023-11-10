import { Component, inject, OnInit } from '@angular/core';
import { SignalService } from './service-with-a-signal/signal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private signalService = inject(SignalService);

  // STEP 4: get signal in template
  items = this.signalService.getItems();

  ngOnInit() {
    this.signalService.fetchItems();
  }

  addItem() {
    this.signalService.createItem();
  }

  updateItem() {
    this.signalService.updateItem();
  }

  deleteItem() {
    this.signalService.deleteItem();
  }
}
