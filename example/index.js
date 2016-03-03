// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';


var widgets = require('jupyter-js-widgets');

var BBWidget = require('jupyter-js-bbwidget').BBWidget;

var BoxPanel = require('phosphor-boxpanel').BoxPanel;

var Panel = require('phosphor-panel').Panel;

var Widget = require('phosphor-widget').Widget;

var imageData = require('./data/image');

var latexData = require('./data/latex');


function layoutPage() {
  var parent = new BoxPanel();
  parent.id = 'main';
  parent.spacing = 0;

  // Row 1
  var rowOne = new BoxPanel();
  rowOne.spacing = 0;
  rowOne.direction = BoxPanel.LeftToRight;
  parent.addChild(rowOne);

  // Row 2
  var rowTwo = new BoxPanel();
  rowTwo.spacing = 0;
  rowTwo.direction = BoxPanel.LeftToRight;
  parent.addChild(rowTwo);

  // Row 3
  var rowThree = new BoxPanel();
  rowThree.spacing = 0;
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
  var latexModel = new widgets.LatexModel({ callbacks: noop });
  latexModel.set('value', latexData);
  var one = new BBWidget(new widgets.LatexView({
    model: latexModel
  }));
  one.addClass('one');

  var colorPickerModel = new widgets.ColorPickerModel({ callbacks: noop });
  colorPickerModel.set('description', 'Color picker widget');
  var two = new BBWidget(new widgets.ColorPickerView({
    model: colorPickerModel
  }));
  two.addClass('two');

  var checkboxModel = new widgets.CheckboxModel({ callbacks: noop });
  checkboxModel.set('description', 'Checkbox widget');
  var three = new BBWidget(new widgets.CheckboxView({
    model: checkboxModel
  }));
  three.addClass('three');

  // Populate row one
  rowOne.addChild(one);
  rowOne.addChild(two);
  rowOne.addChild(three);
  BoxPanel.setStretch(one, 1);
  BoxPanel.setStretch(two, 1);
  BoxPanel.setStretch(three, 1);

  // Create row two widgets
  var four = new BoxPanel();
  var fourA = new Panel();
  var fourB = new Panel();
  BoxPanel.setStretch(fourA, 1);
  BoxPanel.setStretch(fourB, 1);
  fourA.addClass('four-a');
  fourB.addClass('four-b');
  four.direction = BoxPanel.LeftToRight;
  four.addChild(fourA);
  four.addChild(fourB);
  four.addClass('four');
  ['primary', 'success', 'info', 'warning', 'danger'].forEach(function (style) {
    // Regular button
    var buttonModel = new widgets.ButtonModel({ callbacks: noop });
    buttonModel.set('tooltip', style + ' button');
    buttonModel.set('description', style + ' button');
    buttonModel.set('button_style', style);
    fourA.addChild(new BBWidget(new widgets.ButtonView({
      model: buttonModel
    })));

    // Toggle button
    var toggleButtonModel = new widgets.ToggleButtonModel({ callbacks: noop });
    toggleButtonModel.set('tooltip', style + ' toggle');
    toggleButtonModel.set('description', style + ' toggle');
    toggleButtonModel.set('button_style', style);
    fourB.addChild(new BBWidget(new widgets.ToggleButtonView({
      model: toggleButtonModel
    })));
  });

  var imageModel = new widgets.ImageModel({ callbacks: noop });
  imageModel.set('_b64value', imageData);
  imageModel.set('format', 'png');
  imageModel.set('width', '150');
  imageModel.set('height', '150');
  var five = new BBWidget(new widgets.ImageView({
    model: imageModel
  }));
  five.addClass('five');

  var six = new Widget();
  six.node.textContent = '6 ';
  six.addClass('six');

  // Populate row two
  rowTwo.addChild(four);
  rowTwo.addChild(five);
  rowTwo.addChild(six);
  BoxPanel.setStretch(four, 1);
  BoxPanel.setStretch(five, 1);
  BoxPanel.setStretch(six, 1);

  // Create row three widgets
  var seven = new Widget();
  seven.node.textContent = '7';
  seven.addClass('seven');

  var eight = new Widget();
  eight.node.textContent = '8';
  eight.addClass('eight');

  var nine = new Widget();
  nine.node.textContent = '9';
  nine.addClass('nine');

  // Populate row three
  rowThree.addChild(seven);
  rowThree.addChild(eight);
  rowThree.addChild(nine);
  BoxPanel.setStretch(seven, 1);
  BoxPanel.setStretch(eight, 1);
  BoxPanel.setStretch(nine, 1);
}

window.onload = main;
