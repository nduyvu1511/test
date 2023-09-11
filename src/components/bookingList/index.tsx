import { BookingItem } from './bookingItem'
import { bookingData } from './data'

export const BookingList = () => {
  return (
    <div className="">
      {bookingData.map((item, index) => (
        <BookingItem key={index} data={item} />
      ))}
    </div>
  )
}
