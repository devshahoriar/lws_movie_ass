import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

let defaultLocale = 'en'
let locales = ['en', 'bn']

function getLocale(request) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  const headers = { 'accept-language': acceptedLanguage }
  const languages = new Negotiator({ headers }).languages()

  return match(languages, locales, defaultLocale) // en or bn
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  if (pathname?.includes('api')) {
    return NextResponse.next()
  }

  const pathNameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
  )
  if (pathNameIsMissingLocale) {
    const prevLocal = request.cookies.get('NEXT_LOCALE')?.value
    if (prevLocal) {
      return NextResponse.redirect(
        new URL(`/${prevLocal}/${pathname}`, request.url)
      )
    }
    const locale = getLocale(request)
    const res = NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
    res.cookies.set('NEXT_LOCALE', locale)
    return res
  } else {
    const locale = pathname.split('/')[1]
    const res = NextResponse.next()
    res.cookies.set('NEXT_LOCALE', locale)
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
