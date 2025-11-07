const API_BASE_URL = process.env.NEXT_PdockUBLIC_API_URL || "http://localhost:4100"

interface CreateUserRequest {
  name: string
  surname: string
  email: string
  phoneNumberPrefix: string
  phoneNumberSuffix: string
  identityDocumentNumber: string
  identityDocumentType: string
}

interface UpdateUserRequest extends Omit<CreateUserRequest, "id"> {}

interface User extends CreateUserRequest {
  id: string
}

interface SearchUsersResponse {
  users: User[]
  total: number
  totalPages: number
}

export const apiClient = {
  // Search/Get all users with pagination
  async searchUsers(search: string, skip: number, take: number): Promise<SearchUsersResponse> {
    const params = new URLSearchParams({
      search,
      skip: skip.toString(),
      take: take.toString(),
    })

    const response = await fetch(`${API_BASE_URL}/api/v1/admin/users?${params}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch users")
    }

    return response.json()
  },

  // Create user
  async createUser(data: CreateUserRequest): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/api/v1/admin/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to create user")
    }

    return response.json()
  },

  // Update user
  async updateUser(id: string, data: UpdateUserRequest): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/api/v1/admin/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Failed to update user")
    }

    return response.json()
  },

  // Delete user
  async deleteUser(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/v1/admin/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    if (!response.ok) {
      throw new Error("Failed to delete user")
    }
  },
}
