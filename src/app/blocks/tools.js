class Tools {
  constructor() {
    this.SELECT = 'select';
    this.DESELECT = 'deselect';

    this.CLICK = 'click';

    this.TIPS = 'tips';
    this.MORE = 'more';

    this.IMPROVE_STAY = 'improve';
    this.ROOM_SERVICES = 'services';
    this.IMPROVE_STAY_MORE_DATA = 'improveMore';
    this.ROOM_SERVICES_MORE_DATA = 'servicesMore';
  }

  walkNodeList(nodeList, callback) {
    [].forEach.call(nodeList, element => {
      callback(element);
    });
  }

  addEvent(eventName, context, callback) {
    context.addEventListener(eventName, e => {
      e.preventDefault();
      e.stopPropagation();
      callback();
    });
  }
}

export default new Tools();
