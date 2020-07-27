import React, {forwardRef, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import './Gallery.css';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';



const images = [
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 1365, h: 2048 },
  { w: 2048, h: 1415 },
  { w: 2048, h: 1365 },
  { w: 1365, h: 2048 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
  { w: 2048, h: 1365 },
]

type Props = {

};
type Item = {
  index: number
  src: string
  w: number
  h: number
}

const Gallery: React.FC<Props> = props => {
  const [items, setItems] = useState<Item[]>([])
  const rows = useMemo(() => {
    const rows:Item[][] = []

    for (let i = 0, len = items.length; i < len; i++) {
      const row = Math.floor(i / 3)
      if (!rows[row]) {
        rows[row] = []
      }
      rows[row].push(items[i])
    }

    return rows
  }, [items])

  const pswpRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const nextItems: Item[] = [];

    for (let i = 0; i < 18; i++) {
      nextItems.push({
        index: i,
        src: `/photos/${i+1}_2048.jpg`,
        w: images[i].w,
        h: images[i].h,
      });
    }

    setItems(nextItems)
  }, [])

  const openGalleryWithIndex = useCallback((index = 0) => {
    if (!pswpRef.current) {
      return;
    }

    const options: PhotoSwipe.Options = {
      index,
    };

    const gallery = new PhotoSwipe(pswpRef.current, PhotoSwipeUI_Default, items, options);

    gallery.init();
  }, [items])

  return (
    <>
      <div className="gallery">
        {rows.map((row, rowIndex) => (
          <div className="gallery-row" key={rowIndex}>
            {row.map(item => (
              <div className="gallery-item" key={item.index}>
                <button
                  type="button"
                  onClick={() => {
                    openGalleryWithIndex(item.index)
                  }}
                >
                  <img
                    src={item.src.replace('2048', '1024')}
                    sizes="293px"
                    alt=""
                  />
                  <span className="blinder"></span>
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <PhotoSwipeContainer ref={pswpRef}/>
    </>
  )
}

const PhotoSwipeContainer: React.ForwardRefExoticComponent<any> = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">

      <div className="pswp__bg"></div>

      <div className="pswp__scroll-wrap">

        <div className="pswp__container">
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
        </div>

        <div className="pswp__ui pswp__ui--hidden">

          <div className="pswp__top-bar">

            <div className="pswp__counter"></div>

            <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <button className="pswp__button pswp__button--share" title="Share"></button>

            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

            <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

            <div className="pswp__preloader">
              <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                  <div className="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div className="pswp__share-tooltip"></div>
          </div>

          <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
          </button>

          <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
          </button>

          <div className="pswp__caption">
            <div className="pswp__caption__center"></div>
          </div>

        </div>

      </div>

    </div>
  )
})

export default Gallery
