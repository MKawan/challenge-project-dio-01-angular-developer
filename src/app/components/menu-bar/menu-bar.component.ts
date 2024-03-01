import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  handleMenuButtonCell(){
    const getClass: Element | any = document.querySelector('.menu_bar_cell');
    const getClassMenu: Element | any = document.querySelector('#menuCell');
    const getItensMenu: Element | any = document.querySelector('#itensMenu');
    const getClassX: Element | any = document.querySelector('.menu_bar_ActivCell');
    const getIntensClass: Element | any = document.querySelector('.menu_itensCell');

    // const newMenu: Element | any = document.createElement("<ul class='menu_itens'><li>GITHUB</li><li>DIO</li><li>LINKEDIN</li></ul>");

    if(getClass){
        getClass.classList.remove('menu_bar_cell');
        getClass.className += 'menu_bar_ActivCell';

        getClassMenu.className += 'conatiner_menuCell';
        getItensMenu.innerHTML += "<ul class='menu_itensCell'><li style='list-style: none;  margin-bottom: 10px;'>GITHUB</li><li style='list-style: none; margin-bottom: 10px;'>DIO</li><li style='list-style: none;'>LINKEDIN</li></ul>"
    }else{
      getClassX.className += ' menu_bar_cell';
      getClassX.classList.remove('menu_bar_ActivCell');

      getClassMenu.classList.remove('conatiner_menuCell');
      getIntensClass.parentNode.removeChild(getIntensClass)
    }
    console.log('clicou')
  }
}
