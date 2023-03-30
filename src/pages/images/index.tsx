const images = ({ photos }: any) => {
  return (
    <div>
      {
        photos?.map((photo: any, index: number) => <img src={photo.url} alt={photo.title} key={`user-photo-${photo.album}-${index}`} />)
      }
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const photos = await res.json()

    return {
      props: {
        photos
      }
    }
  } catch (error) {
    console.log(error)
    return{}
  }
}

export default images
