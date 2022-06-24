// =======================================================

function is_active_sheet(targetSheet) {
  var currentSheet = SpreadsheetApp.getActiveSheet().getName();
  
  log(2, "target: " + targetSheet + " | current: " + currentSheet);
  log(1, targetSheet + " <> " + currentSheet);

  if (currentSheet == targetSheet){
    log(2, "is_active_sheet -> true");
    return true;
  }
  else
  {
    log(2, "is_active_sheet -> false");
    return false;
  }
}

// =======================================================

const DEBUG_LEVEL = 0;
  
function log(msg){
  Logger.log(msg);
}

function log(logLevel, msg){
  if (DEBUG_LEVEL >= logLevel){
    Logger.log(msg);
  }
}

// =======================================================


function showMsgBox(text, yesno, debugLevel) {
  var confirmed = false;
  
  if (debugLevel > DEBUG_LEVEL)
    return;

  log(debugLevel, text);

  try{
      if (yesno){
        var confirm = Browser.msgBox(text, Browser.Buttons.YES_NO); 

        if(confirm == 'yes'){
          confirmed = true;
        }
        else{
          log("reset aborted!");
          confirmed = false;
        }
      }
      else{
        Browser.msgBox(text, Browser.Buttons.OK);
      }

  } catch (error) { Logger.log(error)}

  return confirmed;
}

// =======================================================

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =======================================================

function get_today(){
  return Utilities.formatDate(new Date(), SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "yyyy-MM-dd");
}

