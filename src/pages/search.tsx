import { BookingFilter, BookingHeader, Header } from '@/components'

const SearchPage = () => {
  return (
    <section className="bg">
      <div className="bg-primary">
        <Header />
      </div>
      <BookingHeader />
      <div className="container">
        <BookingFilter />
      </div>
    </section>
  )
}

export default SearchPage
