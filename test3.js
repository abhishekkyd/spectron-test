var Application = require('spectron').Application
  var assert = require('assert')
  
  var app = new Application({
    path: 'C:/Program Files (x86)/kalk/kalk.exe'
  })
  
  app.start().then(function () {
    // Check if the window is visible
    return app.browserWindow.isVisible()
  }).then(function (isVisible) {
    // Verify the window is visible
    assert.equal(isVisible, true)
  }).then(function () {
    // Get the window's title
    return app.client.getTitle()
  }).then(function (title) {
    // Verify the window's title
    assert.equal(title, 'My App')
  }).catch(function (error) {
    // Log any failures
    console.error('Test failed', error.message)
  }).then(function () {
    // Stop the application
    return app.stop()
  })