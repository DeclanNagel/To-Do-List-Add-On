function onOpen() {
  SpreadsheetApp.getUi().createMenu("The Bunny's To-Do List")
    .addItem('Show To-Do List', 'showSidebar') 
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('To-Do List');
  SpreadsheetApp.getUi().showSidebar(html);
}

function showTaskPage() {
  var html = HtmlService.createHtmlOutputFromFile('addTask')
    .setTitle('Add Task');
  SpreadsheetApp.getUi().showSidebar(html);
}

function showDataPage() {
  var html = HtmlService.createHtmlOutputFromFile('seeData')
    .setTitle('See Your Data');
  SpreadsheetApp.getUi().showSidebar(html);
}

function showAboutPage() {
  var html = HtmlService.createHtmlOutputFromFile('aboutPage')
    .setTitle('About Page');
  SpreadsheetApp.getUi().showSidebar(html);
}


