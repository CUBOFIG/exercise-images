import { useRouter } from 'next/router';

const Images = ({ photos }: any) => {
  const router = useRouter();

  const cambiarRuta = (nuevaRuta: string) => {
    router.push(`/images/${nuevaRuta}`);
  }

  return (
    <div>
      Aqui no hay nada, solo regresa...
    </div>
  )
}
export default Images
