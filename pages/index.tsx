import type { NextPage } from 'next'
import PageTransition from "../components/PageTransition";
import Social from "../components/Social";
import dynamic from "next/dynamic";
import A from "../components/a";

const Photos = dynamic(() => import("components/Photos"), {
    ssr: false,
});

const Home: NextPage = () => {

  return (
      <PageTransition>
        <div className="c-small">
          <div className="space-y-6">
            <h1 className="text-highlight text-2xl font-bold">
              Ben Furkan Ergün.
              <br />
                I'm a Full-Stack developer living in Istanbul.
            </h1>

            <p className="text-xl">
                I'm a Full Stack developer with experience in Mobile, Backend, Frontend and DevOps development.
            </p>

            <p className="text-xl">
                Currently I am mobile developer from <A className={'font-normal hover:font-bold text-decoration-line: underline '} href={"https://www.trexoin.com/"}>Trexo</A> and I am trying to improve myself Swift.
            </p>
          </div>

          <div className="mt-10">
            <Social />
          </div>
        </div>

        <div className="c-large mt-40">
          <Photos />
        </div>

      </PageTransition>
  )
}

export default Home
