import Layout from '../components/layout/Layout'
const images = [
  "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
];

export default function Home() {
  return (
    <div className="leading-normal gradient text-white fontAppear">
      <Layout>
        <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">The world of technology is awesome</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
          Full Stack Developer  DevOps | SRE
          </h1>
          <p className="leading-normal text-2xl mb-8">
          site under development
          </p>
          
        </div>
        <div className="w-full md:w-3/5 py-6 text-center">
        </div>
      </div>
        </div>
      </Layout>
    </div>
  )
}
