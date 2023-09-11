import { Footer, Header, HomeScreen } from '@/components'
import { Main } from '@/templates'

const HomePage = () => {
  return (
    <Main title="Next.js Boilerplate Presentation" description="Test">
      <Header />
      <section className="min-h-[calc(70vh)] lg:h-[800px] relative mb-[360px] sm:mb-[300px] lg:mb-[100px]">
        <HomeScreen />
      </section>
      <div className="relative">
        <div className="absolute top-[0px] left-[300px] bottom-[0px] right-[0px] bg-[#F4F2F9]"></div>
        <div className="h-footer container relative">
          <div className="absolute top-[0px] left-[0px] bottom-[0px] right-[0px] z-10">
            <Footer />
          </div>
        </div>
      </div>
    </Main>
  )
}

export default HomePage
