"use client"

import { useState } from "react"

export function useDomainInfo() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const scanDomain = async (domain) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:5000/eval", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: domain }),
      })

      const result = await response.json()
      console.log(result);
      console.log(result.dns_records);
      // console.log(result.ssl_info);
      // console.log (result.ssl_info?.issuer?.[1]?.[0]?.[1])
      // console.log(result.ssl_info?.issuer);
      // console.log(result.ssl_info?.validFrom);
      // console.log(result.ssl_info?.validTo);
      console.log(result.whois_info.name_servers);
      // console.log(`CN=${result.domain}`);


      const mockData = {
        domain: result.domain,
        domainInfo: {
          registrar: result.whois_info.registrar || "Unknown Registrar",
          creationDate: result.whois_info.creation_date || "N/A",
          expirationDate: result.whois_info.expiration_date || "N/A",
          nameServers: result.whois_info.name_servers || [],
        },
        // dnsRecords: {
        //   A: result.dns_records?.A || [],
        //   AAAA: result.dns_records?.AAAA || [],
        //   MX: result.dns_records?.MX || [],
        //   TXT: result.dns_records?.TXT || [],
        //   NS: result.dns_records?.NS || [],
        // },
        dnsRecords: {
          A: result.dns_records?.A?.map((entry) => ({
            name: result.domain || "Unknown",
            value: entry.value || "N/A",
            ttl: entry.ttl || 0
          })) || [],
        
          MX: result.dns_records?.MX?.map((entry) => ({
            name: result.domain || "Unknown",
            value: entry.value || "N/A",
            ttl: entry.ttl || 0
          })) || [],
        
          AAAA: result.dns_records?.AAAA?.map((entry) => ({
            name: result.domain || "Unknown",
            value: entry.value || "N/A",
            ttl: entry.ttl || 0
          })) || [],
        
          TXT: result.dns_records?.TXT?.map((entry) => ({
            name: result.domain || "Unknown",
            value: entry.value || "N/A",
            ttl: entry.ttl || 0
          })) || [],
        
          NS: result.dns_records?.NS?.map((entry) => ({
            name: result.domain || "Unknown",
            value: entry.value || "N/A",
            ttl: entry.ttl || 0
          })) || [],
        },
        
        whoisInfo: result.whois_info
          ? Object.entries(result.whois_info)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n")
          : `Domain Name: ${result.domain}\nNo WHOIS data available`,

        // whoisInfo: result.whois_info || `Domain Name: ${result.domain}\nNo WHOIS data available`,
        sslInfo: {

          // issuer: result.ssl_info?.issuer || "Unknown Issuer",
          issuer: result.ssl_info?.issuer?.[1]?.[0]?.[1] || "Unknown Issuer",
          // validFrom: result.ssl_info?.validFrom || "N/A",
          // validTo: result.ssl_info?.validTo || "N/A",
          subject: `CN=${result.domain}`,
        },
      }

      setData(mockData)
    } catch (err) {
      setError("Failed to fetch domain information. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, scanDomain }
}





// "use client"

// import { useState } from "react"

// export function useDomainInfo() {
//   const [data, setData] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)

//   const scanDomain = async (domain) => {
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("http://localhost:5000/eval", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ data: domain }),
//       })

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`)
//       }


//       const result = await response.json()
//       setData(result)
//     } catch (err) {
//       setError("Failed to fetch domain information. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return { data, isLoading, error, scanDomain }
// }
