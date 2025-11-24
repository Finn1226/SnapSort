// Google Apps Script - Copy this to your Google Apps Script project
// This receives data from your website and saves it to Google Sheets

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // If this is the first entry, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Action", "User Agent", "Screen Size"]);
    }

    // Add the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.action,
      data.userAgent,
      data.screenSize,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this to verify setup
function test() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        action: "signup",
        userAgent: "Test Browser",
        screenSize: "1920x1080",
      }),
    },
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
}
