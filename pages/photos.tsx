import type { NextPage } from 'next'
import PageTransition from "../components/PageTransition";
import Social from "../components/Social";
import dynamic from "next/dynamic";
import A from "../components/a";

const Photos = dynamic(() => import("components/Photos"), {
    ssr: false,
});

const PhotosPage: NextPage = () => {

    return (
        <PageTransition>
            <div className="c-small">
                <div className="space-y-6">
                    <h1 className="text-highlight text-2xl">
                        I'm trying to capture something from my own frame.
                        I shoot with an iPhone 13 Pro.
                    </h1>
                </div>
            </div>
            <div className="c-large mt-10">
                <Photos />
            </div>
        </PageTransition>
    )
}

export default PhotosPage
