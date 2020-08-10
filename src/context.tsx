import React, {createContext, useContext, useEffect, useState} from "react";
import {trackChangeLocation} from "./tracking";


export enum Type {
  DEFAULT = '',
  PARENTS = 'parents',
}
export enum Location {
  SEOUL = 'seoul',
  JEJU = 'jeju'
}

const AppContext = createContext({
  type: Type.DEFAULT,
  location: Location.SEOUL,
  toggleLocation: () => {},
})

export const AppProvider: React.FC = props => {
  const [type, setType] = useState(Type.DEFAULT)
  const [location, setLocation] = useState(Location.SEOUL)
  const toggleLocation = () => {
    const searchParam = getSearchParam()
    const nextSearchParam = {...searchParam}

    if (searchParam.location === Location.JEJU) {
      delete nextSearchParam.location
      setLocation(Location.SEOUL)
      trackChangeLocation(Location.SEOUL)
    } else {
      nextSearchParam.location = Location.JEJU
      setLocation(Location.JEJU)
      trackChangeLocation(Location.JEJU)
    }

    const url = buildUrl(nextSearchParam)

    window.history.pushState({}, '', url)
  }

  useEffect(() => {
    const updateAppState = () => {
      const searchParam = getSearchParam()

      setLocation(searchParam.location || Location.SEOUL)
      setType(searchParam.type || Type.DEFAULT)
    }

    updateAppState()

    const popstateListener = () => {
      updateAppState()
    }

    window.addEventListener('popstate', popstateListener)

    return () => {
      window.removeEventListener('popstate', popstateListener)
    }
  }, [])

  const contextValue = {
    type,
    location,
    toggleLocation,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export function useIsJejuParents() {
  const {location, type} = useAppContext()
  const isJeju = location === Location.JEJU
  const isParentsType = type === Type.PARENTS

  return isJeju && isParentsType
}

type SearchParam = Record<string, string> & {
  type?: Type
  location?: Location
}

function buildUrl(searchParam: SearchParam) {
  let url = window.location.pathname
  const search = Object.keys(searchParam).reduce((acc, cur) => {
    const fragment = `${cur}=${searchParam[cur]}`

    if (acc) {
      return `${acc}&${fragment}`
    }

    return fragment
  }, '')

  if (search) {
    url = url + '?' + search
  }

  return url
}

export function getSearchParam(): SearchParam {
  const queryStr = window.location.search.split('?')[1];

  if (!queryStr) {
    return {};
  }

  const searchParam = queryStr.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')

    acc[key] = value

    return acc
  }, {} as Record<string, string>)

  return searchParam
}
