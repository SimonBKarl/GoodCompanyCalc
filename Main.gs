
const SHEET_calcTool      = "Calculator Tool";
const SHEET_items         = "Items";
const SHEET_crafting      = "Crafting";
const SHEET_input         = "Input";

const RANGE_items           = "A2:O199";
const RANGE_crafting        = "A2:E500";
const RANGE_input_item      = "C5:C18";
const RANGE_input_crafting  = "G5:G9";

// =======================================================

function sort_items() {
  var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_items).getRange(RANGE_items);
  range.sort([{column : 1}]);
}

function sort_crafters() {
  var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_crafting).getRange(RANGE_crafting);
  range.sort([{column : 1}, {column :3}]);
}

// =======================================================

function add_crafting(){
  var inputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_input);
  var craftSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_crafting);
  var inputRow = inputSheet.getRange(RANGE_input_crafting).getValues();
  var nextEmptyRow = 1;
  var allRows = craftSheet.getRange(RANGE_crafting).getValues();

  for (var i = 0; i < allRows.length; i++){
    if (allRows[i][0] == null || allRows[i][0] == ""){
      nextEmptyRow = i + 2;
      break;
    }
  }

  for (var k = 0; k < 4; k++){
    
    var value = inputRow[k][0];

    // additional handling for build time conversion
    if (k == 2){ 
      value = Math.ceil(parseFloat(value) * 20);
    }

    craftSheet.getRange(nextEmptyRow, k + 1).setValue(value);
  }

  craftSheet.getRange(nextEmptyRow, 5).setValue(true);

  sort_crafters();
}

// =======================================================

function add_item(){
  var inputSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_input);
  var itemSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_items);
  var inputRow = inputSheet.getRange(RANGE_input_item).getValues();
  var nextEmptyRow = 1;
  var allRows = itemSheet.getRange(RANGE_items).getValues();

  for (var i = 0; i < allRows.length; i++){
    if (allRows[i][0] == null || allRows[i][0] == ""){
      nextEmptyRow = i + 2;
      break;
    }
  }

  for (var k = 0; k < 14; k++){    
    var value = inputRow[k][0];

    itemSheet.getRange(nextEmptyRow, k + 1).setValue(value);
  }

  itemSheet.getRange(nextEmptyRow, 15).setValue(true);

  sort_items();
}

// =======================================================

function clear_custom_content(){
  var itemSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_items);
  var craftSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_crafting);
  var allRows;
  var clearRow;

  if (!showMsgBox("Do you really want to remove all custom content?", true, 0)){
    return;
  }

  // clear items
  allRows = itemSheet.getRange(RANGE_items).getValues();

  for (var i = 0; i < allRows.length; i++){
    if (allRows[i][14] == true){
      clearRow = i + 2;
      
      var clearRange = "A" + clearRow + ":O" + clearRow;
      itemSheet.getRange(clearRange).clearContent();
    }
  }

  sort_items();

  // clear craftings
  allRows = itemSheet.getRange(RANGE_crafting).getValues();

  for (var k = 0; k < allRows.length; k++){    
    if (allRows[i][4] == true){
      clearRow = i + 2;
      
      var clearRange = "A" + clearRow + ":E" + clearRow;
      craftSheet.getRange(clearRange).clearContent();
    }
  }

  sort_crafters();
}

// =======================================================

