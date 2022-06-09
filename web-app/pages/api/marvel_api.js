import axios from "axios";
import md5 from "md5";

const PRIVATE_API_KEY = process.env.PRIVATE_API_KEY;
const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;
const BASE_ENDPOINT = process.env.BASE_ENDPOINT;

const ts = new Date().getTime();
const hash = md5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY);

export default async (req, res) => {
  try {
    const searchTerm = req?.body?.searchTerm;

    const URL = `${BASE_ENDPOINT}/characters?${
      searchTerm && "name=" + searchTerm?.toLowerCase()
    }&limit=30&ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}`;

    const { data } = await axios(URL);
    res.status(200).json({ data: data?.data });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
