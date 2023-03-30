import { useRouter } from 'next/router';

const Images = ({ photos }: any) => {
  const router = useRouter();

  const cambiarRuta = (nuevaRuta: string) => {
    router.push(`/images/${nuevaRuta}`);
  }

  return (
    <div>
      {
        photos?.map((photo: any, index: number) => 
        <div key={`user-photo-${photo.album}-${index}`} onClick={() => cambiarRuta(photo.id)}>
          <img src={photo.url} alt={photo.title} />
        </div>
        )
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

export default Images
