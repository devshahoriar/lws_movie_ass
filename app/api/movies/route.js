import product from '@/db/data.json'
import { NextResponse } from 'next/server'

export const GET = () => {
  return NextResponse.json(product)
}
