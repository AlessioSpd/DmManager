import { Component } from '@angular/core';
import { EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-resizable-container',
  styleUrl: './resizable-container.scss',
  templateUrl: './resizable-container.html',
})
export class ResizableContainer {
  @Input() minWidth: number = 200;
  @Input() maxWidth: number = 200;

  @Output() widthChange = new EventEmitter<number>();

  private isResizing: boolean = false;

  // Si attiva quando premi il tasto del mouse sulla barra
  startResizing(event: MouseEvent): void {
    console.log('Mouse premuto sulla barra!');
    event.preventDefault();
    this.isResizing = true;
  }
  // Intercetta il movimento su tutta la finestra
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isResizing) return;

    if (event.clientX >= this.minWidth && event.clientX <= this.maxWidth) {
      this.widthChange.emit(event.clientX);
    }
  }

  // Si disattiva quando rilasci il mouse
  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isResizing = false;
  }
}