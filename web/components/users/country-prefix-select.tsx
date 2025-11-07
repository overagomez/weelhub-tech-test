"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { COUNTRIES, searchCountries } from "@/lib/countries"

interface CountryPrefixSelectProps {
  value: string
  onChange: (prefix: string) => void
}

export default function CountryPrefixSelect({ value, onChange }: CountryPrefixSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(COUNTRIES)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const selectedCountry = COUNTRIES.find((c) => c.prefix === value)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCountries(COUNTRIES)
    } else {
      setFilteredCountries(searchCountries(searchQuery))
    }
  }, [searchQuery])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm flex items-center justify-between hover:bg-accent transition-colors"
      >
        <span className="flex items-center gap-2">
          {selectedCountry ? (
            <>
              <span className="text-lg">{selectedCountry.flag}</span>
              <span>{selectedCountry.prefix}</span>
            </>
          ) : (
            <span className="text-muted-foreground">Select country...</span>
          )}
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-input rounded-md shadow-lg z-50">
          <div className="p-2 border-b border-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-2 py-1 border border-input rounded text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="max-h-64 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onChange(country.prefix)
                    setIsOpen(false)
                    setSearchQuery("")
                  }}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-accent transition-colors ${
                    selectedCountry?.code === country.code ? "bg-accent" : ""
                  }`}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1">
                    <div className="text-sm font-medium">{country.name}</div>
                    <div className="text-xs text-muted-foreground">{country.prefix}</div>
                  </span>
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-muted-foreground text-center">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
