import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "../lib/axios"


export const useAuth = ({ middleware } = {}) => {
  const router = useRouter();

  // Loading 
  const [isLoading, setIsLoading] = useState(true)

  // User
  const { data: user, error, mutate } = useSWR('/api/v1/user',
  () => axios
        .get('/api/user')
        .then(res => res.data.data)
        .catch(error => {
            if (error.response.status !== 409) 
              throw error
        }),
  )

  // CSRF
  const csrf = () => axios.get('/sanctum/csrf-cookie')

  // Login
  const login = async ({ setErrors, ...props }) => {
    // await csrf()

    // setErrors([])

    axios
        .post('/login', router.push('/manager'))
  }

  // Logout
  const logout = async () => {
    if (!error) {
        await axios.post('/logout')
        mutate(null)
    }

    router.push('/')
  }

  useEffect(() => {
    if (user || error) {
      setIsLoading(false, []);
    }

    if (middleware === 'guest' && user) {
      router.push('/')
    }

    if (middleware === 'auth' && error) {
      router.push('/login')
    }
  })

  return {
    user,
    csrf,
    isLoading,
    login,
    logout,
  }
}