import { NextResponse } from 'next/server'
import movies from '@/db/data.json'
import fs from 'fs'
import path from 'path'

export const GET = (req, { params: { id } }) => {
  const movie = movies.find((movie) => movie.id === Number(id))
  if (!movie) {
    return NextResponse.json({ message: 'Movie not found' }, { status: 404 })
  }
  return NextResponse.json(movie)
}

export const DELETE = (req, { params: { id } }) => {
  const index = movies.findIndex((movie) => movie.id === Number(id))
  if (index === -1) {
    return NextResponse.json({ message: 'Movie not found' }, { status: 404 })
  }
  movies.splice(index, 1)

  return NextResponse.json({ message: 'Movie deleted' })
}

export const PATCH = async (req, { params: { id } }) => {
  const index = movies.findIndex((movie) => movie.id === Number(id))
  if (index === -1) {
    return NextResponse.json({ message: 'Movie not found' }, { status: 404 })
  }
  const {title} = await req.json()
  if (!title) {
    return NextResponse.json({ message: 'Title is required' }, { status: 400 })
  }
  movies[index].title = title
  return NextResponse.json(movies[index])
}
