import React from 'react'
import { render } from '@testing-library/react'
import Transactions from './Transactions'
// import { shallow } from 'enzyme'

test('renders learn react link', () => {
  const { getByText } = render(
    <Transactions />
  )

  expect(getByText(/Current Prices/)).toBeInTheDocument()
})
