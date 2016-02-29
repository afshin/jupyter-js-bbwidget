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

  constructor(view: Backbone.View<any>) {
    super();
    this._view = view;
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
    this.node.textContent = '';
    this._view.render();
    this.node.appendChild(this._view.el);
    console.log(this.node);
  }

  private _view: Backbone.View<any>;
}
