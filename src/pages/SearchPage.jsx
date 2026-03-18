import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { debounce } from '../utilit/debounce'
import Card from '../components/Card'
import Input from '../components/Input'
import { SearchIcon } from 'lucide-react'

export default function SearchPage() {

  const products = useSelector(state => state.product.products)
  const [searchData, setSearchData] = useState([])

  const { search } = useParams()
  const navigate = useNavigate()

  // handle input change
  const handleChange = (value) => {
    if (value.trim()) {
      navigate(`/product/search/${encodeURIComponent(value)}`)
    } else {
      navigate(`/`) // or stay empty
    }
  }

  // debounce search
  const debouncedSearch = useMemo(() =>
    debounce((value, productsList) => {

      if (!value) {
        setSearchData([])
        return
      }

      const decoded = decodeURIComponent(value)

      const filterData = productsList.filter(item =>
        item.title.toLowerCase().includes(decoded.toLowerCase()) ||
        item.category.toLowerCase().includes(decoded.toLowerCase())
      )

      setSearchData(filterData)

    }, 500)
  , [])

  useEffect(() => {
    debouncedSearch(search, products)
  }, [search, products, debouncedSearch])

  return (
    <section className='py-10 px-14 lg:px-20'>

      {/* ✅ SEARCH INPUT */}
      <div className="w-full  lg:hidden mb-10 flex justify-center items-center border px-3.5">
        <Input
          className="w-full border-none outline-none px-1"
          value={decodeURIComponent(search || "")}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search your product"
        />
        <SearchIcon size={24}/>
      </div>

      {/* ✅ RESULTS */}
      <div className='w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
          searchData.length === 0
            ? <p>No products found</p>
            : searchData.map(item =>
                <Card key={item.id} product={item}/>
              )
        }
      </div>

    </section>
  )
}