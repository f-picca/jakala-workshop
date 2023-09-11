'use client'
import { CommerceLayer } from "@commercelayer/react-components/auth/CommerceLayer"
import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { OrderStorage } from "@commercelayer/react-components/orders/OrderStorage"
import { authentication } from "@commercelayer/js-auth"
import { useEffect, useState } from "react"


const getStoredAuthorization = (market) => {
  const authAsString = localStorage.getItem(`authorization-${market}`)

  if (authAsString != null) {
    return JSON.parse(authAsString)
  }

  return null
}

const hasExpired = (time) => time === undefined || time < Date.now()

const isValid = (auth) => auth != null ? !hasExpired(auth.expires) : false

function CommerceLayerAuth({ children, clientId, slug, market }) {
  const [authorization, setAuthorization] = useState(null)

  useEffect(() => {
    async function run() {
      const storedAuthorization = getStoredAuthorization(market)
      if (isValid(storedAuthorization)) {
        setAuthorization(storedAuthorization)
      } else {
        const result = await authentication("client_credentials", {
          clientId,
          slug,
          scope: `market:${market}`,
        })
        const auth = {
          ...result,
          expires: Date.now() + (result.expiresIn * 1000)
        }
        localStorage.setItem(`authorization-${market}`, JSON.stringify(auth))
        setAuthorization(auth)
      }
    }
    void run()
  }, [market])

  if (authorization == null) {
    return null
  }
  console.log(`order-${market}`)

  return (
    <CommerceLayer
      accessToken={authorization.accessToken}
      endpoint={`https://${slug}.commercelayer.io`}
    >
      <OrderStorage persistKey={`order-${market}`}>
        <OrderContainer>{children}</OrderContainer>
      </OrderStorage>
    </CommerceLayer>
  )
}

export default CommerceLayerAuth