// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3500/data`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

const Data = () => {
  return (
    <div>{data}</div>
  )
}

export default Data;