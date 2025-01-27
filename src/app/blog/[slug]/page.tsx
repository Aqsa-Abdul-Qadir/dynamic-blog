import { getBlogBySlug } from '@/sanity/lib/sanityQueries';
import { notFound } from 'next/navigation'; // For handling 404
import BlogComments from './BlogComment';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image'; // Import Image from next/image

interface BlogProps {
  params: {
    slug: string;
  };
}

const BlogPost = async ({ params }: BlogProps) => {
  const { slug } = params;
  console.log('Fetching blog for slug:', slug); // Debugging

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    console.error('Blog not found for slug:', slug);
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{blog.name}</h1>
      <p className="text-xl mb-4 text-gray-600">{blog.subheading}</p>
      {blog.poster && (
        <Image
          src={urlFor(blog.poster).width(800).auto('format').url()}
          alt="Blog Post"
          width={800}
          height={450}
          className="w-full h-auto mb-4"
        />
      )}
      <div className="prose">
        <PortableText value={blog.content} />
      </div>
      <BlogComments />
    </div>
  );
};

export default BlogPost;