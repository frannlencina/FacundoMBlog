import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import Breadcrumb from '@/app/components/Breadcrumb';

let find = false;
async function getPost(slug: string) {
  const res = await fetch(`http://localhost:1337/api/blogs/${slug}?populate=*&timestamp=${Date.now()}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Post not found');
      }
      find = true
      return res.json();
    })
    .then((res) => res.data.attributes)
    .catch((error) => {
      console.error('Error fetching post:', error);
      find = false
      return null; // Devuelve null para indicar que no se encontró el post
    });
  return res;
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {


  const post = await getPost(slug);

  return (
    <>
      {
        find ? (
          <section>
            <div className='text-center'>
              <span className='text-sm text-white mb-12 inline-block  h-fit px-3 py-1 rounded-lg bg-[--light-blue]'>{moment(post.publishedAt).format('DD/MM/YYYY')}</span>
              <h2 className='text-4xl font-black text-[--mid-blue]'>{post.title}</h2>
              <p className='text-lg text-[--grey]'>{post.description}</p>
            </div>
            <div className='mt-12 mb-4 flex justify-center max-h-72'>
              <img className='object-cover rounded-3xl' src={post.banner.data.attributes.url} alt="" />
            </div>
            <div className='mx-auto flex justify-center mb-32'>
              <Breadcrumb homeElement={'Home'}
                separator={<span> - </span>}
                activeClasses='text-blue-500'
                containerClasses='flex py-5'
                listClasses=' hover:underline mx-4 '
                capitalizeLinks />
            </div>
            <section id='postContainer'>
              <div>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </section>

          </section>) : <section>
          <Breadcrumb homeElement={'Home'}
            separator={<span> <i className="ri-arrow-drop-right-fill"></i> </span>}
            activeClasses='text-blue-500'
            containerClasses='flex py-5'
            listClasses='hover:underline mx-2 '
            capitalizeLinks />
          <h2 className='text-center'>No se encontraron datos para la URL especificada</h2>
        </section>
      }
    </>
  );
}
