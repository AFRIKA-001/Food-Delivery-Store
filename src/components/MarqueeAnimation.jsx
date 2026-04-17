
import MarqueeImages from './marqueeImages'
function MarqueeAnimation() {
  const Productcards = [
    { id: 1, image: '🍊' },
    { id: 2, image: '🍉' },
    { id: 3, image: '🍓' },
    { id: 4, image: '🍎' },
    { id: 5, image: '🍑' },
    { id: 6, image: '🍇' },
    { id: 7, image: '🥕' },
    { id: 8, image: '🫐' },
    { id: 9, image: '🍋' },
    { id: 10, image: '🫑' },
    { id: 11, image: '🌶️' },

  ]
  return (
    <>
      <div className='flex px-4 relative  overflow-x-hidden bg-yellow-500 py-3 border-y border-orange-200'>
        <div>
          <ul className='flex gap-8 pt-20  animate-marquee whitespace-nowrap'>
            {Productcards.map((item) => (<li key={item.id}>
              <MarqueeImages items={item} />
            </li>))}
          </ul>
        </div>
        <div>
          <ul className='flex gap-4 pt-20 animate-marquee whitespace-nowrap'>
            {Productcards.map((item) => (<li key={item.id}>
              <MarqueeImages items={item} />
            </li>))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MarqueeAnimation
