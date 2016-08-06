function create_VIM_VIRTUAL_KEYBOARD() {
  var G = VIM_GENERIC;

  function two(primary, secondary) {
    return {
      'primary': primary,
      'secondary': secondary
    };
  }

  function configurationKey(label, clazz) {
    return {
      'configuration': true,
      'label': label,
      'clazz': clazz
    }
  }

  var escRow = ["Esc", 'hid', 'hid', 'hid', 'hid', 'hid', 'hid','hid','hid','hid'];
  var numberRow = ['`', '1', '2',
    two('3', '#'), two('4', '$'), two('5', '%'),
    two('6',"^"), '7', '8', '9', '0','-','=',{label:'Del',configuration:true,style:'flex:2'}];
  var tabRow = [{label:'tab',configuration:true,style:'flex:1.5'},
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','[',']',
      {configuration:true,label:'\\',style:'flex:1.5'}];
  var capslockRow = [
      {configuration:true,label:'caps',style:'flex:1.7'},
      'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',"'",
      {configuration:true,label:'Enter',style:'flex:2'}];
  var shiftRow = [
      {configuration:true,label:'shift',style:'flex:2.5'},
      'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',two("?","/"),
      {configuration:true,label:'shift',style:'flex:2.5'}];
  var bottomRow = ['ctrl', 'win', 'alt',
      {configuration:true,label:'space',style:'flex:7'},
      'alt','win','menu','ctrl'];

  function createKeyButton(key) {
    //TODO: refactor common functionality
    if(key.configuration) {
      return $('<div />', { 'text': key.label, 'class': ('keyButton ' + key.clazz),'style':key.style });
    } else if(key === "hid")
      return $('<div />', { 'text': '_', 'class': 'keyButton hiddenButton' });
    else if(key.primary !== undefined) {
      var $key = $('<div />', { 'text': (key.primary + " " + key.secondary), 'class': 'keyButton' });
      $key.data('keyboard', key.primary);
      return $key;
    } else if(key.key !== undefined) {
      var $key = $('<div />', { 'text': key.label, 'class': 'keyButton' });
      $key.data('keyboard', key.key);
      return $key;
    } else {
      var $key = $('<div />', { 'text': key, 'class': 'keyButton' });
      $key.data('keyboard', key);
      return $key;
    }
  }

  function createRow(row) {
    var $row = $('<div />', { 'class': 'keyboardRow' });

    G.for_each(row, function(key) {
      $row.append(createKeyButton(key));
    });

    return $row;
  }

  function createKeyboard(rows) {
    var $keyboard = $('<div />', { 'class': 'keyboard' });

    G.for_each(rows, function(row) {
      var $row = createRow(row);
      $keyboard.append($row);
    });

    bindToggleKeyboardSize($keyboard);
    bindToggleScreenBrightness($keyboard);
    bindToggle3d($keyboard);
    return $keyboard;
  }

  function bindToggleKeyboardSize($keyboard) {
    $('.toggle_keyboard_size').on('click', function() {
      $(this).toggleClass('pressed_down');
      $keyboard.toggleClass('small_keyboard');
    });
  }

  function bindToggleScreenBrightness($keyboard) {
    $('.toggle_screen_brightness').on('click', function() {
      $(this).toggleClass('pressed_down');
      $('.editor').toggleClass('darker');
    });
  }

  function bindToggle3d($keyboard) {
    $('.toggle_3d_keyboard').on('click', function() {
      $(this).toggleClass('pressed_down');
      $('.screen_view').toggleClass('view_3d');
    });
  }

  var keyboardAsDom = createKeyboard(
      [escRow, numberRow, tabRow, capslockRow, shiftRow, bottomRow]
  );

  function getKeyButtonByKey(key) {
    return keyboardAsDom.find('.keyButton').filter(function() {
      var value = $(this).data('keyboard');

      return value === key;
    }).first();
  }

  var pressed_down = 'pressed_down';

  function pressButtonDown(key) { addClass(pressed_down, key); }
  function releaseButton(key) { removeClass(pressed_down, key); }
  function releaseButtons() { removeClass(pressed_down); }

  function addClass(clazz, key) { getKeyButtonByKey(key).addClass(clazz); }

  function removeClass(clazz, key) {
    if(key === undefined)
      keyboardAsDom.find('.' + clazz).removeClass(clazz);
    else
      getKeyButtonByKey(key).removeClass(clazz);
  }

  return {
    'addClass': addClass,
    'removeClass': removeClass,
    'pressButtonDown': pressButtonDown,
    'releaseButton': releaseButton,
    'releaseButtons': releaseButtons,
    'keyboardAsDom': keyboardAsDom
  }
}
