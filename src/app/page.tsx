import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const companies = [
    {
      slug: 'sul-america-saude',
    },
    {
      slug: 'minhaempresa2',
    },
    {
      slug: 'empresa-test',
    },
    {
      slug: 'empresa-test-2',
    },
    {
      slug: 'unimed',
    },
    {
      slug: 'empresa-test-3',
    },
    {
      slug: 'deleted-at-1721938872388-empresa-test-3-1',
    },
    {
      slug: 'minhaempresa22',
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Empresas</h1>
      {companies.map(company => (
        <Link
          key={company.slug}
          href={`${company.slug}`}
          className="p-3 bg-slate-50 text-cyan-700 rounded-full"
        >
          {company.slug}
        </Link>
      ))}
    </main>
  )
}
