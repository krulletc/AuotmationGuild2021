describe('Login Page', function () {
  it('should let you log in', function () {
    browser.url('./login')
    $('input#email').setValue('stephen@dialexa.com')
    $('input#password').setValue('Password123!')

    const $signIn = $('button*=Login')
    $signIn.click()
    $signIn.waitForExist({reverse: true})

    expect($('=Dashboard')).toBeExisting()
  })
})
