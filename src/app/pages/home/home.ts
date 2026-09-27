import { Component } from '@angular/core';
import { MainSidebar } from '../../components/main-sidebar/main-sidebar';
import { ResizableContainer } from '../../components/resizable-container/resizable-container';

@Component({
  imports: [MainSidebar, ResizableContainer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  sidebarWidth: number = 330; // Stato della larghezza conservato in Home

  // Aggiorna la larghezza quando il resizer emette il nuovo valore
  onWidthChange(newWidth: number): void {
    this.sidebarWidth = newWidth;
  }
}