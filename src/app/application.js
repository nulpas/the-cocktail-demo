import tools from './blocks/tools';
import MenuHandler from './blocks/menu-handler';
import Tab01Handler from './blocks/tab-01.handler';
import Tab02Handler from './blocks/tab-02.handler';

const menu = new MenuHandler();

const tab01 = new Tab01Handler();
menu.listenClick('tab01', 'content', target => {
  const nodeList = target.querySelectorAll('[class="options__container"]');
  tools.walkNodeList(nodeList, element => {
    const eventElement = element.getElementsByClassName('options__action').item(0);
    tools.addEvent(tools.CLICK, eventElement, () => {
      tab01.resetAll(nodeList);
      tab01.doAction(tools.SELECT, element);
    });
  });
});

const tab02 = new Tab02Handler();
menu.listenClick('tab02', 'content', target => {
  const nodeList = target.querySelectorAll('[class="tip__container"]');
  tab02.addToggle(tools.TIPS, nodeList.item(0), tools.IMPROVE_STAY, element => {
    const subNodeList = element.querySelectorAll('[class="improve__container"]');
    tab02.addToggle(tools.MORE, subNodeList.item(0), tools.IMPROVE_STAY_MORE_DATA);
    tab02.addToggle(tools.MORE, subNodeList.item(1), tools.ROOM_SERVICES_MORE_DATA);
  });
  tab02.addToggle(tools.TIPS, nodeList.item(1), tools.ROOM_SERVICES);
});

document.querySelector('.tab01').click();
