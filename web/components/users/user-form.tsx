"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import CountryPrefixSelect from "./country-prefix-select"
import { apiClient } from "@/lib/api-client"
import type { User } from "@/app/users/page"

interface UserFormProps {
  user: User | null
  onSave: () => void
  onCancel: () => void
}

export default function UserForm({ user, onSave, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumberPrefix: "",
    phoneNumberSuffix: "",
    identityDocumentNumber: "",
    identityDocumentType: "DNI",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        surname: user.surname,
        email: user.email,
        phoneNumberPrefix: user.phoneNumberPrefix,
        phoneNumberSuffix: user.phoneNumberSuffix,
        identityDocumentNumber: user.identityDocumentNumber,
        identityDocumentType: user.identityDocumentType,
      })
    }
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePrefixChange = (prefix: string) => {
    setFormData((prev) => ({ ...prev, phoneNumberPrefix: prefix }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (user) {
        await apiClient.updateUser(user.id, formData)
      } else {
        // For create, generate a unique ID (your backend may handle this)
        await apiClient.createUser({
          ...formData,
        })
      }

      onSave()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="John" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Surname</label>
          <Input name="surname" value={formData.surname} onChange={handleChange} placeholder="Doe" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Identity Doc</label>
          <Input
            name="identityDocumentNumber"
            value={formData.identityDocumentNumber}
            onChange={handleChange}
            placeholder="12345678"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Doc Type</label>
          <select
            required
            name="identityDocumentType"
            value={formData.identityDocumentType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
          >
            <option>DNI</option>
            <option>Passport</option>
            <option>ID Card</option>
            <option>License</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1">Phone Prefix</label>
          <CountryPrefixSelect value={formData.phoneNumberPrefix} onChange={handlePrefixChange} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <Input
            name="phoneNumberSuffix"
            value={formData.phoneNumberSuffix}
            onChange={handleChange}
            placeholder="1234567890"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {loading ? "Saving..." : user ? "Update User" : "Create User"}
        </Button>
      </div>
    </form>
  )
}
