import { classroom } from "./classroom"


export const inivteTeacher = async () => {
  try {

    const invitedTeacher = await classroom.invitations.create({
      requestBody: {
        userId: 'ugalindo448@gmail.com',
        courseId: '615857821644', // idcourseId de prueba, generar modalidad dinamica,
        role: 'TEACHER' // TEACHER, STUDENT
      }
    })

    return true
    
  } catch (error) {
    
    console.log(error)
    return false
  }
}
