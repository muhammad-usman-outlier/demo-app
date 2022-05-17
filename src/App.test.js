/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn sreact/i)
  expect(linkElement).toBeInTheDocument()
})
