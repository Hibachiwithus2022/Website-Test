'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { PRICING, COUNTRY_STORAGE_KEY, DEFAULT_COUNTRY } from '../lib/pricingConfig'

const CountryContext = createContext(null)

export function CountryProvider({ children }) {
  const [country, setCountryState] = useState(DEFAULT_COUNTRY)

  useEffect(() => {
    const saved = window.localStorage.getItem(COUNTRY_STORAGE_KEY)
    if (saved === 'us' || saved === 'ca') setCountryState(saved)
  }, [])

  function setCountry(next) {
    setCountryState(next)
    window.localStorage.setItem(COUNTRY_STORAGE_KEY, next)
  }

  return (
    <CountryContext.Provider value={{ country, setCountry, pricing: PRICING[country] }}>
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  const ctx = useContext(CountryContext)
  if (!ctx) throw new Error('useCountry must be used within a CountryProvider')
  return ctx
}
