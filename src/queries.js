import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
query Query {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
query Query {
    allBooks {
      author
      genres
      id
      published
      title
    }
  }
`

export const ADD_BOOK = gql`
mutation Mutation($title: String, $author: String, $published: Int, $genres: [String]) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
      author
      genres
      id
      published
      title
    }
  }
`

export const EDIT_AUTHOR= gql`
mutation EditAuthor($name: String, $born: Int) {
    editAuthor(name: $name, born: $born) {
      id
      name
      born
      bookCount
    }
  }
`
  