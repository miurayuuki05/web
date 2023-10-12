import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getAuthor() {
  return client.fetch(
    groq`*[_type == "author"]{
      _id,
      name,
      "imageUrl" : image.asset->url
    }`
  );
}

export async function getPost() {
    return await client.fetch(
        groq`*[_type == "post"]{
            title,
            "imageUrl" : mainImage.asset->url,
            slug,
            body
        }
        `
    )
}

export async function getPostBySlug(slug: any) {
    return await client.fetch(
        groq`*[_type == "post" && slug.current == $slug]{
            title,
            "imageUrl" : mainImage.asset->url,
             body,
        }
        `,
        {slug}
    )
}

export async function getBlogBySlug(slug: any) {
    return await client.fetch(
        groq`*[_type == "blog" && slug.current == $slug]{
            projectName,
            projectType,
            "imageUrl" : mainImage.asset->url,
            description,
        }
        `,
        {slug}
    )
}

export async function getProject() {
    return await client.fetch(
        groq`*[_type == "projects"]{
            title,
            "imageUrl" : image.asset->url,
            link,
        }
        `
    )
}
    