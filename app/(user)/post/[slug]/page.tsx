import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import Image from "next/image";
import category from "../../../../schemas/category";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
    params: {
        slug: string;
    };
}

export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`*[type=='post']
    {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,
    }));
}

async function Post({ params: { slug } }: Props) {

    const query = groq`
    *[_type=='post' && slug.current == $slug][0] 
    {
    ...,
    author->,
    categories[]->
    }
    `;

    const post: Post = await client.fetch(query, { slug });
    console.log(post)
    if (!post) {
        return <div><h2>No data to show</h2></div>
    }

    return (
        <article className="m-5">
            <section>
                <div>
                    <div>
                        <Image
                            className="object-cover object-center mx-auto"
                            src={urlFor(post.mainImage).url()}
                            height={800}
                            width={800}
                            alt={post.author.name}
                        >
                        </Image>
                    </div>
                    <section>
                        <div>
                            <div>
                                <h1 className=" mt-5 text-4xl font-extrabold">
                                    {post.title}
                                </h1>
                                <p className="mt-2">
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className=" mt-2 flex items-center space-x-2">
                                <Image
                                    className="rounded-full"
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                >
                                </Image>
                                <div>
                                    <h3>{post.author.name}</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="mt-2">{post.description}</h2>
                            <div className="mt-2">
                                {post.categories.map((category) => (
                                    <p key={category._id}>
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="m-5">
                <PortableText value={post.body} components={RichTextComponents}></PortableText>
            </section>
        </article>
    )
}

export default Post