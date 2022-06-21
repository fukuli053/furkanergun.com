import useSWR from 'swr'
import { useLayoutEffect } from "react";
import Masonry from 'react-masonry-css'
import NextImage from "next/image";
import A from "components/a";

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

function Photos() {
    const { data, error } = useSWR('/api/photos', fetcher);

    useLayoutEffect(() => {

    }, []);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {data.results.map((item) => {
                return (
                    <div key={item.id} className="photos-item mb-8">
                        <A href={item.links.html}>
                            <NextImage
                                src={item.urls.regular}
                                alt={item.description}
                                width={item.width}
                                height={item.height}
                                layout="responsive"
                            />
                        </A>
                    </div>
                );
            })}
        </Masonry>

    );
}

export default Photos;
