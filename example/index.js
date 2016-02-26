// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';


var widgets = require('jupyter-js-widgets');

var BBWidget = require('jupyter-js-bbwidget').BBWidget;

var BoxPanel = require('phosphor-boxpanel').BoxPanel;

var imageData = require('./data/image');

var latexData = require('./data/latex');


function layoutPage() {
  var parent = new BoxPanel();
  parent.id = 'main';
  // Row 1
  var rowOne = new BoxPanel();
  rowOne.spacing = 1;
  rowOne.direction = BoxPanel.LeftToRight;
  parent.addChild(rowOne);
  // Row 2
  var rowTwo = new BoxPanel();
  rowTwo.spacing = 1;
  rowTwo.direction = BoxPanel.LeftToRight;
  parent.addChild(rowTwo);
  // Row 3
  var rowThree = new BoxPanel();
  rowThree.spacing = 1;
  rowThree.direction = BoxPanel.LeftToRight;
  parent.addChild(rowThree);
  parent.attach(document.body);
  window.onresize = function () { parent.update(); };
  return [rowOne, rowTwo, rowThree];
}


function main() {
  var noop = function () { return {}; };
  var layout = layoutPage();
  var rowOne = layout[0];
  var rowTwo = layout[1];
  var rowThree = layout[2];

  // Create row one widgets
  var one = new BBWidget(widgets.LatexView);
  var latexModel = new widgets.LatexModel({ callbacks: noop });
  latexModel.set('value', latexData);
  one.model = latexModel;
  one.addClass('one');

  var two = new BBWidget(widgets.ColorPickerView);
  two.model = new widgets.ColorPickerModel({ callbacks: noop });
  two.addClass('two');

  var three = new BBWidget(widgets.ColorPickerView);
  three.model = new widgets.ColorPickerModel({ callbacks: noop });
  three.addClass('three');

  // Populate row one
  rowOne.addChild(one);
  rowOne.addChild(two);
  rowOne.addChild(three);
  BoxPanel.setStretch(one, 1);
  BoxPanel.setStretch(two, 1);
  BoxPanel.setStretch(three, 1);

  // Create row two widgets
  var four = new BBWidget(widgets.ColorPickerView);
  four.model = new widgets.ColorPickerModel({ callbacks: noop });
  four.addClass('four');

  var five = new BBWidget(widgets.ImageView);
  var imageModel = new widgets.ImageModel({ callbacks: noop });
  imageModel.set('_b64value', imageData);
  imageModel.set('format', 'png');
  imageModel.set('width', '150');
  imageModel.set('height', '150');
  five.model = imageModel;
  five.addClass('five');

  var six = new BBWidget(widgets.ColorPickerView);
  six.model = new widgets.ColorPickerModel({ callbacks: noop });
  six.addClass('six');

  // Populate row two
  rowTwo.addChild(four);
  rowTwo.addChild(five);
  rowTwo.addChild(six);
  BoxPanel.setStretch(four, 1);
  BoxPanel.setStretch(five, 1);
  BoxPanel.setStretch(six, 1);

  // Create row three widgets
  var seven = new BBWidget(widgets.ColorPickerView);
  seven.model = new widgets.ColorPickerModel({ callbacks: noop });
  seven.addClass('seven');

  var eight = new BBWidget(widgets.ColorPickerView);
  eight.model = new widgets.ColorPickerModel({ callbacks: noop });
  eight.addClass('eight');

  var nine = new BBWidget(widgets.ColorPickerView);
  nine.model = new widgets.ColorPickerModel({ callbacks: noop });
  nine.addClass('nine');

  // Populate row two
  rowThree.addChild(seven);
  rowThree.addChild(eight);
  rowThree.addChild(nine);
  BoxPanel.setStretch(seven, 1);
  BoxPanel.setStretch(eight, 1);
  BoxPanel.setStretch(nine, 1);
}

window.onload = main;
