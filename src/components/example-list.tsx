import {
  Collection,
  CollectionControlsCustomOptions,
  Controls,
  OptionMenu,
  Table,
  useCollectionControls,
} from "@ripple/design-system"

type Response = {
  body: string
  title: string
  userId: number
  id: number
}

export const getRequestParamsFromControls = (controls?: Controls) => {
  const pageIndex = controls?.pagination.pageIndex
  const pageSize = controls?.pagination.pageSize

  return {
    queryKeyControls: [`${pageIndex}:${pageSize}`, controls?.sorting],
    requestControls: {
      sort: controls?.sorting,
      size: pageSize,
      page: pageIndex,
    },
  }
}

const options: CollectionControlsCustomOptions = {
  response: {
    resultsKey: "data",
    totalResultsKey: "page.totalElements",
  },
  pagination: {
    defaultPage: 0,
    // defaultPageSize: 10,
    // pageSizeOptions: [5, 10, 25, 50],
  },
}

export const ExampleList = () => {
  // const { controlProps } = usePaginationControls()
  const fetchControlledData = async ({ pagination }: Controls) => {
    // const originalData = Array.from({ length: 100 }).map((_, i) => {
    //   return { body: `body-${i}`, title: `title-${i}`, id: i, userId: i }
    // })

    const result: Response[] = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json(),
    )

    const data = result.slice(
      pagination.pageIndex * pagination.pageSize,
      pagination.pageSize * (pagination.pageIndex + 1),
    )

    const response = {
      data,
      page: {
        totalElements: result.length,
      },
    }
    // console.log(response)
    return response
  }

  const { rows, controls } = useCollectionControls(
    {
      fetcher: (controls) => fetchControlledData(controls), //withControls(fetchControlledData),
      columns: [
        { accessorKey: "body" },
        { accessorKey: "id" },
        { accessorKey: "title" },
        { accessorKey: "userId" },
      ],
    },
    options,
    { perf: false, state: true },
  )

  const handleDelete = (contactId: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this contact ?")
    if (isConfirmed) {
      alert(contactId)
    }
  }

  return (
    <>
      <Collection controls={controls}>
        <Table colWidths={[5, 10, 70, 10, 5]}>
          <Table.Header>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>UserId</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {rows.map(({ row }) => (
              <Table.Row key={row.id}>
                <Table.Cell>{row.id}</Table.Cell>
                <Table.Cell>{row.userId}</Table.Cell>
                <Table.Cell>{row.body}</Table.Cell>
                <Table.Cell>{row.title}</Table.Cell>
                <Table.Cell align="right">
                  <OptionMenu
                    iconOrientation="vertical"
                    actions={[
                      {
                        label: "Edit",
                        onSelect: () => {
                          alert(row.id)
                        },
                      },
                      { label: "Delete", onSelect: () => handleDelete(row.id) },
                    ]}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Collection.Pagination />
      </Collection>
      {/* <PaginationControls totalItems={100} {...controlProps} /> */}
    </>
  )
}
