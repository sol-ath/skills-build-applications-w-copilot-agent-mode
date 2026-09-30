import { useEffect, useState } from 'react'

import { fetchCollection } from '../api.js'

function formatLabel(value) {
  return value
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (character) => character.toUpperCase())
}

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value && typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

function CollectionView({ collection, endpoint, title, intro, fields }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadItems() {
      try {
        const data = await fetchCollection(collection)

        if (isActive) {
          setItems(data)
          setStatus('ready')
        }
      } catch (loadError) {
        if (isActive) {
          setError(loadError.message)
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isActive = false
    }
  }, [collection])

  return (
    <section className="collection-page">
      <div className="page-heading">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <code className="endpoint">{endpoint}</code>
      </div>

      {status === 'loading' && <p className="notice">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="notice error">{error}</p>}
      {status === 'ready' && items.length === 0 && <p className="notice">No records found.</p>}

      <div className="data-grid">
        {items.map((item) => (
          <article className="data-card" key={item._id ?? item.id ?? JSON.stringify(item)}>
            {fields.map((field) => (
              <div className="data-row" key={field}>
                <span>{formatLabel(field)}</span>
                <strong>{formatValue(item[field] ?? 'Not set')}</strong>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionView