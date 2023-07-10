import { members } from '@/classroom'
import { IGroup } from '@/interfaces'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
} | IGroup[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  

  try {
    
    const resp = await members.inviteMember('TEACHER') as any


    res.status(200).json(resp)

  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error al realizar la consulta'})
  }

}