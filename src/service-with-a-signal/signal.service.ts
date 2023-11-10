import { Injectable, signal, WritableSignal } from '@angular/core';
import { Item } from './item.interface';
import { randFullName, randNumber, randBoolean, randUuid } from '@ngneat/falso';

@Injectable({ providedIn: 'root' })
export class SignalService {
  // STEP 1: Create a signal
  #items = signal<Item[]>([]);
  
  // STEP 2 (Signals Only): Fetch data from api and set the signal value
  async fetchItems() {
    const items = await this.generateFalsoUsers();
    this.#items.set(items);
    return await items;
  }

  // STEP 3: Function to get signal
  getItems(): WritableSignal<Item[]> {
    return this.#items;
  }

  // STEP 4 continues in the component
  setItems(items: Item[]) {
    this.#items.set(items);
  }

  clearItems() {
    this.#items.set([]);
  }

  async createItem(item?: Item) {
    // not implemented in this demo
    const falsoItem = await this.generateFalsoItem();
    this.addItem(falsoItem);
    return await falsoItem;
  }

  /** Add item to local array */
  private addItem(item: Item) {
    const items = this.#items();
    const newItems = [item, ...items];
    this.setItems(newItems);
  }

  async updateItem(item?: Item) {
    // not implemented in this demo
    const falsoItem = await this.generateFalsoItem();
    this.editItem(falsoItem);
    return await falsoItem;
  }

  /** Update item in local array */
  private editItem(updatedItem: Item) {
    const items = this.#items();
    // Checks for item by ID, disabled for demo.
    // const updatedItemIndex = items.findIndex(item => item.id === updatedItem.id);
    const updatedItemIndex = 0;
    const updatedItems = items;
    updatedItems[updatedItemIndex] = updatedItem;
    this.setItems(updatedItems);
  }

  async deleteItem(item?: Item) {
    // not implemented in this demo
    const falsoItem = await this.generateFalsoItem();
    this.removeItem(falsoItem);
    return await falsoItem;
  }

  /** Delete item from local array */
  private removeItem(deletedItem: Item) {
    const items = this.#items();
    // Checks for item by ID, disabled for demo.
    // const remainingItems = items.filter(item => item.id === deletedItem.id);
    const remainingItems = items;
    remainingItems.splice(0, 1);
    this.setItems(remainingItems);
  }

  // Create Fake User
  generateFalsoItem() {
    return {
      id: randUuid(),
      fullName: randFullName(),
      age: randNumber(),
      isNerdy: randBoolean(),
    };
  }

  // Create Fake Users Array
  generateFalsoUsers() {
    return new Array(10).fill(null).map(this.generateFalsoItem);
  }
}
