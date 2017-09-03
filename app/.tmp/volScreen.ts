/* jslint browser:true */
/* global document HTMLElement */

import { ItfProxyModel } from "../../itfproxymodel/itfproxymodel";
import { controllerManager } from "../../framework/controller-manager";
import { Controller } from "../../framework/controller";
import { FavScreen } from "./screen";

declare function require(filename: string): string;

let html = require("./volumescreen.html");
require("./volumescreen.scss");

export class VolumeScreen extends FavScreen {

  private buttonHome: Element = null;
  private buttonPrevious: Element = null;
  private buttonMore: Element = null;
  private buttonLess: Element = null;

  constructor() {
    super();
  }

  createdCallback(): void {
    this.init();
    this.innerHTML = html;

    // Events connexion
    this.buttonHome = this.querySelector(".back-to-home");
    this.buttonPrevious = this.querySelector(".back-to-last");
    this.buttonMore = this.querySelector(".more-button");
    this.buttonLess = this.querySelector(".less-button");
  }

  attachedCallback(): void {
    // Events connexion
    this.listen(this.buttonHome, "click", () => {
      this.navigationCtrl.gotoHomeScreen();
    });

    this.listen(this.buttonPrevious, "click", () => {
      this.navigationCtrl.gotoPreviousScreen();
    });

    this.listen(this.buttonMore, "click", () => {
      let currentVolume = FavScreen.proxyModel.getVolume();
      if ( currentVolume >= 4) return;
      FavScreen.proxyModel.setVolume(currentVolume + 1);
    });

    this.listen(this.buttonLess, "click", () => {
      let currentVolume = FavScreen.proxyModel.getVolume();
      if ( currentVolume <= 0) return;
      FavScreen.proxyModel.setVolume(currentVolume - 1);
    });

    let conditionVolume = FavScreen.proxyModel.isVolumeEvent;
    this.listenVariableUpdate(conditionVolume, (ev: CustomEvent) => {
      // Remove previous and add the new class
      this.changeVolume(Number(ev.detail.value));
    });

    this.changeVolume(FavScreen.proxyModel.getVolume());
  }

  private changeVolume(volume: number): void {
    let divVolumeValue = this.querySelector(".data-settings-volume .current-volume");
    divVolumeValue.className = divVolumeValue.className.replace(/(?:^|\s)sound_[0-9](?!\S)/, "");
    divVolumeValue.classList.add("sound_" + volume);

    if ( volume === 0 ) {
      this.buttonLess.classList.add("inactive-button");
      this.buttonMore.classList.remove("inactive-button");
    }
    else if (volume === 4) {
      this.buttonLess.classList.remove("inactive-button");
      this.buttonMore.classList.add("inactive-button");
    } else {
      this.buttonLess.classList.remove("inactive-button");
      this.buttonMore.classList.remove("inactive-button");
    }
  }
}

controllerManager.registerController("geomux-volumescreen", VolumeScreen, true);

