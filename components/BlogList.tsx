import Image from "next/image"
import urlFor from "../lib/urlFor"
import category from "../schemas/category";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
}

function BlogList({ posts }: Props) {
    return (
        <div className="mt-10">
            <div className=" grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
                {/* Posts */}
                {posts.map(post => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                        <div className="flex flex-col group cursor-pointer">
                            <div className="relative w-full h-80 group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill>

                                </Image>
                                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                    <div>
                                        <p>{post.title}</p>
                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                    {/* minute 1.38
                        <div>
                            {post.categories.map(category => (
                                <div>
                                    <p>{category.title}</p>
                                </div>
                            ))}
                        </div> */}
                                </div>
                            </div>
                            <div className="mt-5 flex-1">
                                <p className="line-clamp-2 text-gray-500">
                                {post.description}
                            </p>
                            </div>
                            <p className="mt-5 font-bold flex items-center group-hover:underline">
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}

            </div>

        </div>
    )
}

export default BlogList