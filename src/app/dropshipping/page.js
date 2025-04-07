import Home from '@/components/dropshipping/home/Home'
import DropshipperMiddleWareProvider from '@/components/dropshipping/middleware/DropshipperMiddleWareContext'

export default function page() {
  return (
    <>
      <DropshipperMiddleWareProvider>
        <Home />
      </DropshipperMiddleWareProvider>

    </>
  )
}
