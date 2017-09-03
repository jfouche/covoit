/* jslint browser:true */
/* global document HTMLElement */

import { Controller } from "../framework/controller";
import { ItfNavigationController } from "../itfnavigation-controller/itfnavigation-controller";
import { ItfProxyModel } from "../itfproxymodel/itfproxymodel";

declare var module: any;

interface EventInfo {
  element: Element|Document;
  eventName: string;
  callback: (ev: Event) => void;
  useCapture?: boolean;
}

interface VariableUpdateEventInfo {
  filter: (ev: CustomEvent) => boolean;
  callback: (ev: CustomEvent) => void;
}

@Controller
export class FavScreen extends HTMLElement {
  public hasStatusBar: boolean;
  public navigationCtrl: ItfNavigationController;
  protected static proxyModel: ItfProxyModel = null;
  public screenId: string;
  protected _parameter: Object;
  protected _events: Array<EventInfo>;
  protected _variableUpdateEvents: Array<VariableUpdateEventInfo>;
  protected _variableAvailabilityUpdateEvents: Array<VariableUpdateEventInfo>;
  protected _serviceAvailabilityUpdateEvents: Array<VariableUpdateEventInfo>;

  constructor() {
    super();

    if (module.hot) {
      module.hot.accept();
      module.hot.dispose( () => {
        this.innerHTML = "";
      });
    }
  }

  init(): void {
    this._events = new Array<EventInfo>();
    this._variableUpdateEvents = new Array<VariableUpdateEventInfo>();
    this._variableAvailabilityUpdateEvents = new Array<VariableUpdateEventInfo>();
    this._serviceAvailabilityUpdateEvents = new Array<VariableUpdateEventInfo>();
  }

  public isMainScreen(): boolean {
    // False by default : Override to change this status
    return false;
  }

  set parameter(parameter: Object) {
     this._parameter = parameter;
  }

  listenModel(eventName: string, callback: (ev: Event) => void, useCapture: boolean = false) {
    this.listen(document, eventName, callback, useCapture);
  }

  listen(element: Element|Document, eventName: string, callback: (ev: Event) => void, useCapture: boolean = false) {
    element.addEventListener(eventName, callback, useCapture);
    this._events.push({
      element: element,
      eventName: eventName,
      callback: callback,
      useCapture: useCapture
    });
  }

  listenVariableUpdate(filter: (ev: CustomEvent) => boolean, callback: (ev: CustomEvent) => void) {
    FavScreen.proxyModel.addUpdateValueListener(filter, callback);
    this._variableUpdateEvents.push( {
      filter: filter,
      callback: callback
    });
  }

  unlistenVariableUpdate(filter: (ev: CustomEvent) => boolean, callback: (ev: CustomEvent) => void) {
    FavScreen.proxyModel.removeUpdateValueListener(filter, callback);
    for ( let index = 0; index < this._variableUpdateEvents.length; ++index) {
      let eventInfo = this._variableUpdateEvents[index];
      if ( filter === eventInfo.filter && callback === eventInfo.callback ) {
        this._variableUpdateEvents.splice(index, 0);
        break;
      }
    }
  }

  listenVariableAvailabilityUpdate(filter: (ev: CustomEvent) => boolean, callback: (ev: CustomEvent) => void) {
    FavScreen.proxyModel.addUpdateValueAvailabilityListener(filter, callback);
    this._variableAvailabilityUpdateEvents.push( {
     filter: filter,
      callback: callback
    });
  }

  unlistenVariableAvailabilityUpdate(filter: (ev: CustomEvent) => boolean, callback: (ev: CustomEvent) => void) {
    FavScreen.proxyModel.removeUpdateValueAvailabilityListener(filter, callback);
    for ( let index = 0; index < this._variableAvailabilityUpdateEvents.length; ++index) {
      let eventInfo = this._variableAvailabilityUpdateEvents[index];
      if ( filter === eventInfo.filter && callback === eventInfo.callback ) {
        this._variableAvailabilityUpdateEvents.splice(index, 0);
        break;
      }
    }
  }

  listenServiceAvailabilityUpdate(filter: (ev: CustomEvent) => boolean, callback: (ev: CustomEvent) => void) {
    FavScreen.proxyModel.addUpdateServiceAvailabilityListener(filter, callback);
    this._serviceAvailabilityUpdateEvents.push( {
      filter: filter,
      callback: callback
    });
  }

  unlistenServiceAvailabilityUpdate(filter: (ev: CustomEvent) => boolean, callback: (ev: CustomEvent) => void) {
    FavScreen.proxyModel.removeUpdateServiceAvailabilityListener(filter, callback);
    for ( let index = 0; index < this._serviceAvailabilityUpdateEvents.length; ++index) {
      let eventInfo = this._serviceAvailabilityUpdateEvents[index];
      if ( filter === eventInfo.filter && callback === eventInfo.callback ) {
        this._serviceAvailabilityUpdateEvents.splice(index, 0);
        break;
      }
    }
  }

  unlistenAll(): void {
    for (let eventInfo of this._events) {
      eventInfo.element.removeEventListener(eventInfo.eventName, eventInfo.callback, eventInfo.useCapture);
    }
    this._events = [];

    for (let variableUpdateEventInfo of this._variableUpdateEvents) {
      FavScreen.proxyModel.removeUpdateValueListener(variableUpdateEventInfo.filter, variableUpdateEventInfo.callback);
    }
    for (let variableAvailabilityUpdateEventInfo of this._variableAvailabilityUpdateEvents) {
      FavScreen.proxyModel.removeUpdateValueAvailabilityListener(variableAvailabilityUpdateEventInfo.filter, variableAvailabilityUpdateEventInfo.callback);
    }
    for (let serviceAvailabilityUpdateEventInfo of this._serviceAvailabilityUpdateEvents) {
      FavScreen.proxyModel.removeUpdateServiceAvailabilityListener(serviceAvailabilityUpdateEventInfo.filter, serviceAvailabilityUpdateEventInfo.callback);
    }

    this._variableUpdateEvents = [];
    this._variableAvailabilityUpdateEvents = [];
    this._serviceAvailabilityUpdateEvents = [];
  }

  detachedCallback(): void {
    this.unlistenAll();
  }
}
