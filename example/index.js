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

var optionData = require('./data/option');


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

  // Row:Cell => 1:1
  var one = new BoxPanel();
  one.spacing = 0;
  one.direction = BoxPanel.TopToBottom;

  var labelModel = new widgets.LabelModel({ callbacks: noop });
  labelModel.set('value', latexData);
  var oneA = new BBWidget(new widgets.LabelView({ model: labelModel }));

  var colorPickerModel = new widgets.ColorPickerModel({ callbacks: noop });
  colorPickerModel.set('description', 'Color picker widget');
  var oneB = new BBWidget(new widgets.ColorPickerView({
    model: colorPickerModel
  }));

  BoxPanel.setStretch(oneA, 1.33);
  BoxPanel.setStretch(oneB, 1);

  oneA.addClass('one-a');
  oneB.addClass('one-b');

  one.addChild(oneA);
  one.addChild(oneB);
  one.addClass('one');

  // Row:Cell => 1:2
  var two = new BoxPanel();
  two.spacing = 0;
  two.direction = BoxPanel.LeftToRight;

  var selectModel = new widgets.SelectModel({ callbacks: noop });
  selectModel.set('_options_labels', optionData);
  selectModel.set('description', 'Select (single) widget');
  var twoA = new BBWidget(new widgets.SelectView({
    model: selectModel
  }));

  var selectMultipleModel = new widgets.SelectMultipleModel({
    callbacks: noop
  });
  selectMultipleModel.set('_options_labels', optionData);
  selectMultipleModel.set('description', 'Select (multiple) widget');
  var twoB = new BBWidget(new widgets.SelectMultipleView({
    model: selectMultipleModel
  }));

  twoA.addClass('two-a');
  twoB.addClass('two-b');

  two.addChild(twoA);
  two.addChild(twoB);
  two.addClass('two');

  // Row:Cell => 1:3
  var three = new BoxPanel();
  three.spacing = 0;
  three.direction = BoxPanel.TopToBottom;

  var checkboxModel = new widgets.CheckboxModel({ callbacks: noop });
  checkboxModel.set('description', 'Checkbox widget');
  var threeA = new BBWidget(new widgets.CheckboxView({ model: checkboxModel }));

  var validModelFalse = new widgets.ValidModel({ callbacks: noop });
  validModelFalse.set('value', false);
  var threeB = new BBWidget(new widgets.ValidView({ model: validModelFalse }));

  var validModelTrue = new widgets.ValidModel({ callbacks: noop });
  validModelTrue.set('value', true);
  var threeC = new BBWidget(new widgets.ValidView({ model: validModelTrue }));

  BoxPanel.setStretch(threeA, 1);
  BoxPanel.setStretch(threeB, 1);
  BoxPanel.setStretch(threeC, 1);

  threeA.addClass('three-a');
  threeB.addClass('three-b');
  threeC.addClass('three-c');

  three.addChild(threeA);
  three.addChild(threeB);
  three.addChild(threeC);
  three.addClass('three');

  // Populate row one
  rowOne.addChild(one);
  rowOne.addChild(two);
  rowOne.addChild(three);
  BoxPanel.setStretch(one, 1);
  BoxPanel.setStretch(two, 1);
  BoxPanel.setStretch(three, 1);

  // Row:Cell => 2:1
  var four = new BoxPanel();
  four.spacing = 0;
  four.direction = BoxPanel.LeftToRight;

  var fourA = new Panel();
  var fourB = new Panel();

  BoxPanel.setStretch(fourA, 1);
  BoxPanel.setStretch(fourB, 1);

  fourA.addClass('four-a');
  fourB.addClass('four-b');

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

  // Row:Cell => 2:2
  var imageModel = new widgets.ImageModel({ callbacks: noop });
  imageModel.set('_b64value', imageData);
  imageModel.set('format', 'png');
  imageModel.set('width', '150');
  imageModel.set('height', '150');
  var five = new BBWidget(new widgets.ImageView({ model: imageModel }));
  five.addClass('five');

  // Row:Cell => 2:3
  var radioButtonsModel = new widgets.RadioButtonsModel({
    callbacks: noop
  });
  radioButtonsModel.set('_options_labels', optionData.slice(0, 5));
  radioButtonsModel.set('description', 'Radio widget');
  var six = new BBWidget(new widgets.RadioButtonsView({
    model: radioButtonsModel
  }));
  six.addClass('six');

  // Populate row two
  rowTwo.addChild(four);
  rowTwo.addChild(five);
  rowTwo.addChild(six);
  BoxPanel.setStretch(four, 1);
  BoxPanel.setStretch(five, 1);
  BoxPanel.setStretch(six, 1);

  // Row:Cell => 3:1
  var toggleButtonsModel = new widgets.ToggleButtonsModel({ callbacks: noop });
  toggleButtonsModel.set('_options_labels', optionData);
  toggleButtonsModel.set('description', 'Toggle buttons widget');
  toggleButtonsModel.set('button_style', 'danger');
  var seven = new BBWidget(new widgets.ToggleButtonsView({
    model: toggleButtonsModel
  }));
  seven.addClass('seven');

  // Row:Cell => 3:2
  var dropdownModel = new widgets.DropdownModel({ callbacks: noop });
  dropdownModel.set('_options_labels', optionData);
  dropdownModel.set('description', 'Dropdown widget');
  dropdownModel.set('button_style', 'info');
  var eight = new BBWidget(new widgets.DropdownView({ model: dropdownModel }));
  eight.addClass('eight');

  // Row:Cell => 3:3
  var tabModel = new widgets.TabModel(new widgets.ManagerBase());

  var htmlModelOne = new widgets.HTMLModel({ callbacks: noop });
  htmlModelOne.set('value', 'HTML view 1');

  var htmlModelTwo = new widgets.HTMLModel({ callbacks: noop });
  htmlModelTwo.set('value', 'HTML view 2');

  var htmlModelThree = new widgets.HTMLModel({ callbacks: noop });
  htmlModelThree.set('value', 'HTML view 3');

  tabModel.set('children', [htmlModelOne, htmlModelTwo, htmlModelThree]);
  tabModel.set('_titles', {
    0: optionData[0],
    1: optionData[1],
    2: optionData[2]
  });

  var tabView = new widgets.TabView({ model: tabModel });

  var nine = new BBWidget(tabView);
  nine.addClass('nine');

  requestAnimationFrame(function() { tabView.trigger('displayed'); });

  // Populate row three
  rowThree.addChild(seven);
  rowThree.addChild(eight);
  rowThree.addChild(nine);
  BoxPanel.setStretch(seven, 1);
  BoxPanel.setStretch(eight, 1);
  BoxPanel.setStretch(nine, 1);
}

window.onload = main;
