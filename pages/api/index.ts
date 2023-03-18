import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  // get page number from request 
  const page = req.query.page || 1;
  // get limit of items per page from request
  const limit = req.query.limit || 6;
  // calculate offset
  const offset = (page - 1) * limit;
  // get total number of items
  const total = (await prisma.joueurs.count()).toString();

  if (req.method === 'GET') {
    try {
      const data = await prisma.joueurs.findMany({
        take: Number(limit),
        skip: Number(offset),
      });
      
      // Convert any BigInt values in the data to regular numbers
      const processedData = JSON.parse(JSON.stringify(data, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      ));
      
      return res.status(200).json({
        data : processedData,
        total: total,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    return res.status(405).json({ msg: 'Only get allowed ' });
  }
}