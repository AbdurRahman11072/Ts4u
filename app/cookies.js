
import { cookies } from 'next/headers'
 
export default function cookies() {
  const cookieStore = cookies()
  const token = cookieStore.get('theme')
  return token
}

