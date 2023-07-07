import { classroom_v1 } from "googleapis"
import { classroom } from "./"


export const getCourses = async( nameCourse: string): Promise<classroom_v1.Schema$Course[] | undefined > => {

  try {
    
    const { data } = await classroom.courses.list()
    const { courses } = data

    return nameCourse === 'all' ? courses : courses?.filter( course => course.name === nameCourse)
  
  } catch (error) {
    
    return undefined
  }
}

export const createCourse = async() => {
  try {
    const courseCreated = await classroom.courses.create({
      requestBody: {
        ownerId: 'me',
        name: 'Ejemplo 3'
      }
    })
  
    return courseCreated
  } catch (error) {
    
    console.log(error)

    return undefined
  }
}

export const deleteAllCourses = async (): Promise<boolean> => {
  
  try {
    
    const courses = await getCourses('all')

    if( !courses ) throw new Error('Error al obtener los cursos, verificar logs')
    
    for await ( const course of courses ){
       classroom.courses.delete({
        id: course.id!
      })
    }

    return true

  } catch (error) {
    console.log(error)

    return false
  }
}

export const deletecourse = async ( id: string ) => {
  
  try {
    
    await classroom.courses.delete({
      id
    })

    return true

  } catch (error) {
    console.log(error)
    return false
  }
}