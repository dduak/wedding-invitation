import React, {createContext, useContext, useEffect, useState} from "react";


export enum PageType {
  DEFAULT = '',
  PARENTS = 'parents',
  JEJU = 'jeju'
}

const AppContext = createContext({
  pageType: PageType.DEFAULT
})

export const AppProvider: React.FC = props => {
  const [pageType, setPageType] = useState(PageType.DEFAULT)

  useEffect(() => {
    const queryStr = window.location.search.split('?')[1];

    if (!queryStr) {
      return;
    }

    const searchQuery = queryStr.split('&').reduce((acc, cur) => {
      const [key, value] = cur.split('=')

      acc[key] = value

      return acc
    }, {} as Record<string, string>)

    const type = searchQuery['type'] as PageType || PageType.DEFAULT

    setPageType(type)
  }, [])

  return (
    <AppContext.Provider value={{ pageType }}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
