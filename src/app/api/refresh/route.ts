export const runtime = 'edge';

import { fetchMonitors } from '../../../utils/api'
import { revalidatePath } from 'next/cache'

export async function POST() {
  try {
    await fetchMonitors()
    revalidatePath('/')
    return new Response(null, { status: 303, headers: { 'Location': '/' } })
  } catch (error) {
    console.error('Failed to refresh monitors:', error)
    return new Response('Failed to refresh monitors', { status: 500 })
  }
}
