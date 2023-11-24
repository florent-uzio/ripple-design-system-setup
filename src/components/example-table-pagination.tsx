import {
  Controls,
  OptionMenu,
  PaginationControls,
  Table,
  usePaginationControls,
} from "@ripple/design-system"
import { useEffect, useState } from "react"

type Post = {
  body: string
  title: string
  userId: number
  id: number
}

type Response = {
  data: Post[]
  page: {
    totalElements: number
  }
}

const pageSizeOpts = [5, 10, 25]

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

export const ExampleTablePagination = () => {
  const [posts, setPosts] = useState<Response>({
    data: [],
    page: { totalElements: 0 },
  })
  const { page, pageSize, controlProps } = usePaginationControls({
    defaultPageSize: pageSizeOpts[0],
  })

  const handleDelete = (contactId: number) => {
    alert(`Deletng ${contactId}`)
  }

  const fetchPosts = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json(),
    )

    const data = posts.slice(page * pageSize, pageSize * (page + 1))

    const response = {
      data,
      page: {
        totalElements: +posts.length,
      },
    }

    setPosts(response)
  }

  useEffect(() => {
    fetchPosts()
  }, [pageSize, page])

  return (
    <>
      <Table colWidths={[5, 10, 70, 10, 5]}>
        <Table.Header>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>UserId</Table.HeaderCell>
          <Table.HeaderCell>Body</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {posts?.data.map((post) => (
            <Table.Row key={post.id}>
              <Table.Cell>{post.id}</Table.Cell>
              <Table.Cell>{post.userId}</Table.Cell>
              <Table.Cell>{post.body}</Table.Cell>
              <Table.Cell>{post.title}</Table.Cell>
              <Table.Cell align="right">
                <OptionMenu
                  iconOrientation="vertical"
                  actions={[
                    {
                      label: "Edit",
                      onSelect: () => {
                        alert(post.id)
                      },
                    },
                    { label: "Delete", onSelect: () => handleDelete(post.id) },
                  ]}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <PaginationControls
        {...controlProps}
        pageSizeOptions={pageSizeOpts}
        totalItems={posts.page.totalElements}
      />
    </>
  )
}
