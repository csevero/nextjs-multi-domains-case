import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  if (url.pathname.includes('_next')) return

  if (hostname?.includes('telemedicina')) {
    // telemedicina.domain.com.br
    const companySlug = hostname?.split('.')[1]
    // const handleWithPathname = url.pathname.split('/')

    // handleWithPathname.splice(0, 2)

    // const formattedPathname = handleWithPathname.join('/')

    // Rewrite URL path to remove the company slug
    // const newPathname = url.pathname.replace(`/${companySlug}`, '')

    // Ensure we don't end up with double slashes
    // url.pathname = newPathname.startsWith('/') ? newPathname : `/${newPathname}`

    // url.pathname = `/${companySlug}${formattedPathname}`
    url.pathname = `/${companySlug}${url.pathname}`

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
