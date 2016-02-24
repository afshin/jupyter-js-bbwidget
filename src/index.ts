// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import * as Backbone from 'backbone';

import {
  ResizeMessage, Widget
} from 'phosphor-widget';

export
interface JupyterBackboneView extends Backbone.View<any> {
  /**
   * Triggered on model change.
   *
   * Update view to be consistent with this.model
   */
  update(): void;
}

export
class BBWidget extends Widget {

  constructor(view: JupyterBackboneView) {
    super();
    this._view = view;
  }

  dispose(): void {
    this._view.undelegateEvents();
    this._view.remove();
    super.dispose();
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

  private _view: JupyterBackboneView;
}
