/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

var foo = 1;
beforeAll(function(done) {
  setTimeout(function(){
    foo = 2;
    done();
  }, 900000)
});

jest.setTimeout(900001)
describe("Async setup", function(){

  it("should have foo equal to 2.", function(done){
    expect(foo).toEqual(2);
    done();
  });

  it("should have foo not equal 3.", function(done){
    expect(foo).not.toEqual(3);
    done();
  });

});