import FloatingNav from "@/components/FloatingNav"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"

export default async function Privacy() {
  // 1. Locate the file on the file system
  const filePath = path.join(process.cwd(), "app", "privacy", "content.md")
  const fileContent = fs.readFileSync(filePath, "utf8")

  // 2. Parse the frontmatter metadata and the actual content
  const { data: frontmatter, content } = matter(fileContent)

  // 3. Render the HTML server-side
  return (
    <article className="prose prose-invert max-w-none p-6">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-400">{frontmatter.date}</p>
      <hr />
      <MDXRemote source={content} />
    </article>
  )
}