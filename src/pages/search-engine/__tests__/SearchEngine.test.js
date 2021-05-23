import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchEngine } from '../SearchEngine'
import { SearchClient } from 'app/search/client'

test('should render the page title', () => {
  render(<SearchEngine />)

  const pagetitle = screen.getByRole('heading', {
    name: 'Spotify Search Engine',
    level: 1,
  })

  expect(pagetitle).toBeInTheDocument()
})

test('should can type search but not search if is under 3 of length', () => {
  SearchClient.search = jest.fn()
  render(<SearchEngine />)

  const inputSearch = screen.getByPlaceholderText('Search artist')
  userEvent.type(inputSearch, 'abc')

  expect(SearchClient.search).not.toHaveBeenCalled()
})

test('should can type search and search', async () => {
  SearchClient.search = jest.fn().mockReturnValue({
    artists: [],
    albums: [],
    tracks: [],
  })
  render(<SearchEngine />)

  const inputSearch = screen.getByPlaceholderText('Search artist')
  userEvent.type(inputSearch, 'abcd')
  await waitForElementToBeRemoved(() => screen.getByText('Please put your search keywords in the search box'))

  expect(SearchClient.search).toHaveBeenCalledWith('abcd')
})

test('should can view the number of the artists returned', async () => {
  SearchClient.search = jest.fn().mockReturnValue({
    artists: [{
      id: 'test',
      name: 'test',
      image: 'test',
      appLinks: 'test',
    }],
    albums: [],
    tracks: [],
  })
  render(<SearchEngine />)

  const inputSearch = screen.getByPlaceholderText('Search artist')
  userEvent.type(inputSearch, 'abcd')
  await waitForElementToBeRemoved(() => screen.getByText('Please put your search keywords in the search box'))

  expect(screen.getByRole(
    'heading', { name: 'We found 1 artists!', level: 2}
    )).toBeInTheDocument()
})

test('should can view the artists returned in the list', async () => {
  SearchClient.search = jest.fn().mockReturnValue({
    artists: [
      {
        id: 'test1',
        name: 'Artist 1',
        image: 'Artist 1 image',
        appLinks: 'Artist 1 app link',
      },
      {
        id: 'test2',
        name: 'Artist 2',
        image: 'Artist 2 image',
        appLinks: 'Artist 2 app link',
      }
    ],
    albums: [],
    tracks: [],
  })
  render(<SearchEngine />)

  const inputSearch = screen.getByPlaceholderText('Search artist')
  userEvent.type(inputSearch, 'abcd')
  await waitForElementToBeRemoved(() => screen.getByText('Please put your search keywords in the search box'))

  expect(screen.getByText('Artist 1')).toBeInTheDocument()
  expect(screen.getByText('Artist 2')).toBeInTheDocument()
})