import React, {createContext, useContext, useEffect, useState} from "react";


export enum Target {
  DEFAULT = '',
  PARENTS = 'parents',
}
export enum Location {
  SEOUL = 'seoul',
  JEJU = 'jeju'
}

const AppContext = createContext({
  target: Target.DEFAULT,
  location: Location.SEOUL,
  toggleLocation: () => {},
})

export const AppProvider: React.FC = props => {
  const [target, setTarget] = useState(Target.DEFAULT)
  const [location, setLocation] = useState(Location.SEOUL)
  const toggleLocation = () => {
    const searchParam = getSearchParam()
    const nextSearchParam = {...searchParam}

    if (searchParam.location === Location.JEJU) {
      delete nextSearchParam.location
      setLocation(Location.SEOUL)
    } else {
      nextSearchParam.location = Location.JEJU
      setLocation(Location.JEJU)
    }

    const url = buildUrl(nextSearchParam)

    window.history.pushState({}, '', url)
  }

  useEffect(() => {
    const updateAppState = () => {
      const searchParam = getSearchParam()

      setLocation(searchParam.location || Location.SEOUL)
      setTarget(searchParam.target || Target.DEFAULT)
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
    target,
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

type SearchParam = Record<string, string> & {
  target?: Target
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

function getSearchParam(): SearchParam {
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
