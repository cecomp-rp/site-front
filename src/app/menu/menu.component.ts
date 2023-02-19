import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems = [
    { name: 'Início', link: '/home' },
    { name: 'Sobre', link: '/about' },
    { name: 'Transparência', link: '/open-access'},
    { name: 'Lojinha do CEComp', link: '/shop'},
    { name: 'Eventos', link: '/events' },
    { name: 'Contato', link: '/contact' },
  ];
}
