import React, {useState} from 'react'
import {Column} from 'primereact/column'
import {DataTable} from 'primereact/datatable'
import {Button} from 'primereact/button'
import BodyPaper from '../BodyPaper'
import { InputText } from 'primereact/inputtext'

// @ts-ignore
const TransactionTable = ({data}) => {
  const [showAll, setShowAll] = useState(false)
  const [globalFilter, setGlobalFilter] = useState('')

  const handleOnClickShowAll = () => setShowAll((prevState: boolean) => !prevState)


  const renderHeader = () => {

    const handleOnInput = (event: { target: { value: React.SetStateAction<string> } }) => setGlobalFilter(event.target.value)

    return (
      <div className="table-header">
        List of Transactions
        <span style={{ marginLeft: '10px', marginTop: '10px'}} className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText

            type="search"
            /* @ts-ignore */
            onInput={handleOnInput}
            placeholder="Global Search"
          />
        </span>


        <Button
          style={{ marginLeft: '10px', marginTop: '10px'}}
          onClick={handleOnClickShowAll}
        >
          {showAll ? 'Show Overview': 'Show All Columns'}
        </Button>
      </div>
    )
  }

  const header = renderHeader()


  // TODO conditionally render just the columns
  return(
    <BodyPaper>
      <div className="datatable-doc-demo">
        <div className="card">
          { showAll && (
            <DataTable
              scrollable
              scrollHeight="400px"
              header={header}
              globalFilter={globalFilter}
              value={data}
              className="p-datatable-striped p-datatable-gridlines p-datatable-transactions"
              dataKey='hash_or_transaction_id'
              paginator
              rows={20}
              emptyMessage="No Transactions found"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rowsPerPageOptions={[20, 50, 100]}
              sortField={'insertedAt'}
              sortOrder={-1}
            >
              <Column style={{width:'700px'}} sortable field="hash_or_transaction_id" header="Transaction Id" filter filterPlaceholder="Search by Transaction"/>
              <Column style={{width:'250px'}} sortable field='insertedAt' header="Time Of Transaction"/>
              <Column style={{width:'220px'}} sortable field='coin(s)' header="Coin(s)" filter filterPlaceholder="Search by Coin(s)"/>
              <Column style={{width:'200px'}} sortable field='Amount (Crypto)' header="Amount (Crypto)"/>
              <Column style={{width:'200px'}} sortable field='Amount (Fiat)' header="Amount (Fiat)"/>
              <Column style={{width:'600px'}} sortable field="to" header="To" filter filterPlaceholder="Search by To"/>
              <Column style={{width:'400px'}} sortable field="from" header="From" filter filterPlaceholder="Search by From"/>
              <Column style={{width:'250px'}} sortable field='status' header="Status" filter filterPlaceholder="Search by Status"/>
              <Column style={{width:'250px'}} sortable field='type' header="Type" filter filterPlaceholder="Search by Type"/>

              <Column style={{width:'250px'}} sortable field="description" header="Description" filter filterPlaceholder="Search by Description" />
              <Column style={{width:'210px'}} sortable field="blockHeight" header="Block Height" filter filterPlaceholder="Search by Block Height"/>
              <Column style={{width:'210px'}} sortable field="double_spend" header="Double Spend" filter filterPlaceholder="Search by Double Spend"/>
              <Column style={{width:'210px'}} sortable field="fromWatchOnly" header="From Watch Only" filter filterPlaceholder="Search by From Watch Only"/>
              <Column style={{width:'210px'}} sortable field="txFee (Crypto)" header="Transaction Fee (Crypto)" />
              <Column style={{width:'210px'}} sortable field="version" header="Version" filter filterPlaceholder="Search by Version"/>

            </DataTable>
          )}

          { !showAll && (
            <DataTable
              scrollable
              scrollHeight="400px"
              header={header}
              globalFilter={globalFilter}
              value={data}
              className="p-datatable-striped p-datatable-gridlines p-datatable-transactions"
              dataKey='hash_or_transaction_id'
              paginator
              rows={20}
              emptyMessage="No Transactions found"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              rowsPerPageOptions={[20, 50, 100]}
              sortField={'insertedAt'}
              sortOrder={-1}
            >
              <Column style={{width:'250px'}} sortable field='insertedAt' header="Time Of Transaction"/>
              <Column style={{width:'220px'}} sortable field='coin(s)' header="Coin(s)" filter filterPlaceholder="Search by Coin(s)"/>
              <Column style={{width:'200px'}} sortable field='Amount (Crypto)' header="Amount (Crypto)"/>
              <Column style={{width:'200px'}} sortable field='Amount (Fiat)' header="Amount (Fiat)"/>
              <Column style={{width:'600px'}} sortable field="to" header="To" filter filterPlaceholder="Search by To"/>
              <Column style={{width:'400px'}} sortable field="from" header="From" filter filterPlaceholder="Search by From"/>
              <Column style={{width:'250px'}} sortable field='status' header="Status" filter filterPlaceholder="Search by Status"/>
              <Column style={{width:'250px'}} sortable field='type' header="Type" filter filterPlaceholder="Search by Type"/>
            </DataTable>
          )}
        </div>
      </div>

    </BodyPaper>
  )
}

export default TransactionTable
