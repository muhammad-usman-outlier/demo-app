/* eslint-disable jest/valid-expect */
jest.setTimeout(900000)

describe('Async setup', function () {
  var foo = 1
  beforeEach(function (done) {
    setTimeout(function () {
      foo = 2
      done()
    }, 400000)
  })

  it('should have foo equal to 2.', function (done) {
    expect(foo).toEqual(2)
    done()
  })

  it('should have foo not equal 3.', function (done) {
    expect(foo).not.toEqual(3)
    done()
  })
})
