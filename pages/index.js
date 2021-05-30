import Layout from '../components/layout/Layout'
import Cvs from '../components/ui/cvs/cvs'

export default function Home() {
  return (
    <div className="leading-normal gradient text-white fontAppear">
      <Layout>
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 py-6 text-center">
            </div>
            <Cvs />
          </div>
        </div>
      </Layout>
    </div>
  )
}
