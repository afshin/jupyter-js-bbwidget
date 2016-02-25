// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

var widgets = require('jupyter-js-widgets');

var BBWidget = require('jupyter-js-bbwidget').BBWidget;

function main() {
  var node = document.getElementById('main');
  var options = { model: new widgets.ColorPickerModel({}) };
  var widget = new BBWidget(widgets.ColorPickerView, options);
  widget.attach(document.body);
}

window.onload = main;
