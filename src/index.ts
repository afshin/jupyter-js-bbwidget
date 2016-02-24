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

  constructor(View: typeof Backbone.View, model: any) {
    super();
    model.el = this.node;
    this._view = new View(model);
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
