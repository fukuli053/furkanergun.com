// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createApi} from "unsplash-js";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // @ts-ignore
  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: process.env.UNSPLASH_ACCESS_KEY
  });

  // @ts-ignore
  api.users.getPhotos({ username: process.env.UNSPLASH_USERNAME }).then((response) => {
    // @ts-ignore
    return res.status(response.status).json(response.response);
  }).catch((err) => {
    res.status(405).json(err);
  })

}
