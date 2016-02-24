// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import * as Backbone from 'backbone';

import {
  Message
} from 'phosphor-messaging';

import {
  ResizeMessage, Widget
} from 'phosphor-widget';

export
class BBWidget extends Widget {

  constructor(View: typeof Backbone.View, options: any = {}) {
    super();
    options.el = this.node;
    this._view = new View(options);
  }

  get collection(): any {
    return this._view.collection;
  }

  set collection(collection: any) {
    this._view.collection = collection;
  }

  get el(): HTMLElement {
    return this.node;
  }

  get model(): any {
    return this._view.model;
  }

  set model(model: any) {
    this._view.model = model;
  }

  dispose(): void {
    this._view.undelegateEvents();
    this._view.remove();
    super.dispose();
  }

  /**
   * On attach, render the Backbone view.
   */
  protected onAfterAttach(msg: Message): void {
    this._view.render();
  }

  /**
   * On resize, notify the Backbone view.
   */
  protected onResize(msg: ResizeMessage): void {
    if (!this.isAttached || !this.isVisible) {
      return;
    }
    this._view.render();
  }

  private _view: Backbone.View<any>;
}
