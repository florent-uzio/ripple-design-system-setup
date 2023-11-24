import {
  Collection,
  CollectionControlsCustomOptions,
  Controls,
  OptionMenu,
  Table,
  useCollectionControls,
} from "@ripple/design-system"
import { useQuery } from "@tanstack/react-query"

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

type DataResponse = { data: Response[]; page: { totalElements: string } }

export const ExampleList = () => {
  // const { controlProps } = usePaginationControls()

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json()
  }

  const fetchControlledData = async ({ pagination }: Controls) => {
    // const result: Response[] =

    // const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //   return response.json()
    // })

    const { data: response = [] } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts })

    const data = response.slice(
      pagination.pageIndex * pagination.pageSize,
      pagination.pageSize * (pagination.pageIndex + 1),
    )

    const resp = {
      data,
      page: {
        totalElements: response.length,
      },
    }
    console.log(resp)
    return resp
  }

  const fetchControlledData2 = ({ pagination }: Controls) => {}

  const { rows, controls } = useCollectionControls(
    {
      // fetcher: withControls(fetchControlledData), //withControls(fetchControlledData),
      query: () => useQuery({ queryKey: ["posts"], queryFn: fetchPosts }),
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
