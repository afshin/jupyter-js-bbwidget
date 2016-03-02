// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import * as Backbone from 'backbone';

import {
  Widget
} from 'phosphor-widget';


/**
 * The class name added to an BBWidget widget.
 */
const BBWIDGET_CLASS = 'jp-BBWidget';


/**
 * A phosphor widget which wraps a `Backbone` view instance.
 */
export
class BBWidget extends Widget {
  /**
   * Construct a new `Backbone` wrapper widget.
   *
   * @param view - The `Backbone.View` instance being wrapped.
   */
  constructor(view: Backbone.View<any>) {
    super();
    this.addClass(BBWIDGET_CLASS);
    this._view = view;
    this._view.render();
    this.node.appendChild(this._view.el);
  }

  /**
   * Dispose of the resources held by the widget.
   */
  dispose(): void {
    this._view.undelegateEvents();
    this._view.remove();
    super.dispose();
  }

  private _view: Backbone.View<any>;
}
