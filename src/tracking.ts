import ReactGA from 'react-ga4';
import {getSearchParam} from "./context";


export function initializeTracker() {
  const searchParam = getSearchParam()

  if (Boolean(searchParam.debug)) {
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    return;
  }

  ReactGA.initialize('G-FXM4BNBKLT');
}

export function trackPageView() {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  })
}

export function trackChangeLocation(location: string) {
  ReactGA.event({
    category: 'Location',
    action: `Change Location: ${location}`,
  })
}

export function trackPressThumbnail(name: string) {
  ReactGA.event({
    category: 'Photo',
    action: `Press Thumbnail: ${name}`
  })
}

export function trackPhotoViewerNavigation() {
  ReactGA.event({
    category: 'Photo',
    action: 'Navigation PhotoViewer'
  })
}

export function trackPhotoView(name: string) {
  ReactGA.event({
    category: 'Photo',
    action: `View Photo in Viewer: ${name}`
  })
}

export function trackPressGiftMoneyButton(name: string) {
  ReactGA.event({
    category: 'GiftMoney',
    action: `Press GiftMoney Button: ${name}`
  })
}

export function trackPressAccountNumber(name: string) {
  ReactGA.event({
    category: 'GiftMoney',
    action: `Press Account Number: ${name}`
  })
}
