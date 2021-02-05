describe('Example to demonstrate the handling of Shadow Dom in WDIO', function () {
  it('delete an item in the list', function () {
    browser.url('https://mdn.github.io/web-components-examples/editable-list/')
    $('editable-list').shadow$('li').$('button').click()

    expect($('editable-list').shadow$('li')).toHaveTextContaining(
      'Second item',
    )
  })
})