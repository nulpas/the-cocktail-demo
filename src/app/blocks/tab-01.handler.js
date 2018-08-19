import tools from './tools';

class Tab01Handler {
  constructor() {
    this.clickListenClass = 'options__action';
    this.selectedClass = 'item--selected';
    this.inputTag = 'input';
  }

  getElementsToAction(element) {
    const click = element.getElementsByClassName(this.clickListenClass).item(0);
    const input = click.getElementsByTagName(this.inputTag).item(0);
    return { click, input };
  }

  doAction(actionName, element) {
    const actionObject = this.getElementsToAction(element);
    const action = {
      select: {
        input: true,
        click: actionObject.click.classList.add.bind(actionObject.click.classList),
        element: element.classList.add.bind(element.classList)
      },
      deselect: {
        input: false,
        click: actionObject.click.classList.remove.bind(actionObject.click.classList),
        element: element.classList.remove.bind(element.classList)
      }
    };
    const play = action[actionName];
    actionObject.input.checked = play.input;
    play.click(this.selectedClass);
    play.element(this.selectedClass);
  }

  resetAll(nodeList) {
    tools.walkNodeList(nodeList, element => {
      this.doAction(tools.DESELECT, element);
    });
  }
}

export default Tab01Handler;
