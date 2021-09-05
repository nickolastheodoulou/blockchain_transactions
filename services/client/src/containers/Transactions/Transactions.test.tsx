import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import Transactions from './Transactions'
// import { shallow } from 'enzyme'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Transactions />
    </Provider>
  )

  expect(getByText(/prices/)).toBeInTheDocument()
})
