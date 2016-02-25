// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';


var widgets = require('jupyter-js-widgets');

var BBWidget = require('jupyter-js-bbwidget').BBWidget;

var BoxPanel = require('phosphor-boxpanel').BoxPanel;


function main() {
  var parent = new BoxPanel();
  parent.id = 'main';

  var rowOne = new BoxPanel();
  rowOne.spacing = 1;
  rowOne.direction = BoxPanel.LeftToRight;
  var one = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  one.addClass('one');
  rowOne.addChild(one);
  var two = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  two.addClass('two');
  rowOne.addChild(two);
  var three = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  three.addClass('three');
  rowOne.addChild(three);
  BoxPanel.setStretch(one, 1);
  BoxPanel.setStretch(two, 1);
  BoxPanel.setStretch(three, 1);
  parent.addChild(rowOne);

  var rowTwo = new BoxPanel();
  rowTwo.spacing = 1;
  rowTwo.direction = BoxPanel.LeftToRight;
  var four = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  four.addClass('four');
  rowTwo.addChild(four);
  var five = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  five.addClass('five');
  rowTwo.addChild(five);
  var six = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  six.addClass('six');
  rowTwo.addChild(six);
  BoxPanel.setStretch(four, 1);
  BoxPanel.setStretch(five, 1);
  BoxPanel.setStretch(six, 1);
  parent.addChild(rowTwo);

  var rowThree = new BoxPanel();
  rowThree.spacing = 1;
  rowThree.direction = BoxPanel.LeftToRight;
  var seven = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  seven.addClass('seven');
  rowThree.addChild(seven);
  var eight = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  eight.addClass('eight');
  rowThree.addChild(eight);
  var nine = new BBWidget(widgets.ColorPickerView, {
    model: new widgets.ColorPickerModel({
      callbacks: function () { return {}; }
    })
  });
  nine.addClass('nine');
  rowThree.addChild(nine);
  BoxPanel.setStretch(seven, 1);
  BoxPanel.setStretch(eight, 1);
  BoxPanel.setStretch(nine, 1);
  parent.addChild(rowThree);

  parent.attach(document.body);
}

window.onload = main;
