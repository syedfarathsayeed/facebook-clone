import React from "react"
import { useCookies } from "react-cookie"

const TOKEN = "token"

// The token cookie is the same for the whole application,
// no matter what the route

const options = { path: "/", sameSite: 'strict' }

/**
 * Hook to manage token. It returns a tuple containing the value of the
 * token and functions to change and remove it.
 * It can be used like:
 *      const {token, setToken} = useToken()
 */

export const useToken = () => {
    const [cookies, setCookie, removeCookie] = useCookies([TOKEN])

    const setToken = React.useCallback((token) => {
        setCookie(TOKEN, token, options)
    }, [setCookie])

    const removeToken = React.useCallback(() => {
        removeCookie(TOKEN, options)
    }, [removeCookie])

    return { token: cookies.token, setToken, removeToken }
}
