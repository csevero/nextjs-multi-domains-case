'use client'
import { useCustomDomain } from '@/app/hooks/useCustomDomain'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function RegisterPage() {
  const params = useParams()
  const { generateDomainNameBasedOnCompany } = useCustomDomain()

  const { company } = params

  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <Link
        className="mr-5 p-3 bg-slate-600 rounded-full"
        href={generateDomainNameBasedOnCompany(`/${company}`)}
      >
        Voltar
      </Link>
      <h1>Opa estou na tela de registro da empresa {company}</h1>
      <Link
        className="mr-5 p-3 bg-slate-600 rounded-full"
        href={generateDomainNameBasedOnCompany(
          `/${company}/register/sub-register`,
        )}
      >
        Ir para sub-registro
      </Link>
    </div>
  )
}
