const System = imports.ui.main.panel.statusArea.aggregateMenu._system;

var _settingsOffItem = System._settingsAction;
var _powerOffItem = System._altSwitcher.actor;
var _suspendAction = System._lockScreenAction;

function init() {}

function enable() {
  if (System._actionsItem === undefined) {
    // Gnome >= 3.33
    System.buttonGroup.remove_child(_powerOffItem);
    System.buttonGroup.remove_child(_settingsOffItem);
    System.buttonGroup.remove_child(_suspendAction);
  } else if (System._session === undefined) {
    // Gnome >= 3.26
    System._actionsItem.actor.remove_child(_powerOffItem);
    System._actionsItem.actor.remove_child(_settingsOffItem);
    System._actionsItem.actor.remove_child(_suspendAction);
  } else {
    System.buttonGroup.remove_child(_powerOffItem);
    System.buttonGroup.remove_child(_settingsOffItem);
    System.buttonGroup.remove_child(_suspendAction);
  }
}

function disable() {
  if (System._actionsItem === undefined) {
    System.buttonGroup.add_child(_powerOffItem);
    System.buttonGroup.add_child(_settingsOffItem);
    System.buttonGroup.add_child(_suspendAction);
  } else {
    System._actionsItem.actor.add_child(_powerOffItem);
    System._actionsItem.actor.add_child(_settingsOffItem);
    System._actionsItem.actor.add_child(_suspendAction);
  }
}
