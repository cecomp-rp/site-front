import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems = [
    { name: 'Início', link: '' },
    { name: 'Sobre', link: '/about' },
    { name: 'Conta', link: '/account'},
    { name: 'Lojinha do CEComp', link: '/store'},
    { name: 'Contato', link: '/contact' },
    { name: 'Calendário', link: '/calendar' },
    { name: 'Certificados', link: '/cerficates' },
    { name: 'Transparência', link: '/transparency' },
    { name: 'Enquetes', link: '/polls' },
    { name: 'Console', link: '/console' },
  ];
}
