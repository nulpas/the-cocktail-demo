import tools from './tools';

import improve from '../../tpl/improve-stay.tpl.html';
import services from '../../tpl/room-services.tpl.html';
import improveMore from '../../tpl/improve-stay-more-data.tpl.html';

class Tab02Handler {
  constructor() {
    this.toggles = {
      tips: {
        sourceClass: 'tip__link',
        iconTag: 'i',
        icons: {
          on: 'keyboard_arrow_up',
          off: 'keyboard_arrow_down'
        },
        targetClass: 'tip__content'
      },
      more: {
        sourceClass: 'improve__link',
        iconTag: 'i',
        icons: {
          on: 'keyboard_arrow_up',
          off: 'keyboard_arrow_down'
        },
        targetClass: 'improve__content'
      }
    };
    this.data = {
      improve: improve,
      services: services,
      improveMore: improveMore,
      servicesMore: improveMore
    };
  }

  getElementsToAction(element, type) {
    const dom = this.toggles[type];
    const source = element.getElementsByClassName(dom.sourceClass).item(0);
    const iconTag = source.getElementsByTagName(dom.iconTag).item(0);
    const icon = dom.icons;
    const target = element.getElementsByClassName(dom.targetClass).item(0);
    return {
      source,
      iconTag,
      icon,
      target
    };
  }

  addToggle(type, element, dataName, callback) {
    const domElements = this.getElementsToAction(element, type);
    tools.addEvent(tools.CLICK, domElements.source, () => {
      if (domElements.target.innerHTML) {
        domElements.iconTag.innerHTML = domElements.icon.off;
        domElements.target.innerHTML = '';
      } else {
        domElements.iconTag.innerHTML = domElements.icon.on;
        domElements.target.innerHTML = this.data[dataName];
      }
      if (callback) {
        callback(domElements.target);
      }
    });
  }
}

export default Tab02Handler;
