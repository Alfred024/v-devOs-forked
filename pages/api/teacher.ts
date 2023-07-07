import { courses, teachers } from '@/classroom'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case 'POST':
      return sendInvitationTeacher( req, res )

  
    default:
      return res.status(400).json({ message: 'Bad request'})
  }

  

}

const sendInvitationTeacher = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const sentCorrectInvitation = await teachers.inivteTeacher()

  return sentCorrectInvitation
    ? res.status(200).json({ message: 'Invitacion enviada correctamente'})
    : res.status(400).json({ message: 'Error al enviar invitacion, verificar logs del servidor'})
}
