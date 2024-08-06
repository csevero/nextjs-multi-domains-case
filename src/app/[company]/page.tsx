'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCustomDomain } from '../hooks/useCustomDomain'

export default function CompanyPage() {
  const params = useParams()

  const { generateDomainNameBasedOnCompany } = useCustomDomain()
  const { company } = params

  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <Link className="mr-5 p-3 bg-slate-600 rounded-full" href="/">
        Voltar
      </Link>
      <h1>Company: {company}</h1>
      <div className="flex flex-col gap-3">
        <Link
          className="ml-5 p-3 bg-slate-600 rounded-full"
          href={generateDomainNameBasedOnCompany(`${company}/login`)}
        >
          Login
        </Link>
        <Link
          className="ml-5 p-3 bg-slate-600 rounded-full"
          href={generateDomainNameBasedOnCompany(`${company}/register`)}
        >
          Cadastro
        </Link>
      </div>
    </div>
  )
}
