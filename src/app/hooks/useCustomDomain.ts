'use client'
import { useEffect, useState } from 'react'

export const useCustomDomain = () => {
  const [isCustomDomain, setIsCustomDomain] = useState(false)

  useEffect(() => {
    const hostname = window.location.hostname

    if (hostname.includes('telemedicina')) {
      setIsCustomDomain(true)
    } else {
      setIsCustomDomain(false)
    }
  }, [])

  function generateDomainNameBasedOnCompany(targetPath: string) {
    const pathWithoutCompanySlug = targetPath.split('/').filter(path => path)
    const anchorArray = targetPath.split('/').filter(path => path)
    anchorArray.splice(0, 1)

    const isSourcePath = pathWithoutCompanySlug.length === 1

    if (isSourcePath) {
      return isCustomDomain ? '/' : targetPath
    }

    return isCustomDomain ? `/${anchorArray.join('/')}` : targetPath
  }

  return { isCustomDomain, generateDomainNameBasedOnCompany }
}
