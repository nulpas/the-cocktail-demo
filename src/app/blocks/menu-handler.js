import tools from './tools';
import tab01 from '../../tpl/tab-01.tpl.html';
import tab02 from '../../tpl/tab-02.tpl.html';

class MenuHandler {
  constructor() {
    this.dataTab1 = tab01;
    this.dataTab2 = tab02;
    this.classButton = 'menu__option';
    this.classButtonSelected = 'menu__button--selected';
    this.menuHtmlCollection = document.getElementsByClassName(this.classButton);
  }

  listenClick(handler, result, callback) {
    const target = document.querySelector(`.${result}`);
    const source = document.querySelector(`.${handler}`);
    let data = (handler === 'tab01') ? this.dataTab1 : this.dataTab2;
    tools.addEvent(tools.CLICK, source, () => {
      this.menuReset();
      source.classList.add(this.classButtonSelected);
      target.innerHTML = data;
      if (callback) {
        callback(target);
      }
    });
  }

  menuReset() {
    tools.walkNodeList(this.menuHtmlCollection, element => {
      element.classList.remove(this.classButtonSelected);
    });
  }
}

export default MenuHandler;
