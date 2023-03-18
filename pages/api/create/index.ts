import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  console.log(req.body);
  if (req.method === 'POST') {
    try {

        const search = await prisma.joueurs.findMany({
            where: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
            },
        });
        if (search.length > 0) {
            return res.status(400).json({ msg: 'Joueur already exists' });
        }
        const data = await prisma.joueurs.create({
            data: req.body,
        });
        return res.status(200).json("success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    return res.status(405).json({ msg: 'Only get allowed ' });
  }
}