import Link from "next/link";

export default function Home() {
  return (
      <div className="relative h-screen lg:max-w-screen-lg lg:mx-auto">
          <header className="bg-slate-200 fixed top-0 left-0 right-0 h-16 lg:left-auto lg:right-auto">01</header>
          <div className="bg-slate-200 grid pt-16 h-full overflow-auto md:grid-cols-2 landscape:grid-cols-2">
              <div className="bg-amber-200 h-80 md:h-full landscape:h-full">01</div>
              <div className="grid gap-4 md:overflow-auto landscape:overflow-auto">
                  <div className="bg-amber-300 h-80">02</div>
                  <div className="bg-amber-300 h-80">03</div>
                  <div className="bg-amber-300 h-80">04</div>
                  <div className="bg-amber-300 h-80">05</div>
                  <div className="bg-amber-300 h-80">06</div>
                  <div className="bg-amber-300 h-80">07</div>
              </div>
          </div>
          {/*<footer className="bg-slate-300 fixed bottom-0 left-auto right-auto h-16 md:left-1/2 md:top-0 md:h-12 landscape:left-1/2 landscape:top-0 landscape:h-12">03</footer>*/}
      </div>



  )
}
