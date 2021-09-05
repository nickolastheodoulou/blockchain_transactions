import React from 'react'
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable'
import BodyPaper from './BodyPaper'

// @ts-ignore
const TransactionTable = ({data}) => {
  console.log(`value is ${data}`)
  return(
    <BodyPaper>
      <DataTable
        value={data}
        className="p-datatable-striped p-datatable-gridlines p-datatable-customers"
        // selectionMode="single"
        dataKey='hash_or_transaction_id'
      >
        <Column field="blockHeight" header="Block Height"/>
        <Column field="description" header="Description"/>

      </DataTable>
    </BodyPaper>
  )
}

export default TransactionTable
