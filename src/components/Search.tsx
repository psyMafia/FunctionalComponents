import Axios from 'axios'
import { url } from 'inspector'
import React, { useEffect, useState } from 'react'

const Search: React.FC = () => {
  const [searchItem, setSearchItem] = useState('')
  const [result, setResult] = useState<Array<{title: string, snippet:string, pageid: string }>>([])

  useEffect(() => {
    const i = setTimeout(() => {
      search(searchItem)
    }, 1000)

    return () => {
      console.log('Clear timer')
      clearTimeout(i)
    }
  }, [searchItem])

  const search = async (val: string) => {
    if (val.length < 3) { return }

    const result = await Axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: val
      }
    })
    setResult(result.data.query.search)
  }

  const renderedResults = result.map((value) => {
    return (
            <div className="item" key={value.pageid}>
                <div className="content" >
                    <a className="header"
                        target="_blank"
                        href={`https://en.wikipedia.org?curid=${value.pageid}`}
                        rel="noreferrer" >
                        {value.title}
                    </a>
                    <span dangerouslySetInnerHTML={{ __html: value.snippet }}></span>
                </div>
            </div>
    )
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Typed value: ${e.target.value}`)
    setSearchItem(e.target.value)
  }

  return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        value={searchItem}
                        onChange={onChangeHandler}
                        className="input">
                    </input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
  )
}
export default Search
