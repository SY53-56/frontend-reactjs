import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useOutletContext } from 'react-router'
import { debounce } from '../utilit/debounce'
import Card from '../components/Card'

export default function SearchPage() {

  const search = useOutletContext()
  const { products } = useSelector(state => state.product)
  const [searchData, setSearchData] = useState([])

  // create debounce once
  const debouncedSearch = useMemo(() =>
    debounce((value, productsList) => {
      if (!value) {
        setSearchData([])
        return
      }

      const filterData = productsList.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )

      setSearchData(filterData)
    }, 400)
  , [])

  useEffect(() => {
    debouncedSearch(search, products)
  }, [search, products, debouncedSearch])

  return (
    <section className='py-10 px-20'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
          searchData.length === 0
            ? <p>There are no products</p>
            : searchData.map(item =>
                <Card key={item.id} product={item}/>
              )
        }
      </div>
    </section>
  )
}