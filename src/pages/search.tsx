import { BookingFilter, BookingHeader, BookingList, BookingSummary, Header } from '@/components'

const SearchPage = () => {
  return (
    <section className="bg-bg">
      <Header />
      <div className="mt-header">
        <BookingHeader />
      </div>
      <div className="container mb-[5px] mt-[15px]">
        <div className="grid grid-cols-right-270 gap-[10px]">
          <div className="">
            <div className="mb-[5px]">
              <BookingFilter />
            </div>
            <BookingList />
          </div>
          <div className="">
            <BookingSummary />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPage
