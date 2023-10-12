import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "../lib/axios"


export const useAuth = ({ middleware } = {}) => {
  const router = useRouter();

  // Loading 
  const [isLoading, setIsLoading] = useState(false)

  // User
  const { data: user, error, mutate } = useSWR('/manager',
  () => axios
        .get('/manager')
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

    console.log(props);
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